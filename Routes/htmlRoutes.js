// Import Path to get correct directory for html file
const path = require('path');

// Routing

module.exports = (app) => {

    // GET Requests

    // /notes : Returns notes.html
    app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
    });

    // Everything else : Returns index.html
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
    });

}