import React, { useState } from 'react';
import './Accountinfo.css'
export default function 

Accountinfo({user,setUser,setIsShowingAccountInfo,locations,setUserCart,userCart}){
    
    const [showChangeForm, setshowChangeForm] = useState(false)
    const [showPastOrders, setShowPastOrders] = useState(false)

    let handleShowChangeForm = (e) => {
        setshowChangeForm((prevState)=>!prevState)
    }
    let handleShowPastOrders = (e) => {
        setShowPastOrders((prevState)=>!prevState)
    }
    // creates new updated-info user
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
        const token = localStorage.getItem('jwt')
        fetch("http://localhost:3000/update",{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                token: token
            },
            body: JSON.stringify(updateUser),
        })
        .then(res=>res.json())
        .then((data) => {
            if(data){
                localStorage.setItem("jwt", token);
                setUser({
                username: data.username,
                location: data.location.id
            })
            alert('Info Change Accepted!')
            handleShowChangeForm(prevState=>!prevState)
            }else{
                alert('Update Error')
            }
        })
    };
    //Delete User function
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
    //shows user prefered location
    let narrowLocation = (el) => {
        let match = user.location
        return el.id === match
    }
    //re-set cart from previous orders
    let reFillCart = (e) => {
        if (localStorage.getItem('order')){
            setUserCart(JSON.parse(localStorage.getItem('order')))
        } else if (localStorage.getItem('order1')) {
            setUserCart(JSON.parse(localStorage.getItem('order1')))
        } else if (localStorage.getItem('order2')) {
            setUserCart(JSON.parse(localStorage.getItem('order2')))
        } else if (localStorage.getItem('order3')) {
            setUserCart(JSON.parse(localStorage.getItem('order3')))
        }
    }
    let clearOrderHistory = (e) => {
        if (localStorage.getItem('order')){
            localStorage.removeItem('order')
        } else if (localStorage.getItem('order1')) {
            localStorage.removeItem('order1')
        } else if (localStorage.getItem('order2')) {
            localStorage.removeItem('order2')
        } else if (localStorage.getItem('order3')) {
            localStorage.removeItem('order3')
        }
    }



    return (
        <div onClick={()=>{setIsShowingAccountInfo(false)}}id='sign-in-modal'>
            <div id='sign-in-container' onClick={(e)=>{e.stopPropagation()}}>
                {!showChangeForm && !showPastOrders ?
                <>
                    <h1>Account Info</h1>
                    <div>Current User: {user.username}</div>
                    <div>Preferred Location: {locations.find(narrowLocation).address}</div>
                    <button type='submit' className='btn' onClick={handleShowChangeForm}>Update Your Info?</button>
                    <button type='submit' className='btn' onClick={handleShowPastOrders}>View Previous Orders</button>
                </>
                : showChangeForm && !showPastOrders ?
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
                : !showChangeForm && showPastOrders ?
                <>
                    <h1>Order History</h1>
                    <button type='submit' className='btn' onClick={handleShowPastOrders}>Go Back</button>
                    {localStorage.getItem('order')?
                        <button type='submit' className='btn' onClick={reFillCart}>Re-Order First Order</button>
                    :
                    null}
                    {localStorage.getItem('order1')?
                        <button type='submit' className='btn' onClick={reFillCart}>Re-Order Second Order</button>
                    :
                    null}
                    {localStorage.getItem('order1')?
                        <button type='submit' className='btn' onClick={reFillCart}>Re-Order Third Order</button>
                    :
                    null}
                    <button type='submit' className='btn' onClick={clearOrderHistory}>Delete History</button>
                </>
                :
                null
                }
            </div>
        </div>
    )
};