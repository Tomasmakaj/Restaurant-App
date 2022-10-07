import React, { useState, useEffect } from 'react';
import './Accountinfo.css'
export default function 


Accountinfo({user,setUser,setIsShowingAccountInfo,form,setForm,handleSubmit,updateForm}){
    
    const [showChangeForm, setshowChangeForm] = useState(false)
    let handleShowChangeForm = (e) => {
        setshowChangeForm((prevState)=>!prevState)
    }
    // get and set locations in dropdown menu
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])
    // creates new updated info
    const [updateUser, setUpdateUser] = useState({
        username: '',
        password: '',
    });
    let updateInfo = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value,
        });
    };
    // update user
    function handlePacth(e){
        console.log('click')
        e.preventDefault()
        fetch("http://localhost:3000/update",{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('jwt')
            },
            body: JSON.stringify(updateUser),
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
                alert(data["Update Accepted! :)"])
            }
        })
    };

    function handleDelete(e){
        e.preventDefault()
        fetch("http://localhost:3000/destroy",{
            method: 'DELETE',
            headers: {
                token: localStorage.getItem('jwt'),
                'Content-Type': 'application/json',
            },
        })
        .then(localStorage.clear(), setUser({username: ""}))
    };
    console.log(updateUser, user)
    return (
        <div onClick={()=>{setIsShowingAccountInfo(false)}}id='sign-in-modal'>
            <div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
                {!showChangeForm ?
                <>
                    <h1>Account Info</h1>
                    <div>Current User: {user.username}</div>
                    <button type='submit' className='btn' onClick={handleShowChangeForm}>Update Your Info?</button>
                </>
                :
                <>
                    <h1>Change Your Account Info</h1>
                    <form id='Sign-In-Form' onSubmit={handlePacth}>
                        <input onChange={updateInfo} name="username" type='text' placeholder='Username' />
                        <input onChange={updateInfo} name="password" type='password' placeholder='Password'/>
                        <select className='select' name="location_id" onChange={updateInfo} type='text'>
                            <option value='' disable selected>Select Your Prefered Location!</option>
                            {locations.map(location=><option value={location.id}>{location.address}</option>)}
                        </select>
                        <button type='submit' className='btn' onClick={handleShowChangeForm}>Go Back</button>
                        <button type='submit' className='btn'>Submit Info Change</button>
                    </form>
                    <button className='delete-btn' type='submit' onClick={handleDelete}>Delete Account</button>
                </>
                }
            </div>
        </div>
    )
};







