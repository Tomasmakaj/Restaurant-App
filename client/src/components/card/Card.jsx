import React, { useState, useEffect } from 'react'
import './Card.css'
const Card = ({menuitem, setOrder, order, user}) => {
  
  const [checkUser, setCheckUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>setCheckUser(data))
}, []);
  let handleClick=(e)=>{
    console.log(pullUser(checkUser, user))
  }

  let pullUser = (arr, obj) => {
    arr.map(arritem=>{
      console.log(arritem.username, obj.username, arritem.username===obj.username)
      if (arritem.username === obj.username)
      console.log(arritem)
      return arritem



})}


  return (
    <div className='card'>
        <img className="img" src={menuitem.image} />
        <div className="space">
        <h4><b>{menuitem.item_name}</b></h4>
        <p> $ {menuitem.price}</p>
        </div>
        <p>
          <button onClick={handleClick} >Add to Cart</button>
        </p>
    </div>
  )
}
export default Card