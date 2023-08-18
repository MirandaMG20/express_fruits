const express = require('express')
const app = express()
const port = 3000
const fruits = require('./models/fruits.js')
const veggies = require('./models/veggies.js')

// Listener
// app.listen(3000, () => { console.log(`Server is listening.`)})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//ROUTE
// Fruits index
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    res.render('fruits/Index', {
        fruits: fruits,
    })
})

// Show Fruits Middleman
app.get('/fruits/:Index', (req, res) => {
    res.render('fruits/Show', { // second param must be an object
        fruit: fruits[req.params.index] // there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    })
})

//ROUTE
// Veggies Index
app.get('/veggies', (req, res) => {
    // res.send(veggies)
    res.render('veggies/Index', {
        veggies: veggies,
    })
})

// Show Veggies Middleman
app.get('/veggies/:Index', (req, res) => {
    res.render('veggies/Show', {
        veggie: veggies[req.params.Index]
    })
})
