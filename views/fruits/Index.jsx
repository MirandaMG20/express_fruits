import React from 'react'

function Index({ fruits }) {
    return (

        <div>

            <nav>
                <h1>All your Fruits!</h1>
                <a href={`/`}> Home </a> 
                <br />
                <a href="/veggies"> Veggies </a>
                <br />
                <a href="/fruits/new"> Create New Fruit </a>
            </nav>
            <br />

            {
                fruits.map((fruit, i) => {
                    return (
                        <li key={i}>
                            <a href={`/fruits/${i}`}> {fruit.name} </a> is {fruit.color}
                            {/* <br /> */}
                            {fruit.readyToEat ? ' It is ready to eat ' : ' It is not ready to eat '}
                        </li>
                    )
                })
            }
        </div>
    )
}

module.exports = Index