import React from 'react'

function Show({ fruit }) { // fruit is from Show in server.js

    // console.log(fruit)

    return (
        <div>
            <a href={`/`}> Home </a>
            <br />
            <a href="/fruits"> Fruits </a>
            <br />
            <a href="/veggies"> Veggies </a>
            <br />
            <br />

            <h1> {fruit.name} is {fruit.color}</h1>
            {
                fruit.readyToEat ? "It's ready to eat." : "Ew, Yuck!"
            }
            <br />
            {
                fruit.isItGood ? "I like it!" : "I don't like it."
            }
        </div>
    )
}

module.exports = Show
