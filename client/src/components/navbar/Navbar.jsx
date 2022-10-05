import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {GiHamburger} from 'react-icons/gi'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import Login from "../login/Login.jsx"
import './Navbar.css'

const Navbar = () => {
    const[isShowingSignUp, setIsShowingSignUp] = useState (false)


  
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><GiHamburger /> Not </span> Shake Shack</h1>
                <a href='#'>Home</a>
                <a href='#'>Menu</a>
                <a href='#'>About</a>
                <button onClick={()=>setIsShowingSignUp(true)} className ='btn'>Sign In</button>
            
            <div className ="hamburger">
                <HiOutlineMenuAlt4 />

            </div>

        </div>

        
        {isShowingSignUp&&<Login setIsShowingSignUp={setIsShowingSignUp} />}
    </div>
  )
}

export default Navbar