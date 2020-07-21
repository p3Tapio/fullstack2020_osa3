const mongoose = require('mongoose')
require('dotenv').config()

if (process.argv.length < 3) {
  console.log('Give password as arg')
  process.exit(1)
}

const password = process.argv[2]
const username = process.env.MONGO_USER

const url = `mongodb+srv://${username}:${password}@cluster0.c1fip.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false  })
const phonebookSchema = new mongoose.Schema({ name: String, number: String })
const Person = mongoose.model('Person', phonebookSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name+' '+person.number)
    })
    mongoose.connection.close()
  })

} else if (process.argv.length === 5) {
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({ name, number })

  person.save().then(() => {
    console.log(`added ${name} ${number} to phonebook`)
    mongoose.connection.close()
  })

} else {
  console.log('Incorrect no. of args.')
  mongoose.connection.close()
  process.exit(1)
}