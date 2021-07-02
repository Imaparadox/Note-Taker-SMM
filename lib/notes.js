// const fs = require('fs');
// const path = require('path');

// function findById(id, notesArray) {
//     const result = notesArray.filter(notes => notes.id === id)[0];
//     return result;
// };

// function createNewNote(body, notesArray) {
//     const writtenNote = body;
//     notesArray.push(writtenNote);
//     fs.writeFileSync(
//       path.join(__dirname, '../data/notes.json'),
//       JSON.stringify({ notesArray }, null, 2)
//     );
//     return writtenNote;
// };

// module.exports = { createNewNote, }

// class Store {
//     read() {
//         return readFileAsync('data/notes.json', 'utf8');
//     }
//     write(note) {
//         return writeFileAsync('data/notes.json', JSON.stringify(note));
//     }
//     getNotes() {
//         return this.read().then((notes) => {
//             let parsedNotes;
//             // If notes isn't an array or can't be turned into one, send back a new empty array
//             try {
//                 parsedNotes = [].concat(JSON.parse(notes));
//             } catch (err) {
//                 parsedNotes = [];
//             }
//             return parsedNotes;
//         });
//     }
//     addNote(note) {
//         const { title, text } = note;
//         if (!title || !text) {
//             throw new Error("Note 'title' and 'text' cannot be blank");
//         }
//         // Add a unique id to the note using uuid package
//         const newNote = { title, text, id: uuid() };
//         // Get all notes, add the new note, write all the updated notes, return the newNote
//         return this.getNotes()
//             .then((notes) => [...notes, newNote])
//             .then((updatedNotes) => this.write(updatedNotes))
//             .then(() => newNote);
//     }
//     removeNote(id) {
//         // Get all notes, remove the note with the given id, write the filtered notes
//         return this.getNotes()
//             .then((notes) => notes.filter((note) => note.id !== id))
//             .then((filteredNotes) => this.write(filteredNotes));
//     }
// }