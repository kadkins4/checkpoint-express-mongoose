const express = require('express')
const app = express()
const port = 4000
const Author = require('Author')

app.get('/authors', (req, res) => {
  Author.find({})
  .then(authors => res.json(authors))
})

app.post('/authors', (req, res) => {
  res.status(200)
})

app.get('/authors/:author_id', (req, res) => {
  res.status(200)
})

app.put('/authors/:author_id', (req, res) => {
  res.status(200)
})

app.delete('/authors/:author_id', (req, res) => {
  res.status(200)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app
