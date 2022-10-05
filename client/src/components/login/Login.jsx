import React,{useState} from 'react'
import {BsFacebook,BsTwitter,BsApple} from 'react-icons/bs'

const Login=({setIsShowingSignUp})=> {
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
    <div onClick={()=>{setIsShowingSignUp(false)}}id='sign-in-modal'><div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
    <h1>Sign-In</h1>
    <form id='Sign-In-Form' onSubmit={handleSubmit}>
    <span><BsFacebook size={40}/></span>
    <span><BsTwitter size={40} /></span>
    <span><BsApple size={40}/></span>
    <button className='btn'>Sign In</button>
      <input onChange={handleChange} name="email" value={logInInfo.email} type='email' placeholder='Email' />
      <input onChange={handleChange} name="password" value={logInInfo.password}type='password'placeholder='Password'/>
      <button className='btn'>Sign Up</button>
      <input onChange={handleChange} name="email" value={logInInfo.email} type='email' placeholder='Email' />
      <input onChange={handleChange} name="password" value={logInInfo.password}type='password'placeholder='Password'/>
    </form>
    </div></div>
  )
}

export default Login