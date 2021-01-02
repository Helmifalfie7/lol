import React from 'react'
import { Link  } from "react-router-dom";

function Nav() {
  
  const navstyle ={
  color:'white'
  };

  return (

    <nav >
    <h3>logo</h3>
      <ul className='nav-links'>
        <Link style={navstyle} to='/About'>
        <li>About</li>
        </Link>

          <Link style={navstyle} to='/Shop'>
          <li>Shop</li>
          </Link>
          
      </ul>
    </nav>
  );
}

export default Nav;
