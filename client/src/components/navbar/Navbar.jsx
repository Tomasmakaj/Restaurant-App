import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {GiHamburger} from 'react-icons/gi'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import Login from "../login/Login.jsx"
import './Navbar.css'

const Navbar = ({setUser,user}) => {
    const[isShowingSignIn, setIsShowingSignIn] = useState (false)


  
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><GiHamburger /> Not </span> Shake Shack</h1>
                <a href='#'>Home</a>
                <a href='#'>Menu</a>
                <a href='#'>About</a>
                <button onClick={()=>setIsShowingSignIn(true)} className ='btn'>Sign In</button>
                <button className ='btn'>Sign Up</button>
            
            <div className ="hamburger">
                <HiOutlineMenuAlt4 />

            </div>

        </div>

        
        {isShowingSignIn&&<Login setUser={setUser} user={user} setIsShowingSignUp={setIsShowingSignIn} />}
    </div>
  )
}

export default Navbar