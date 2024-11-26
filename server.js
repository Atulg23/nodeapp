const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Load quotes from the JSON file
const quotesPath = path.join(__dirname, 'quotes.json');
const quotes = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));

// Endpoint to get a random quote
app.get('/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Random Quote API! Use /random-quote to get a random quote.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
