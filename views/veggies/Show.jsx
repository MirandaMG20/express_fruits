import React from 'react'

function Show({ veggie }) {

    // console.log(veggie)

    return (
        <div>
            <a href={`/`}> Home </a>
            <br />
            <a href="/fruits"> Fruits </a>
            <br />
            <a href="/veggies"> Veggies </a>
            <br />
            <br />
            
            <h1> {veggie.name} is {veggie.color}</h1>
            {
                veggie.readyToEat ? "It's ready to eat." : "Ew, Yuck!"
            }
        </div>
    )
}

module.exports = Show