import React from 'react';
import '../styles/Menu.css';
import { MenuList } from '../helpers/MenuList'; 
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className="Menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;