const fs = require("fs")
const util = require("util")
const { v4: uuidv4 } = require("uuid")

const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)

class Store {
    read(){
        return readFileAsync("db/db.json", "utf8")
    }
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes 
            try{
                parsedNotes = [].concat(JSON.parse(notes))
            } catch(err){
                parsedNotes = []
            } 
            return parsedNotes
            
        })
    }
    addNote(note){

        const newId = uuidv4()
        const {
            text, title
        } = note
        if(!text||!title){
            throw("Please enter a note")
        }
        const newNote = {
            text, title, id: newId
        } 
        return this.getNotes()
        .then((notes) => [...notes, newNote]
        )
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)
    }
    removeNote(id){
        return this.getNotes()
        .then((remove) => remove.filter((removedNote) => removedNote.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }
}

module.exports = new Store()