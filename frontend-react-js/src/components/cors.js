const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Your API routes here
app.get('/api/activities/home', (req, res) => {
  // ...
});

// Start the server
app.listen(4567, () => {
  console.log('Server listening on port 4567');
});
