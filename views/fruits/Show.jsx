import React from 'react'

function Show({ fruit }) {

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
                fruit.readyToEat ? "It's ready to eat" : "Ew, Yuck!"
            }
        </div>
    )
}

module.exports = Show
