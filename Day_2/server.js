const express = require("express")
const app = express()

app.get('/',(req,res) => {
  res.send("Hello World")
})

app.get('/about',(req,res) => {
  res.send("This is an About page")
})

app.get('/home',(req,res) => {
  res.send("This is Home page")
})

app.listen(3000)
// we can also write this with a callback
app.listen(3000, ()=>{
  console.log("Server is running on port 3000") // you can see this line in Terminal
})