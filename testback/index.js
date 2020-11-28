const express = require("express")
const app = express()

//refer documentation  http://expressjs.com/
const port = 8000

app.get("/", (req, res) => {
  return res.send("Hello there")
})

const admin = (req, res) => {
  return res.send("this is admin")
}

//Middleware
const isadmin = (req, res, next) => {
  return res.send("this is isadmin")
  next()
}

const isloggedin = (req, res, next) => {
  return res.send("this is isloading")
  next()
}

app.get("/admin", isloggedin, isadmin, admin)

app.get("/login", (req, res) => {
  return res.send("Hello you are logged in")
})

app.get("/signout", (req, res) => {
  return res.send("Bye bye")
})

app.listen(port, () => {
  console.log("Server is up and running ...")
})
