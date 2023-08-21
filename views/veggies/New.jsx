import React from 'react'

function New() {
    return (
        <div>
            <h1>New Veggie Page</h1>
            <a href={`/`}> Home </a>
            <br />
            <a href="/fruits"> Fruits </a>
            <br />
            <a href="/veggies"> Veggies </a>
            <br />
            <br />

            <form action='/veggies' method='POST'>
                Name: <input type='text' name='name' /> <br />
                Color: <input type='text' name='color' /> <br />
                Ready to Eat: <input type='checkbox' name='readyToEat' /> <br />

                <input type='submit' value='Create Veggie' /> <br />
            </form>

        </div>
    )
}

module.exports = New