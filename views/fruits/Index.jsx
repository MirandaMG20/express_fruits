import React from 'react'
const Default = require('../layout/Default')

function Index({ fruits }) { // fruits from Index = fruit: foundFruits
    return (

        <Default title={'Fruits Index Page'}>

            <nav>
                <h1>All your Fruits!</h1>
                <a href={`/`}> Home </a>
                <br />
                <a href="/veggies"> Veggies </a>
                <br />
                <a href="/fruits/new"> Create New Fruit </a>
            </nav>
            <br />

            <ul>
                {
                    fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                <a href={`/fruits/${fruit.id}`}> {fruit.name} </a> is {fruit.color}
                                {fruit.readyToEat ? `, it's ready to eat! ` : `, it's NOT ready to eat.`}
                                {fruit.isItGood ? `I like it! ` : `I don't like it.`}
                                
                                {/* Delete goes Here */}
                                <form method='POST' action={`/fruits/${fruit._id}?_method=DELETE`}>
                                    <input type='submit' value='DELETE' />
                                </form>
                                
                                {/* Edit */}
                                <a href={`/fruits/${fruit._id}/edit`}> Edit </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index