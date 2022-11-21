import React, {useState} from "react";
import './Cart.css'
import Cartitem from "../cartitem/Cartitem";

const Cart = ({setNavOpen, userCart, setUserCart,user}) =>{
  
  let handleClose=(e)=>{
    setNavOpen((prevState)=>!prevState)
  }

  let subtotal = (arr) => {
    let valueCount = arr.map(el=>el.price)
    let sum = valueCount.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum
  }

  let saveOrder = (e) => {
    if (user.username){
      if (!localStorage.getItem('order')) {
        localStorage.setItem('order', JSON.stringify(userCart))
        } else if (!localStorage.getItem('order1')) {
          localStorage.setItem('order1', JSON.stringify(userCart))
        } else if (!localStorage.getItem('order2')) {
          localStorage.setItem('order2', JSON.stringify(userCart))
        } else {
          alert(`This is too many orders for a simple project app. This isn't actually Shake Shack`)
        }
        alert('Order Placed!')
        setUserCart([])
    } else {
      alert('You must be logged in to order online')
    }
  }
  
return (
  <div id="mySidebar" class="sidebar">
    <div className="checkout-window">
    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
    {userCart.map(singleitem=><Cartitem key={singleitem.id} singleitem={singleitem} userCart={userCart} setUserCart={setUserCart}/>)}
    </div>
    <label> Subtotal  ${subtotal(userCart)}</label>
    <button className="checkout-btn" onClick={saveOrder}>Checkout</button>
  </div>
)
}

export default Cart