import React from 'react'

import './product.css'
import { FiShoppingCart } from "react-icons/fi";

const Product = (props) => {

    console.log(props.product);

    const { name, category, img, seller, price, stock } = props.product

    return (
        <div className='product'>
            <div className='product__img'>
                <img src={img} alt="" />
            </div>
            <div className='product__name'>
                <h4>
                    {name}
                </h4>
                <br />
                <p>
                    <small>
                        by : {seller}
                    </small>
                </p>
                <p className="price">
                    ${price}
                </p>
                <br />
                <p>
                    <small>
                        Only {stock} left in stock - order soon
                    </small>
                </p>
                <button 
                    className='main__button'
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <span className="icon">
                        <FiShoppingCart />
                    </span>
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default Product
