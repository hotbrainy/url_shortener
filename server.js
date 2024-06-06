const express = require('express');
const bodyParser = require('body-parser');
const generateUniqueId = require('generate-unique-id');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static('public'))
// In-memory storage for URLs
const urlDatabase = {};

// Endpoint to create a short URL
app.post('/shorten', (req, res) => {
  const originalUrl = req.body.url;
  if (!originalUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortId = generateUniqueId({
  length: 8
});
  urlDatabase[shortId] = originalUrl;

  res.json({ shortUrl: `http://localhost:${port}/${shortId}` });
});

// Endpoint to redirect to the original URL
app.get('/:shortId', (req, res) => {
  const shortId = req.params.shortId;
  const originalUrl = urlDatabase[shortId];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
