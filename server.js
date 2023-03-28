const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const db = require('./db/db.json');
const uuid = require('./helpers/uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.json(db)
);

app.post('/api/notes', (req, res) => {
  console.log(`${JSON.stringify(req.body)}`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    const response = {
      status: "success",
      body: newNote,
    };

    db.push(newNote);
    console.log(db);
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>
    err ? console.error(err) : console.log('Note Saved!'));
    res.status(201).json(response);
  } else {
    res.status(500).json('Error saving note');
  }
});

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.delete('/api/notes/:id', (req, res) => {
 const { id } = req.params;
 const dbIndex = db.findIndex(p => p.id === id);
 const response = {
  status: "success",
  body: dbIndex,
 };

 const updatedList = db.splice(dbIndex, 1);
 
 fs.writeFile('./db/db.json', JSON.stringify(updatedList), (err) =>
 err ? console.error(err) : console.log('Note Deleted!'));
 res.status(201).json(response);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);