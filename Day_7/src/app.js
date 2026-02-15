// Importing the Express framework
// Express helps us create routes and handle requests easily
const express = require("express")

// Importing the Note model
// This model is connected to the MongoDB "notes" collection
// We use it to create and fetch notes from the database
const noteModel = require("./models/notes.model")

// Creating an Express application (server)
const app = express()

// This middleware allows the server to read JSON data
// Without this, req.body would be undefined
app.use(express.json())

// -------------------- CREATE NOTE --------------------
// This route handles POST requests on "/notes"
// POST is used to send data from client to server
app.post("/notes", async (req, res) => {

  // Extracting title, description, and age from request body
  // This data comes from Postman or frontend
  const { title, description, age } = req.body

  // Creating a new note in the database
  // noteModel.create() saves the data into MongoDB
  // await is used because database operations take time
  const note = await noteModel.create({
    title,
    description,
    age
  })

  // Sending a success response back to the client
  // Status 201 means "Created successfully"
  // We also send the newly created note as response
  res.status(201).json({
    message: "Note Created Successfully",
    note
  })
})

// -------------------- GET ALL NOTES --------------------
// This route handles GET requests on "/notes"
// GET is used to fetch data from the server
app.get("/notes", async (req, res) => {

  // Fetching all notes from the database
  // noteModel.find() returns an array of notes
  const notes = await noteModel.find()

  // Sending fetched notes back to the client
  // Status 200 means request was successful
  res.status(200).json({
    message: "Notes fetched Successfully",
    notes
  })
})

// Exporting the app
// This allows another file (like server.js) to start the server
module.exports = app
