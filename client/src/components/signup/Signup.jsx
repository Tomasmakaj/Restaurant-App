
import React, { useState, useEffect } from "react";

import './Signup.css'

function Signup({setIsShowingSignUp,setUser}){
    // get and set locations in dropdown menu
    
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(data => setLocations(data))
    },[])
    // creates new user
    
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        location: ''
});
    
let createUser = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };
    
    function handlePost(e){
        e.preventDefault()
        fetch("http://localhost:3000/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(res=>res.json())
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
        })};
    
        return (
    
    <div onClick={()=>{setIsShowingSignUp(false)}}id='sign-in-modal'>
        <div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
            <h1>Sign-Up</h1>
            <form onSubmit={handlePost} id='Sign-In-Form'>
                <button type='submit' className='btn'>Create Log In</button>
                <input onChange={createUser} name="username" type='text' placeholder='Username' />
                <input onChange={createUser} name="password" type='password' placeholder='Password'/>
                <select className='select' name="location_id" onChange={createUser} type='text'>
                    <option value='' disable selected>Select Your Location!</option>
                    {locations.map(location=><option value={location.id}>{location.address}</option>)}
                </select>
            </form>
        </div>
    </div>
    )
};
export default Signup;