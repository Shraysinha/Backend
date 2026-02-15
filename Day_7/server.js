// This line loads environment variables from the .env file
// It makes values like process.env.MONGO_URI available in the code
require("dotenv").config()

// Importing the Express app from src/app
// This app contains all routes and middleware
const app = require("./src/app")

// Importing the database connection function
// This function is responsible for connecting MongoDB with our server
const connectToDb = require("./src/config/database")

// Importing mongoose (not directly used here, but useful if needed later)
// Mongoose is the library that connects Node.js with MongoDB
const mongoose = require("mongoose")

// Calling the function to connect to the database
// This establishes the connection between our server and MongoDB
connectToDb()

// Starting the server on port 3000
// app.listen() makes the server start listening for requests
app.listen(3000, () => {

  // This message is printed once when the server starts successfully
  console.log("Server Started Successfully")
})
