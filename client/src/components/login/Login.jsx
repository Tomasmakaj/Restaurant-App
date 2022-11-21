import React,{ useState } from 'react'
import {BsFacebook,BsTwitter,BsApple} from 'react-icons/bs'
import './Login.css'

function Login ({setIsShowingSignIn,user,setUser}) {

  //Handle Log-In Form
  const [form, setForm] = useState ({});
  let updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //Clears User in storage to create log out function
  let logOut = ()=>{
    localStorage.clear()
    setUser({username: ""})
    setIsShowingSignIn(prevstate=>!prevstate)
  };
  //Handles Log In Fetch, while setting user locally
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data["user"]){
        localStorage.setItem("jwt", data.token);
        setUser({
          username: data.user.username,
          location: data.user.location_id
        });
      }else{
        alert(data["error"])
      }
      setIsShowingSignIn(prevstate=>!prevstate)
    });
  }

    return (
    <div onClick={()=>{setIsShowingSignIn(false)}}id='sign-in-modal'>
      <div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
        {!user.username ?
          <>
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
            <h1>You would like to log out?</h1>
            <h3> We Hate to see you go! </h3>
            <button id='delete-btn' onClick={logOut}>Log Out</button>
          </>
        }
      </div>
    </div>
  )
};

export default Login