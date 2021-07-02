//Require statements
const util = require('util');
const fs = require('fs');
const uuid = require('uuidv1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('data/notes.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('data/notes.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))

            } catch (error) {
                parsedNotes = []
            };
            return parsedNotes;
        });
    }
    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Title and text cannot be blank.')
        }
        const newNote = { title, text, id: uuid() }
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote)
    }
    removeNote(id) {
        // Get all notes, remove the note with the given id, write the filtered notes
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
};

module.exports = new Store();
