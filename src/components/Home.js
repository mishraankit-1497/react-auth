import React from 'react'
import { Modal } from './Modal/Modal';
import {NavLink} from 'react-router-dom';
const Home = () => {
  const homeContent =[
    {id:'1',title:'Home Page Modal',content:'Hello there!! This is the content of Home page modal'}
  ];

  return (
    <div>
    <nav>
                <ul>
                <li>
                <NavLink to="/">Main</NavLink>
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
      <Modal home={homeContent}/>
    </div>
  )
}

export default Home;
