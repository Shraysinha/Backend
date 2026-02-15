const app = require("./src/app")


const mongoose = require("mongoose")

function connectToDb(){
  //we can copy this URL from MongoDb compass > In your database cohort > click on 3 dot and then copy the connection string 
  mongoose.connect("mongodb+srv://shraypriyadarshi_db_user:hNfnqzmh1awW4XWO@cluster0.gjz6ze6.mongodb.net/Day-6")//this URI was connecting our mongoDb with the cluster , but we have to connect with database so at end of this URL after "/" write any file name , ex: Day-6 , if mongoDb find that there is no file created with this name then it create a new Database with this name.
  .then (()=>{
    console.log("Conected to Database")
  }) 
}
connectToDb()

app.listen(3000,()=>{
  console.log("Server started")
})