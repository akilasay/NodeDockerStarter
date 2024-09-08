// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

const path = require('path');

// Serve static files (HTML, CSS, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the test page
app.get('/test', (req, res) => {
  res.json({message: 'Test Page'});
});

// Start the server on port 3000
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
