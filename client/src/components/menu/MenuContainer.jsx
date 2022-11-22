import React from 'react';
import Card from '../card/Card';
import './menu.css'

const MenuContainer = ({menu, userCart, setUserCart}) => {

  return (
    <div id='menu' className="menu-container">
      {menu.map((menuitem=><Card key={menuitem.id} menuitem={menuitem} userCart={userCart} setUserCart={setUserCart} />))}
    </div>
  )
}

export default MenuContainer