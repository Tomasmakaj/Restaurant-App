import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import './menu.css'
const MenuContainer = ({userCart, setUserCart}) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/menus')
  .then(res => res.json())
  .then(data => setMenu(data))
},[])
  return (
    <div id='menu' className="menu-container">
      {menu.map((menuitem=><Card key={menuitem.id} menuitem={menuitem} userCart={userCart} setUserCart={setUserCart} />))}
    </div>
  )
}
export default MenuContainer