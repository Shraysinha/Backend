// We are importing the Express package
const express = require("express")

// We are creating an Express server
// `app` will be used to handle requests and responses
const app = express()

// This is an empty array
// We will store all notes in this array
const notes = []

// This middleware allows the server to read JSON data
// Without this, req.body will be undefined
app.use(express.json())

// This route handles POST requests on "/notes"
// POST is used to CREATE new data
app.post("/notes", (req, res) => {

  // This prints the data sent by the client in the terminal
  console.log(req.body)

  // We are adding the received note into the notes array
  notes.push(req.body)

  // We are sending a response with status code 201 (Created)
  // and returning a success message in JSON format
  res.status(201).json({
    message: "Note Created Successfully"
  })
})

// This route handles GET requests on "/notes"
// GET is used to FETCH data
app.get("/notes", (req, res) => {

  // We are sending all notes back to the client
  // Status code 200 means request was successful
  res.status(200).json({
    notes: notes
  })
})

// This route handles DELETE requests on "/notes/:index"
// :index means a dynamic value coming from the URL
app.delete("/notes/:index", (req, res) => {

  // We delete the note at the given index
  // req.params.index comes from the URL
  delete notes[req.params.index]

  // Status code 204 means "No Content"
  // It usually means delete was successful
  res.status(204).json({
    message: "Note Deleted Successfully"
  })
})

// This route handles PATCH requests on "/notes/:index"
// PATCH is used to UPDATE part of existing data
app.patch("/notes/:index", (req, res) => {

  // We update only the description of a specific note
  // req.body.description comes from the client
  notes[req.params.index].description = req.body.description

  // Status code 200 means update was successful
  res.status(200).json({
    message: "Note's Description updated"
  })
})

// We are exporting the app
// This allows other files to use this server
module.exports = app
