# 11 Express.js Challenge: Note Taker

## Description

-This project is a simple note taking application that allows Users to write, save, and delete notes. As the front-end is already completed, this task focused on creating the routes and methods for the expected functionality.

-A GET route was set-up to load the index.html file as the landing page. GET '*' will redirect any unknown paths to this landing page as well.

-The GET '/notes' route was set-up to load the notes.html file when the User clicks the "Get Started" button. The GET'api/notes' route will load any previously saved notes from the db.json file and render them to the left column of the notes page.

-After entering a note, the User can click the save icon, which utilizes the POST 'api/notes' route to add the new note title and text to the db.json file using the fs module. A unique id is generated and added to the text object using the UUID npm package. 

-The DELETE '/api/notes/:id' route was set-up to allow a User to delete saved notes. By clicking the delete icon, the corresponding id is located in the db.json file and deleted, with a new list returned and rendered to the page. 

-Users can click on saved note titles to display the saved note in the column to the right.

-Users can click to the "+" icon to display empty fields to add new notes.

## Usage

Heroku Link

### Screenshots

![Screenshot of Note Taker Homepage](/public/assets/ExpressjsChallengeHP.png)

![Screenshot of Note Taker Notes Page](/public/assets/ExpressjsChallengeNotes.png)

![Screenshot of Note Taker Saved Notes](/public/assets/ExpressjsChallengeTestNote.png)

![Screenshot of Note Taker Deleted Notes](/public/assets/ExpressjsChallengeTestDelete.png)

### Credits

[MDN Web Docs](https://developer.mozilla.org/en-US/)

[UUID Documentation](https://www.npmjs.com/package/uuid)