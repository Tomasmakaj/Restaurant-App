import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineRestaurantMenu, MdOutlineLocationSearching} from 'react-icons/md'
import {GiHamburger} from 'react-icons/gi'
import {HiOutlineMenuAlt4, HiShoppingCart} from 'react-icons/hi'
import Login from "../login/Login.jsx"
import './Navbar.css'

const Navbar = ({setUser,user}) => {
    const[isShowingSignIn, setIsShowingSignIn] = useState (false)
    const [activeNav, setActiveNav] = useState ('#')


  
  return (
    <div className='navbar'>
        <div className='container'>
            
            <h1><span><GiHamburger /> Not </span> Shake Shack</h1>
            
                <a href="#/"><AiOutlineHome size={'2em'}/></a>
                <a href="#menu"><MdOutlineRestaurantMenu size={'2em'}/></a>
                <a href="#footer"><MdOutlineLocationSearching size={'2em'}/></a>
                <button className ='btn'>Sign Up</button>
                <button onClick={()=>setIsShowingSignIn(true)} className ='btn'>Sign In</button>
                <h1><button className ='btn'><HiShoppingCart /></button></h1>
                
            
            <div className ="hamburger">
                <HiOutlineMenuAlt4 />
                

            </div>
           

        </div>

        
        {isShowingSignIn&&<Login setUser={setUser} user={user} setIsShowingSignUp={setIsShowingSignIn} />}
    </div>
  )
}

export default Navbar