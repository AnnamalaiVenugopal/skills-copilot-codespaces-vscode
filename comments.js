// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Read comments.json file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
    res.json(newComment);
});

// Start web server
app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});

// Run this file with command: node comments.js
// Open browser and access: http://localhost:3000/comments
// Use Postman to add a new comment