// Imports needed to write from out database file
const fs = require('fs');
const path = require('path');



// Routing

module.exports = (app) => {

    // GET Requests
    app.get('/api/notes', (req, res) => {

        // Import the database file
        let database = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf-8');
        // Convert to readable format
        database = JSON.parse(database);

        res.json(database)
    });

    // POST Requests
    app.post('/api/notes', (req, res) => {

        // Import the database file
        let database = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf-8');
        // Convert to readable format
        database = JSON.parse(database);

        // This is the note that we want to post
        const currentNote = {
            title: req.body.title,
            text: req.body.text,
            // Set the ID property to the current size of the database, also increments it properly
            id: ++database.length
        };

        // Now add that note to the database
        database.push(currentNote);

        // This will delete all null values before we append to the database file
        database = database.filter((element) => {
            return element !== null;
        });

        // Update the database file
        fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(database), 'utf8');

        res.json(true);

    });

    // DELETE Requests
    app.delete('/api/notes/:id', (req, res) => {

        // Import the database file
        let database = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf-8');
        // Convert to readable format
        database = JSON.parse(database);

        // Gets the index of the note to delete in the array, by using the ID
        for (let i = 0; i < database.length; i++) {
            if (database[i].id == req.params.id) {

                // Delete from the database, then update it
                // I am going to just make it empty, so it wont mess with the ID numbers since they correlate to the size of the array
                database.splice(i, 1);
                fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(database), 'utf8');
                res.json(true);

            };
        };


    });
};