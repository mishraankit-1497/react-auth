import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/common.css';

const Main = () => {
    return (
        <div>
       
            <nav className="nav-item">
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                <NavLink to="/signup">SignUp</NavLink>
            </li>
                </ul>
            </nav>
            <h1> Landing  Page </h1>
        </div>
    )
}

export default Main
