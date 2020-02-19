const express = require('express')
const tvshowRouter = express.Router()
const uuid = require("uuid/v4")

const tvShows = [
  { title: "Rick and Morty", genre: "sci-fi", _id: uuid() },
  { title: "Watchmen", genre: "action", _id: uuid() },
  { title: "Westworld", genre: "fantasy", _id: uuid() },
  { title: "Friends", genre: "comedy", _id: uuid() }
]

tvshowRouter.get("/", (req, res) => {
  res.send(tvShows)
})

tvshowRouter.get("/:tvshowId", (req, res) => {
  const tvShowId = req.params.tvshowId
  const foundShow = tvShows.find(show => show._id === tvShowId)
  res.send(foundShow)
})

tvshowRouter.post("/", (req, res) => {
  const newShow = req.body
  newShow._id = uuid()
  tvShows.push(newShow)
  res.send(`Successfully added ${newShow.title} to the database!`)
})


module.exports = tvshowRouter