require("dotenv").config()

const mongoose = require("mongoose")
const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

//My routes
const authRoutes = require("./routes/auth")

const userRoutes = require("./routes/user")

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected")
  })

//Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)

//PORT
const port = process.env.PORT || 8000

//starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`)
})
