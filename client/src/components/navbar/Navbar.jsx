import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {GiHamburger} from 'react-icons/gi'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFacebook,BsTwitter,BsApple} from 'react-icons/bs'
// import {useNavigate} from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
    const[isShowingSignUp, setIsShowingSignUp] = useState (false)
    const[logInInfo, setLogInInfo] = useState ({email:"", password:"" })


    function handleChange(e){
        let{name, value} = e.target
        setLogInInfo({...logInInfo, [name]:value})
      }
  
      function handleSubmit(e){
        e.preventDefault()
        setIsShowingSignUp(false)
  
        fetch("http://localhost:8080/login" , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logInInfo)
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)})
        }
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

        
        {isShowingSignUp&&
      <div onClick={()=>{setIsShowingSignUp(false)}}id='sign-in-modal'><div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
      <h1>Sign-In</h1>
      <form id='Sign-In-Form' onSubmit={handleSubmit}>
      <span><BsFacebook size={40}/></span>
      <span><BsTwitter size={40} /></span>
      <span><BsApple size={40}/></span>
        <input onChange={handleChange} name="email" value={logInInfo.email} type='email' placeholder='Email' />
        <input onChange={handleChange} name="password" value={logInInfo.password}type='password'placeholder='Password'/>
        <button className='btn'>Sign In</button>
      </form>
      </div></div>}
    </div>
  )
}

export default Navbar