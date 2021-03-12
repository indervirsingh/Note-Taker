// Import our "database file"
const database = require('../Develop/db/db.json');

// Routing

module.exports = (app) => {

    // GET Requests
    app.get('/api/notes', (req, res) => res.json(database));

    // POST Requests
    app.post('/api/notes', (req, res) => {
        // This code adds an id to the note before it is stored in the db.json fiile
        let array = req.body;
        array.id;
        for (let i = 0; i < database.length; i++) {
        array.id = i;
        }
        // This bit sends the note to the db.json file.
        database.push(req.body);
        res.json(true);
    });

    // DELETE Requests
    app.delete('/api/notes/:id', (req, res) => {

        // Gets the id of the note you want to delete.
        const chosen = req.params.id;

        // gets the id of the object that has the value of chosen
        var removeId = database.map(function(item) { return item.id; }).indexOf(chosen);

        // remove object from db.json
        database.splice(removeId, 1);
        res.json(true);
    });
};