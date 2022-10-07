import React,{useState, useEffect} from 'react'
import {BsFacebook,BsTwitter,BsApple} from 'react-icons/bs'
function Login ({setIsShowingSignIn,user,setUser}) {
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
            <h1>Your Logged in already</h1>
            <h3> We Hate to see you go! </h3>
            <button className="delete-btn" onClick={logOut}>Log Out</button>
            </>
            }
      </div>
    </div>
  )
}
export default Login