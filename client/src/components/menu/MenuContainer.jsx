import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import './menu.css'

const MenuContainer = ({user}) => {
  
  const [menu, setMenu] = useState([]);
  
  const [order, setOrder] = useState ({
    // order_item: '',
    // user_id: localStorage
  });
  
  useEffect(() => {
  fetch('http://localhost:3000/menus')
  .then(res => res.json())
  .then(data => setMenu(data))
},[])

  return (
    <div id='menu' className="menu-container">
      {menu.map((menuitem=><Card key={menuitem.id} menuitem={menuitem} order={order} setOrder={setOrder} user={user} />))}
    </div>
  )
}

export default MenuContainer