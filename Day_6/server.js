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
    "mongodb+srv://shraypriyadarshi_db_user:hNfnqzmh1awW4XWO@cluster0.gjz6ze6.mongodb.net/Day-6"
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
