const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const savedNotes = require('../Develop/db/db.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.json(savedNotes)
);

app.post('/api/notes', (req, res) => {
  console.log(`${req.body}`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
    };

    const response = {
      status: "success",
      body: newNote,
    };
    fs.appendFile('../Develop/db/db.json', `, ${JSON.stringify(newNote)}`, (err) =>
    err ? console.error(err) : console.log('Note Saved!'));
    res.status(201).json(response);
  } else {
    res.status(500).json('Error saving note');
  }
});

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);