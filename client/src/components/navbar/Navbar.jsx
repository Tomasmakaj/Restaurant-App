import React, {useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineRestaurantMenu, MdOutlineLocationSearching} from 'react-icons/md'
import {GiHamburger} from 'react-icons/gi'
import {HiOutlineMenuAlt4, HiShoppingCart} from 'react-icons/hi'
import Login from "../login/Login.jsx"
import './Navbar.css'
import Signup from '../signup/Signup.jsx';
import Cart from '../cart/Cart.jsx'
import Accountinfo from '../account/Accountinfo.jsx';

const Navbar = ({setUser,user,userCart,setUserCart}) => {
    
    const[isShowingSignIn, setIsShowingSignIn] = useState (false)
    const [isShowingSignUp, setIsShowingSignUp] = useState (false);
    const [isShowingAccountInfo, setIsShowingAccountInfo] = useState (false);
    const [activeNav, setActiveNav] = useState ('#')
    const [navOpen, setNavOpen] = useState(false)
    const [form, setForm] = useState ({});
    let showCart=(e)=>{
        setNavOpen((prevState)=>!prevState)
        console.log('click'. navOpen)
    }
  return (
    <>
        <div className='navbar'>
            <div className='container'>
                <h1><span><GiHamburger /> Not </span> Shake Shack</h1>
                    <a href="#/"><AiOutlineHome size={'2em'}/></a>
                    <a href="#menu"><MdOutlineRestaurantMenu size={'2em'}/></a>
                    <a href="#footer"><MdOutlineLocationSearching size={'2em'}/></a>
                    <button onClick={()=>setIsShowingSignIn(true)} className ='btn'>Sign In</button>
                    <button onClick={()=>setIsShowingSignUp(true)} className ='btn'>Sign Up</button>
                    <h1><button onClick={showCart} className ='btn'><HiShoppingCart /></button></h1>
                    {user.username? <button onClick={()=>setIsShowingAccountInfo(true)} className ='btn'>Account Info</button> : null}
                <div className ="hamburger">
                    <HiOutlineMenuAlt4 />
                </div>
            </div>
            {isShowingSignIn&&<Login setUser={setUser} user={user} setIsShowingSignIn={setIsShowingSignIn} />}
            {isShowingSignUp&&<Signup setUser={setUser} user={user} setIsShowingSignUp={setIsShowingSignUp} />}
            {navOpen&&<Cart userCart={userCart} setNavOpen={setNavOpen} setUserCart={setUserCart}/>}
            {isShowingAccountInfo&&<Accountinfo user={user} setUser={setUser} setIsShowingAccountInfo={setIsShowingAccountInfo} />}
        </div>
    </>
  )
}
export default Navbar