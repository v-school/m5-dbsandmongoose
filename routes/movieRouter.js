const express = require('express')
const movieRouter = express.Router()
const uuid = require('uuid/v4')

const movies = [
  { title: "die hard", genre: "action", _id: uuid() },
  { title: "star wars IV", genre: "fantasy", _id: uuid() },
  { title: "lion king", genre: "fantasy", _id: uuid() },
  { title: "friday the 13th", genre: "horror", _id: uuid() },
]

// Get All
movieRouter.get("/", (req, res, next) => {
  return res.status(200).send(movies)
})


// Post One
movieRouter.post("/", (req, res, next) => {
  const newMovie = req.body
  newMovie._id = uuid()
  movies.push(newMovie)
  return res.status(201).send(newMovie)
})


// Get One
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const foundMovie = movies.find(movie => movie._id === movieId)
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId} was not found.`)
    res.status(500)
    return next(error)
  }
  return res.status(200).send(foundMovie)
})


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre
  if(!genre){
    const error = new Error("You must provide a genre")
    res.status(500)
    return next(error)
  }
  const filteredMovies = movies.filter(movie => movie.genre === genre)
  return res.status(200).send(filteredMovies)
})


// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  return res.send("SUccessfully deleted movie!")
})


// Update One
movieRouter.put("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const updateObject = req.body
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  const updatedMovie = Object.assign(movies[movieIndex], updateObject)
  return res.status(201).send(updatedMovie)
})


module.exports = movieRouter