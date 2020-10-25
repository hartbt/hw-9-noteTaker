const express = require("express")
const path = require("path")
const uuid = require("uuidv1")

// reuires the functino of express itself; intializes express
const app = express()

// when this will be used later, it's providing the port number that anything will be hosted on
const PORT = process.env.PORT || 3001

// requiring the routes
const apiRoute = require("./routes/apiroutes")
const htmlRoute = require("./routes/htmlroutes")

app.get("/", function(req, res){
    res.json(path.join(__dirname, "public/index.html"))
  })

