import React from 'react'

function Cart(props) {


    const cart = props.cart 
    const totalPopulation = cart.reduce((total , country) => {
        return total + country.population 
    },0)

    return (
        <div>
            <h2>this is cart</h2>
            <h4>total country in cart {cart.length}</h4>
            <h5>total population : {totalPopulation}</h5>
        </div>
    )
}

export default Cart
