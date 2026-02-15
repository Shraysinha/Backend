// We are importing mongoose
// Mongoose is used to create schemas and models for MongoDB
const mongoose = require("mongoose")

// We are creating a schema for notes
// A schema defines the structure (rules) of the data
const noteSchema = new mongoose.Schema({

  // title field will store text (string)
  title: String,

  // description field will also store text (string)
  description: String,

  // age field will store numbers
  age: Number,
})

// We are creating a model using the schema
// "notes" is the collection name in MongoDB
// noteSchema defines how each note should look
const noteModel = mongoose.model("notes", noteSchema)

// We are exporting the model
// So other files can use it to create, read, update, and delete notes
module.exports = noteModel
