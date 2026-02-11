// We are importing the Express package so we can use it
const express = require("express")

// We are creating a server using Express
// `app` is now our server
const app = express()

// This is a middleware
// It allows the server to understand JSON data coming from the client
// Without this, req.body will be undefined
app.use(express.json())

// This is an empty array
// We will store all notes inside this array
const notes = []

// This route handles POST requests on "/notes"
// POST is used to SEND data to the server
app.post('/notes', (req, res) => {

  // req.body contains the data sent from Postman or frontend
  // This line prints that data in the terminal
  console.log(req.body)

  // We are saving the received data into the notes array
  notes.push(req.body)

  // We are sending a response back to the client
  res.send("Note created")
})

// This route handles GET requests on "/notes"
// GET is used to RECEIVE data from the server
app.get('/notes', (req, res) => {

  // We are sending all stored notes back to the client
  res.send(notes)
})

// This starts the server on port 3000
// The callback runs only once when the server starts
app.listen(3000, () => {

  // This message is printed in the terminal
  console.log("Server is running on port 3000")
})
