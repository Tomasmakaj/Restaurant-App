import React,{useState, useEffect} from 'react'
import {BsFacebook,BsTwitter,BsApple} from 'react-icons/bs'
import { json } from 'react-router-dom';

function Login ({setIsShowingSignUp,user,setUser}) {
  const [form, setForm] = useState ({});

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data["user"]){
        localStorage.setItem("jwt", data.token);
        setUser({
          username: data.user.username
        });
      }else{
        alert(data["error"])
      }
    });
  }

    let updateForm = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };



    let logOut = ()=>{
      localStorage.clear()
      setUser({username: ""})
    }
    return (
    <div onClick={()=>{setIsShowingSignUp(false)}}id='sign-in-modal'><div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
    {!user.username ? <>
      <h1>Sign-In</h1>
    <form id='Sign-In-Form' onSubmit={handleSubmit}>
      <span><BsFacebook size={40}/></span>
      <span><BsTwitter size={40} /></span>
      <span><BsApple size={40}/></span>
      <button type='submit' className='btn'>Sign In</button>
        <input onChange={updateForm} name="username" type='text' placeholder='Username' />
        <input onChange={updateForm} name="password" type='password' placeholder='Password'/>
    </form>
    </>
: 
<>
<div className='out'>
<h1> Your Logged in already </h1>
{/* <span onClick={logOut}>LOG OUT</span> */}
<h4> We hate to see you go! </h4>

<button className='btn' onClick={logOut}>LOG OUT</button>
</div>
</>


}
      {/* <button className='btn'>Sign Up</button>
      <input onChange={handleChange} name="username" value={logInInfo.username} type='email' placeholder='Email' />
    <input onChange={handleChange} name="password" value={logInInfo.password} type='password'placeholder='Password'/> */}
    </div></div>
  )
}

export default Login