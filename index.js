require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('build'))
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info/', (request, response) => {
  const date = new Date()
  Person.find().countDocuments().then(count => {
    response.send(`<p>Phonebook has info for ${count} people<p><p>${date}</p><br/><a href="/">Phonebook</a>`)
  })
})

// CREATE ---
app.post('/api/persons/', (request, response, next) => {
  const body = request.body
  if (body && body.name && body.number) {
    const person = new Person({
      name: body.name,
      number: body.number,
      id: genId()
    })
    person.save()
      .then(saved => response.json(saved))
      .catch(error =>  next(error))
  } else response.status(400).json({ error: 'Values missing' })
})

// READ --- -- -
app.get('/api/persons/', (request, response) => {
  Person.find({}).then(people => response.json(people))
})
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) response.json(person)
      else response.status(404).send({ error: 'not found' })
    })
    .catch(error => {
      console.log(error.response.data)
      next(error)
    })
})
// UPDATE --- -- -
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const person = { name: body.name, number: body.number }
  Person.findByIdAndUpdate(request.params.id, person, { new: true, useFindAndModify: false })
    .then(updatedPerson => {
      response.json(updatedPerson)
    }).catch(error => next(error))
})
// DELETE --- -- -
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => response.status(204).end())
    .catch(error => next(error))
})

// -------------------------
const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    let errr
    errr = error.errors.name ? error.errors.name : ''
    errr += error.errors.number ? ' '+error.errors.number : ''
    return response.status(400).send(errr)
  }
  next(error)
}
app.use(errorHandler)


const genId = () => {
  return Math.floor(Math.random() * Math.floor(1000))
}
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
morgan.token('body', (req) => {
  if (req.method === 'POST') return JSON.stringify(req.body)
})
