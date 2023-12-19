// Importation de React et NavLink depuis react-router-dom
import React from 'react';
import { NavLink } from 'react-router-dom';

// Importation du fichier de style Apartment.scss
import './Apartment.scss';

// Définition du composant fonctionnel Apartment
function Apartment(props) {
  // Rendu du composant
  return (
    // Utilisation de NavLink pour créer un lien vers la page d'un appartement en fonction de son ID
    <NavLink to={`/Apartment?id=${props.id}`}>
      {/* Conteneur principal du composant avec la classe 'apartment' */}
      <div className='apartment'>
        {/* Image de l'appartement avec la classe 'apartment_image' */}
        <img className='apartment_image' src={props.imageUrl} alt="" />
        {/* Sous-titre de l'appartement avec la classe 'apartment_subtitle' */}
        <div className='apartment_subtitle'>{props.title}</div>
      </div>
    </NavLink>
  );
}

// Exportation du composant Apartment pour pouvoir l'utiliser ailleurs
export default Apartment;
