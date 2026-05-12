const express = require("express")
const app = express()
const userModel = require("./models/user.model")
const noteModel = require("../../../Day_9/Backend/src/models/note.model")

app.use(express.json())


app.post("/auth", async (req,res)=>{
  const {name , email , password} = req.body
  const user =await userModel.create({
    name , email , password
  })

  res.status(200).json({
    message : "User created"
  })
})

app.get("/auth",async(req,res)=>{
  const user = await userModel.find()

  res.status(201).json({
    message: "Usersfatched succesfully",
    user
  })
})

app.delete("/auth/:id", async(req,res)=>{
  const id = req.params.id
  const user = await userModel.findByIdAndDelete(id)
  res.status(200).json({
    message : "User deleted succesfully"
  })
})

app.patch("/auth/:id", async(req,res)=>{
  const id = req.params.id
  const {name , email, password} = req.body

  await userModel.findByIdAndUpdate(id ,{name, email , password})

  res.status(200).json({
    message : "User Details updated"
  })
})


module.exports = app