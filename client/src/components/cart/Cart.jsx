import React, {useState} from "react";
import './Cart.css'
import Cartitem from "../cartitem/Cartitem";

const Cart = ({setNavOpen, userCart, setUserCart}) =>{
  
  let handleClose=(e)=>{
    setNavOpen((prevState)=>!prevState)
  }
  
  let handleCheckout=(e) => {
    console.log(userCart)
    e.preventDefault()
    fetch("http://localhost:3000/save_order",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('jwt')
        },
        body: JSON.stringify(userCart),
    })
    .then(res=>res.json())
    .then((data) => {
        console.log(data);
        if(data["user"]){
            localStorage.setItem("jwt", data.token);
        }else{
            alert(data["error"])
        }
    })
  }
  console.log(userCart)
return (
  <div id="mySidebar" class="sidebar">
    <div className="checkout-window">
    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
    {userCart.map(singleitem=><Cartitem key={singleitem.id} singleitem={singleitem} userCart={userCart} setUserCart={setUserCart}/>)}
    </div>
    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
  </div>
)
}
export default Cart