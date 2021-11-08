import React from 'react'

import './cart.css' 

function Cart(props) {

    const cart = props.cart

    const totalPrice = cart.reduce(
        (total,product) => total + product.price
    ,0)

    let shiping = 0 ;
    if(totalPrice > 35){
        shiping = 0 
    }
    else if(totalPrice > 15){
        shiping = 4.99
    }
    else if(shiping > 0 ){
        shiping = 12.99 
    }

    const tax = totalPrice / 10 ;


    return (
        <div>
            <h4>Order summery</h4>
            <p>items ordered : {cart.length}</p>   
            <p>Product Price : {totalPrice}</p>
            <p><small>
                Shiping Cost : {shiping}
            </small></p>
            <p><small>
                Tax + Vat : {tax.toFixed(2)}
            </small></p>
            <p>Total Price : {(totalPrice + shiping + tax).toFixed(2)}  </p>     
        </div>
    )
}

export default Cart
