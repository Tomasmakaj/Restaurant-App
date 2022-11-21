import React from 'react'
import './Cartitem.css'

const Cartitem = ({singleitem, userCart,setUserCart}) => {

  let handleDelete = ()=>{
    let filteredArray =userCart.filter((item)=>singleitem.item_name !== item.item_name)
    setUserCart(filteredArray)
  }

  const incrementValue = () => {
      singleitem.quantity++
      singleitem.price=singleitem.quantity*singleitem.base_price
      setUserCart([...userCart])
  }

const decrementValue = () => {
    singleitem.quantity--
    singleitem.price=singleitem.quantity*singleitem.base_price
    setUserCart([...userCart])
}

  return (
    <div className='card'>
        <img className="img" name="image" value={singleitem.image} src={singleitem.image} alt=""/>
        <div className="space">
          <h4><b name="order_item" value={singleitem.item_name}>{singleitem.item_name}</b></h4>
          <p> Total Quantity:       
              <label type="button" onClick={decrementValue} value="-">-</label>
              <label type="text" name="quantity" value={singleitem.quantity} maxlength="2" max="10" size="1" id="number">{singleitem.quantity}</label>
              <label type="button" onClick={incrementValue} value="+">+</label>
              <div name="price" id="price" value={singleitem.price}>$ {singleitem.price}</div>
          <button onClick={handleDelete}>Delete Item</button>
          </p>
        </div>
    </div>
  )
}
export default Cartitem;