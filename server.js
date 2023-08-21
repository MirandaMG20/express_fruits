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

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({extended: false}))

//ROUTE Home
app.get('/', (req, res) => {
    res.send('<h1> Express Fruits and Veggies </h1>')
})

// Route Fruits Index
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    res.render('fruits/Index', {
        fruits: fruits,
    })
})

// NEW Fruits Route
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

// Create = Post
app.post('/fruits', (req, res) => {

    console.log('Created Fruit: ', req.body)

    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)

    console.log('The fruits array ', fruits)

    res.redirect('/fruits') // Redirect to the new Array
})

// Show Fruits Middleman
app.get('/fruits/:Index', (req, res) => {
    res.render('fruits/Show', { // second param must be an object
        fruit: fruits[req.params.Index] // there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    })
})


// Route Veggies Index
app.get('/veggies', (req, res) => {
    // res.send(veggies)
    res.render('veggies/Index', {
        veggies: veggies,
    })
})

// NEW Veggies Route
app.get('/veggies/new', (req, res) => {
    res.render('veggies/New')
})

// Create = Post
app.post('/veggies', (req, res) => {

    console.log('Created Veggie: ', req.body)

    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    veggies.push(req.body)

    console.log('The veggies array ', veggies)

    res.redirect('/veggies')
})

// Show Veggies Middleman
app.get('/veggies/:Index', (req, res) => {
    res.render('veggies/Show', {
        veggie: veggies[req.params.Index]
    })
})
