import React from 'react'
import './Cartitem.css'

const Cartitem = ({singleitem, userCart,setUserCart}) => {

  // let updateCart = (e.target.value) => {
  //     for( var i = 0; i < arr.length; i++) {

  //     }
  // }
  let handleDelete = ()=>{
    let filteredArray =userCart.filter((item)=>singleitem.item_name !== item.item_name)
    setUserCart(filteredArray)
  }

  
  
  return (
    <div className='card'>
        <img className="img" name="image" value={singleitem.image} src={singleitem.image} />
        <div className="space">
          <h4><b name="order_item" value={singleitem.item_name}>{singleitem.item_name}</b></h4>
          <p name="price" value={singleitem.price}> $ {singleitem.price} <button onClick={handleDelete}>Delete</button></p>
        </div>
    </div>
  )
}
export default Cartitem;