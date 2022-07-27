//  Require
const mongoose = require('mongoose')

//  connect to server
mongoose.connect('mongodb://localhost:27017/fruitsDB')

//  create Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
})
//  Create Model
const Fruit = mongoose.model('Fruit', fruitSchema)
//  insert Data
const fruit = new Fruit({
  name: 'Apple',
  rating: 6,
  review: 'Bit good fruit!',
})
//  create Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

//  Create Model
const Person = mongoose.model('Person', personSchema)

// insert data

const person = new Person({
  name: 'Imran',
  age: 35,
})

// person.save()

const kiwi = new Fruit({
  name: 'Kiwi',
  rating: 10,
  review: 'Really good fruit!',
})
const oringe = new Fruit({
  name: 'Oringe',
  rating: 9,
  review: 'Thats good fruit!',
})
const banana = new Fruit({
  name: 'Banana',
  rating: 6,
  review: 'Ok. good fruit!',
})

// Fruit.insertMany([kiwi, oringe, banana], function (error) {
//   if (error) {
//     console.log('erroe')
//   } else {
//     console.log('add successly to fruitsDB')
//   }
// })

Fruit.find(function (error, fruits) {
  //   if (error) {
  //     console.log('error')
  //   } else {
  //     console.log(fruits)
  //   }
  fruits.forEach(function (fruit) {
    console.log(fruit.name)
  })
})
