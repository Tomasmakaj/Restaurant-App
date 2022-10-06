import React, {useState} from "react";
import './Cart.css'
import Cartitem from "../cartitem/Cartitem";

const Cart = ({setNavOpen, userCart, setUserCart}) =>{
  
  let handleClose=(e)=>{
    setNavOpen((prevState)=>!prevState)
  }

  // let handleDelete=(e)=>{
    
  // }

  console.log(userCart)
return (
  <div id="mySidebar, .button" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
    {userCart.map(singleitem=><Cartitem key={singleitem.id} singleitem={singleitem} userCart={userCart} setUserCart={setUserCart}/>)}

    <button>Checkout</button>
    
  </div>
)
}
export default Cart