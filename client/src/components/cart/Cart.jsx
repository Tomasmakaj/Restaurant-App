import React from "react";
import './Cart.css'
const Cart = ({setNavOpen, userCart}) =>{
  let handleClose=(e)=>{
    setNavOpen((prevState)=>!prevState)
  }
return (
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
)
}
export default Cart