// Import our "database file"
const database = require('../Develop/db/db.json');

// Routing

module.exports = (app) => {

    // GET Requests
    app.get('/api/notes', (req, res) => res.json(database));

    // POST Requests
    app.post('/api/notes', (req, res) => {

        // This is the note that we want to post
        let currentNote = req.body;

        // Set the ID property to the current size of the database, also increments it properly
        currentNote.id = ++database.length;


        // Now add that note to the database
        database.push(req.body);
        res.json(true);

    });

    // DELETE Requests
    app.delete('/api/notes/:id', (req, res) => {

        // Gets the id of the note you want to delete.
        const deleteID = req.params.id;

        // Delete that note from the database using its ID property
        database.filter(note = () => {
            if (note.id === deleteID) return false;
        });
        res.json(true);

    });
};