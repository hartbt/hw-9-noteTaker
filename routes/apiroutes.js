const action = require("../db/action")
const router = require("express").Router()

// receiving the notes 
router.get("/notes", function(req, res){
    action.getNotes().then((note) => res.json(notes))
})

// to create new notes
router.post("notes", function(req, res){
    action.addNote(req.body).then((note) => super.json(note))
});