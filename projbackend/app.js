require("dotenv").config()

const mongoose = require("mongoose")
const express = require("express")

const app = express()
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected")
  })
  .catch(console.log("OOPS..."))

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`App is running at ${port}`)
})
