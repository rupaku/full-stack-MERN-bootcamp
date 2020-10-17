const express = require("express")
const app = express()

//refer documentation  http://expressjs.com/
const port = 8000

app.get("/", (req, res) => {
  return res.send("Hello there")
})

app.get("/login", (req, res) => {
  return res.send("Hello you are logged in")
})

app.get("/signout", (req, res) => {
  return res.send("Bye bye")
})

app.listen(port, () => {
  console.log("Server is up and running ...")
})
