const action = require("../db/action")
const router = require("express").Router()

// receiving the notes 
router.get("/notes", function(req, res){
    action.getNotes().then((note) => res.json(notes))
    .catch((err) => res.status(500).json(err))
})

// to create new notes
router.post("/notes/api", function(req, res){
    action.addNote(req.body).then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
});

// to delete notes
router.delete("/notes/:id", function(req, res){
    action.deleteNotes(req.params.id).then(() => res.json({ ok : true}))
    .catch((err) => res.status(500).json(err))
})

module.exports = router 