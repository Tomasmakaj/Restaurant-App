import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import './menu.css'

const MenuContainer = () => {
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
  fetch('http://localhost:3000/menus')
  .then(res => res.json())
  .then(data => setMenu(data))
},[])

console.log(menu)

  return (
    <div id='menu' className="menu-container">
      {menu.map((menuitem=><Card key={menuitem.id} menuitem={menuitem}/>))}
    </div>
  )
}

export default MenuContainer