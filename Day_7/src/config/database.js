// We are importing mongoose
// Mongoose helps Node.js connect and talk to MongoDB
const mongoose = require("mongoose")

// This function is responsible for connecting to the database
function connectToDb (){

  // mongoose.connect() connects our app to MongoDB
  // process.env.MONGO_URI gets the database URL from environment variables
  // This is safer than writing the URL directly in code
  mongoose.connect(process.env.MONGO_URI)

  // If the database connection is successful
  // then this .then() block will run
  .then(() => {

    // This message will be printed in the terminal
    console.log("Database Connected Successfully")
  })
}

// We are exporting this function
// So other files can import and use it
module.exports = connectToDb
