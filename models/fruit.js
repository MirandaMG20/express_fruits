const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: Boolean,
    isItGood: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit


// const studentSchema = new mongoose.Schema({
//     Name: {
//         type: String,
//         require: true
//     },
//     grades: {
//         type: Array,
//         require: true
//     },
//     email: {
//         type: 
//     }
// })