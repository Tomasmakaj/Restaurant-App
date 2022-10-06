import React from 'react'
import './Card.css'
const Card = ({menuitem, userCart, setUserCart}) => {
  let handleClick=(e)=>{
    setUserCart([
      ...userCart,
      {
        item_name: menuitem.item_name,
        price: menuitem.price,
        image: menuitem.image,
        checked_out: false
      },
    ])
  }
  return (
    <div  onClick={handleClick} className='card'>
        <img className="img" name="image" value={menuitem.image} src={menuitem.image} />
        <div className="space">
          <h4><b name="order_item" value={menuitem.item_name}>{menuitem.item_name}</b></h4>
          <p name="price" value={menuitem.price}> $ {menuitem.price}</p>
        </div>
        <p>
          <button value={menuitem.id}>Add to Cart</button>
        </p>
    </div>
  )
}
export default Card;