const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const savedNotes = require('../Develop/db/db.json')

app.use(express.static('public'));

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.json(savedNotes)
);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);