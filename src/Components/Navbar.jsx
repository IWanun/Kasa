import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss"

function navbar() {
  return (
    <nav className='navbar'>

      <NavLink className='navbar_logo' to="/">
         <div>
            <img src="LogoKasa.png" alt="logo" />
         </div>
         </NavLink>

         <NavLink to="/">
         <div>Accueil</div>
         </NavLink>
         
         <NavLink to ="/About">
         <div>A Propos</div>
         </NavLink>
         
    </nav>
  )
}

export default navbar