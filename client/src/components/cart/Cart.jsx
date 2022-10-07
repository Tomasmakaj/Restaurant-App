import React, {useState} from "react";
import './Cart.css'
import Cartitem from "../cartitem/Cartitem";

const Cart = ({setNavOpen, userCart, setUserCart}) =>{
  
  let handleClose=(e)=>{
    setNavOpen((prevState)=>!prevState)
  }

  // let handleCheckout=(e) => {

  // }

  console.log(userCart)
return (
  <div id="mySidebar" class="sidebar">
    <div className="checkout-window">
    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
    {userCart.map(singleitem=><Cartitem key={singleitem.id} singleitem={singleitem} userCart={userCart} setUserCart={setUserCart}/>)}
    </div>


    <button className="checkout-btn">Checkout</button>
    
  </div>
)
}
export default Cart