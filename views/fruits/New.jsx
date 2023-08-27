import React from 'react'

function New() {
    return (
        <div>
            <h1>New Fruit Page</h1>
            <a href={`/`}> Home </a>
            <br />
            <a href="/fruits"> Fruits </a>
            <br />
            <a href="/veggies"> Veggies </a>
            <br />
            <br />

            {/* url action where to go, method what to do: post */}
            <form action='/fruits' method='POST'>
                Name: <input type='text' name='name' /> <br />
                Color: <input type='text' name='color' /> <br />
                Ready to Eat: <input type='checkbox' name='readyToEat' /> <br />
                Is it Good? <input type='checkbox' name='isItGood' /> <br />
                
                <input type='submit' value='Create Fruit' /> <br />
            </form>

        </div>
    )
}

module.exports = New