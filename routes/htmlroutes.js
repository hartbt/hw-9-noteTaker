const router = require("express").Router()
const path = require("path")

// join notes and notes.html
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router
