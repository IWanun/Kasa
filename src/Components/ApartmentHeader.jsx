// Importation de React
import React from 'react';

// Importation du fichier de style ApartmentHeader.scss
import "./ApartmentHeader.scss";

// Composant fonctionnel ApartmentHeader
export function ApartmentHeader(props) {
  // Extraction des propriétés nécessaires du props
  const { flat } = props;
  const { name } = flat.host;
  
  // Découpage du nom de l'hôte en prénom et nom de famille
  const [firstName, lastName] = name.split(" ");

  // Rendu du composant
  return (
    <div className='apartment_header'>
      <div className='apartment_title'>
        {/* Titre de l'appartement */}
        <h1>{flat.title}</h1>
        {/* Localisation de l'appartement */}
        <h2>{flat.location}</h2>

        {/* Tags associés à l'appartement */}
        <div className='apartment_tags'>
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Informations sur l'hôte */}
      <div className='apartment__owner'>
        <div className='apartment_owner__details'>
          {/* Nom de l'hôte */}
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>

          {/* Badge ou image de l'hôte */}
          <div className='apartment_owner__badge'>
            <img src={flat.host.picture} alt="" />
          </div>
        </div>

        {/* Indicateur de notation sous forme d'étoiles */}
        <div className='apartment_owner__stars'>
          {[1,2,3,4,5].map((num)=> (
            <span key={num} className={props.flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
