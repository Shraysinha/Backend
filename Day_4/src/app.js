// We are importing the Express package so we can use it
const express = require("express")

// We are creating the server using Express
// `app` is our server
const app = express()

// This is an empty array
// It will store all notes in memory
const notes = []

// This is a middleware
// It allows the server to read JSON data sent from client (Postman / frontend)
app.use(express.json())

// This route handles GET requests on "/"
// When someone opens the home route, the server sends this message
app.get('/', (req, res) => {

  // Sending a simple text response to the client
  res.send("Hello Shray!")
})

// This route handles POST requests on "/notes"
// Used to CREATE a new note
app.post("/notes", (req, res) => {

  // req.body contains the data sent by the client
  // This line prints the received data in the terminal
  console.log(req.body)

  // We are saving the note into the notes array
  notes.push(req.body)

  // This prints all notes in the terminal (for checking/debugging)
  console.log(notes)

  // Sending confirmation message back to client
  res.send("note created")
})

// This route handles GET requests on "/notes"
// Used to GET all notes
app.get("/notes", (req, res) => {

  // Sending all notes back to the client
  res.send(notes)
})

// This route handles DELETE requests on "/notes/:index"
// Used to DELETE a specific note using its index number
app.delete("/notes/:index", (req, res) => {

  // req.params.index gets the index value from the URL
  // This deletes the note at that index
  delete notes[req.params.index]

  // Sending confirmation message
  res.send("Note deleted successfully")
})

// This route handles PATCH requests on "/notes/:index"
// Used to UPDATE part of an existing note
app.patch("/notes/:index", (req, res) => {

  // We update only the required fields of the note
  // title and description come from req.body
  notes[req.params.index].description = req.body.description
  notes[req.params.index].title = req.body.title

  // Sending confirmation message
  res.send("Note updated Successfully")
})

// We are exporting the app (server)
// This allows us to use this server in another file
module.exports = app
