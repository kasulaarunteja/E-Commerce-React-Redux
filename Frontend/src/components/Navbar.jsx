

import React from "react";
import {Link} from "react-router-dom"


export const Navbar = ()=> {
    return (
        <div>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navlink" to="/" >Home</Link>
                <Link className="navlink" to="/cart">Cart</Link>

                <span className="cartCount">cart items: 0</span>
            </div>
        </div>
    )
}