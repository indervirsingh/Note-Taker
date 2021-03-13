// Import Express
const express = require('express');

// Tells Node that we are creating an "express" server
const app = express();

// Set up an initial port
const PORT = process.env.PORT || 8080;


// Enables Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));


// Routes
require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);


// Start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });