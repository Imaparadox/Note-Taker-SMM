const util = require('util');
const fs = require('fs');
const uuid = require('uuidv1');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile('data/notes.json', 'utf-8')
    }
    write(note) {
        return writeFile('data/notes.json', JSON.stringify(note));
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
            .then((notes) => { [...notes, newNote] })
            .then((updatedNotes) => {this.write(updatedNotes)})
            .then(() => newNote)
    }
}

module.exports = new Store()