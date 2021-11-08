import React from 'react'

import logo from '../../assets/images/logo.png'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    )
}

export default Header
