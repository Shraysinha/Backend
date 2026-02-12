const express = require("express")
const app = express()

const notes = []
app.use(express.json())


app.get('/',(req,res)=>{
  res.send("Hello Shray!")
})

app.post("/notes" ,(req,res) => {
  console.log(req.body)
  notes.push(req.body)
  console.log(notes)
  res.send("note created")
})
app.get("/notes", (req,res)=>{
  res.send(notes)
})

app.delete("/notes/:index",(req,res) => {
  delete notes[ req.params.index]
  res.send("Note deleted succefully")

})

app.patch("/notes/:index",(req,res) => {
  notes[ req.params.index].description = req.body.description
  notes[ req.params.index].title = req.body.title
  res.send("Note updated Successfully")
})

module.exports = app // here we exported this code 