import React from 'react'
import './Card.css'

const Card = ({menuitem, userCart, setUserCart}) => {

  let handleClick=(e)=>{
    if (!userCart.some(e => e.item_name === menuitem.item_name)) {
      setUserCart([
        ...userCart,
        {
          item_name: menuitem.item_name,
          quantity: 1,
          price: menuitem.price,
          image: menuitem.image,
          base_price: menuitem.price
        }
      ])
    } else {
      alert('Item Already In Cart')
    }
  }

  return (
    <div  onClick={handleClick} className='card'>
        <img className="img" name="image" value={menuitem.image} src={menuitem.image} alt=""/>
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