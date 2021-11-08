import React, { useState } from 'react'

import './shop.css'

import fakeData from '../../assets/fakeData/index'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'

function Shop() {

    const firstTen = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstTen)
    const [cart , setCart] = useState([]) ;


    const handleAddProduct = (product) => {
        console.log(product);
        const newCart = [...cart , product]
        setCart(newCart)
    }

    return (
        <div className='shop__container'>
            <div className="product__container">

                {
                    products.map(product => (
                        <Product 
                            key={product.key} 
                            product={product}
                            handleAddProduct={handleAddProduct}
                        />
                    ))
                }

            </div>
            <div className="cart__container">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop
