// Importation de React et du composant NavLink depuis react-router-dom
import React from 'react';
import { NavLink } from "react-router-dom";

// Importation du fichier de style Navbar.scss
import "./Navbar.scss"

// Définition du composant fonctionnel Navbar
function Navbar() {
  return (
    // Balise de navigation avec la classe 'navbar'
    <nav className='navbar'>

      {/* Logo avec un lien vers la page d'accueil */}
      <NavLink className='navbar_logo' to="/">
         <div>
            {/* Image du logo */}
            <img src="LogoKasa.png" alt="logo" />
         </div>
      </NavLink>

      {/* Lien vers la page d'accueil */}
      <NavLink to="/">
         <div>Accueil</div>
      </NavLink>
      
      {/* Lien vers la page "A Propos" */}
      <NavLink to="/About">
         <div>A Propos</div>
      </NavLink>
      
    </nav>
  )
}

// Exportation du composant Navbar pour pouvoir l'utiliser ailleurs
export default Navbar;
