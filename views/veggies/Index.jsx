import React from 'react'

function Index({ veggies }) {
    return (
        <div>
            <nav>
                <h1>All your Veggies!</h1>
                <a href={`/`}> Home </a> 
                <br />
                <a href="/fruits">Fruits</a>
                <br />
                <a href="/veggies/new"> Create New Veggie </a>
            </nav>
            <br />
            {
                veggies.map((veggie, I) => {
                    return (
                        <li key={I}>
                            <a href={`/veggies/${I}`}> {veggie.name} </a> is {veggie.color}
                            <br />
                            {veggie.readyToEat ? ' It is ready to eat. ' : ' It is not ready to eat. '}
                        </li>
                    )
                })
            }
        </div>
    )
}

module.exports = Index