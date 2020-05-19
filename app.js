const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB",  { useNewUrlParser: true , useUnifiedTopology: true });

const fruitschema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const peopleschema = new mongoose.Schema({
  name: String,
  age: Number
})

const People = mongoose.model("People", peopleschema)

const people = new People({
  name: "John",
  age: 18
})

people.save();

const Fruit = mongoose.model("Fruit", fruitschema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Great Fruit"
})

// fruit.save();

Fruit.find(function(error, fruits){
  if(error){
    console.log(error);
  } else {
    console.log(fruits)
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})