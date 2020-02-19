const express = require("express")
const app = express()
const morgan = require('morgan')

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require('./routes/tvshowRouter.js'))

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})