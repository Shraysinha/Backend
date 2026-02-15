// We are importing the app (Express server) from the src/app file
const app = require("./src/app")

// We are importing mongoose
// Mongoose helps us connect Node.js with MongoDB
const mongoose = require("mongoose")

// This function is used to connect our server to the database
function connectToDb(){

  // mongoose.connect() is used to connect MongoDB with our project
  // This URL is called a connection string
  // We usually copy it from MongoDB Compass or MongoDB Atlas
  mongoose.connect(
<<<<<<< HEAD
    "/Day-6" // Here write the URL
=======
    "/Day-6"
>>>>>>> 5344409664c7e1ac1ab939fc06d033fd8334da0d
  )

  // If the database connection is successful
  // then this .then() block will run
  .then(() => {

    // This message will be shown in the terminal
    console.log("Connected to Database")
  })
}

// We are calling the function so that database connection actually happens
connectToDb()

// This starts the server on port 3000
// The callback runs once when the server starts
app.listen(3000, () => {

  // This message will appear in the terminal
  console.log("Server started")
})
