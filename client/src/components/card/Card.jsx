import React from 'react'

import './Card.css'

const Card = ({menuitem}) => {

  console.log(menuitem)

  return (
    <div className='card'>
        <img className="img" src={menuitem.image} />
        <div className="space">
        <h4><b>{menuitem.item_name}</b></h4>
        <p> $ {menuitem.price}</p>
        </div>

        <p>
          <button>Add to Cart</button>
        </p>
    </div>
  )
}

export default Card