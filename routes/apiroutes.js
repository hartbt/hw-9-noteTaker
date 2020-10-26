const action = require("../db/action")
const router = require("express").Router()

// receiving the notes 
router.get("/notes", function(req, res){
    action.getNotes().then((note) => res.json(notes))
})

// to create new notes
router.post("/api/notes", function(req, res){
    action.addNote(req.body).then((note) => res.json(note))
});

// to delete notes
router.delete("/notes/:id", function(req, res){
    action.deleteNotes(req.params.id).then(() => res.json({ ok : true}))
})

module.exports = router 