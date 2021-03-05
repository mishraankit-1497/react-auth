import React from 'react'
import ModalAbout from './Modal/ModalAbout';
import {NavLink} from 'react-router-dom';
const About = () => {
    const aboutContent=[
        {id:'1',title:'About Us',content:'Bagaluru Cross, Dwarka Nagar , Bangalore -560063'}
    ];
    return (
        <div>
        <nav>
        <ul>
        <li>
        <NavLink to="/">Main</NavLink>
    </li>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
        <NavLink to="/signup">SignUp</NavLink>
    </li>
        </ul>
    </nav>
            <ModalAbout about={aboutContent}/>
        </div>
    )
}

export default About;
