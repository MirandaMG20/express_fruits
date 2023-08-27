// Set up .env environment
require('dotenv').config()
// Set up Mongoose connection
const mongoose = require('mongoose')

// Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. 
const methodOverride = require('method-override')

const express = require('express')
const app = express()

const fruits = require('./models/fruits.js')
// Import from models (Schema)
const Fruit = require('./models/fruit.js')
const veggies = require('./models/veggies.js')
// Import from models (Schema)
const Veggie = require('./models/veggie.js')

const port = 3000

// Listener
// app.listen(3000, () => { console.log(`Server is listening.`)})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

// CONNECT to mongoDB
mongoose.connect(process.env.MONGO_EXPRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // remove useCreateIndex: true
})

// Having 2 connections did not work: CONNECT With MONGOOSE Veggies
// mongoose.connect(process.env.MONGO_VEGGIES, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // remove useCreateIndex: true
// })

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})

// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    // console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))
// Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'))

//ROUTE Home
app.get('/', (req, res) => {
    res.send(`
    <h1> Express 
    <a href="/fruits">Fruits</a> and 
    <a href="/veggies"> Veggies </a>
    </h1>
    `)
})

// FRUITS
// Route Fruits Index
app.get('/fruits', async function (req, res) {
    const foundFruits = await Fruit.find({})
    res.render('fruits/Index', {
        fruits: foundFruits // fruits is pass to Index.jsx
    })
    // res.send(fruits)
    // res.render('fruits/Index', {
    //     fruits: fruits,
    // })
})

// NEW Fruits Route
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

// Create = Post
app.post('/fruits', async (req, res) => {
    // console.log('Created Fruit: ', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    
    if (req.body.isItGood === 'on') {
        req.body.isItGood = true;
    } else {
        req.body.isItGood = false;
    }
    // fruits.push(req.body)
    // console.log('The fruits array: ', fruits)
    const createdFruit = await Fruit.create(req.body)  // Create and save
    // console.log(createdFruit)
    res.redirect('/fruits') // Redirect to the new Array
})

// Show Fruits Middleman
app.get('/fruits/:id', async (req, res) => {
    const oneFruit = await Fruit.findById(req.params.id)
    res.render('fruits/Show', {
        fruit: oneFruit // fruit is the key pass to Show.jsx

        // second param must be an object
        // fruit: fruits[req.params.Index] 
        // there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    })
})

// Edit
app.get('/fruits/:id/edit', async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.id)
    res.render('fruits/Edit', {
        fruit: foundFruit
    })
})

// Update
app.put('/fruits/:id', async (req, res) => {
    // verify if checkbox is clicked
    req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false;
    req.body.isItGood === 'on' ? req.body.isItGood = true : req.body.isItGood = false;

    // find the fruit and update by id
    const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
    // console.log(updatedFruit)
    res.redirect(`/fruits/${req.params.id}`)
})

// Delete
app.delete('/fruits/:id', async (req, res) => {
    await Fruit.findByIdAndRemove(req.params.id)
    res.redirect('/fruits')
})





//VEGGIES
// Route Veggies Index
app.get('/veggies', async function (req, res) {
    const foundVeggies = await Veggie.find({})
    // res.send(veggies)
    res.render('veggies/Index', {
        veggies: foundVeggies
    })
})

// NEW Veggies Route
app.get('/veggies/new', (req, res) => {
    res.render('veggies/New')
})

// Create = Post
app.post('/veggies', async (req, res) => {
    // console.log('Created Veggie: ', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // veggies.push(req.body)
    // console.log('The veggies array ', veggies)
    const createdVeggie = await Veggie.create(req.body)
    console.log(createdVeggie)
    res.redirect('/veggies')
})

// Show Veggies Middleman
app.get('/veggies/:id', async (req, res) => {
    const oneVeggie = await Veggie.findById(req.params.id)
    res.render('veggies/Show', {
        veggie: oneVeggie
        // veggie: veggies[req.params.Index]
    })
})
