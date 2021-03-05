import React from 'react'
import {NavLink} from 'react-router-dom'
const SignUp = () => {
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
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        </ul>
    </nav>
        <h2>Sign Up Form</h2>


        <form>
         
        
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            <label for="psw"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm Password" name="psw" required></input>
                 
            <button type="submit">Register</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"></input>Remember Me
            </label>
          </div>
        
          <div class="container">
            <button type="button" class="cancelbtn">Cancel</button>
          </div>
        </form>
        </div>
    )
}

export default SignUp
