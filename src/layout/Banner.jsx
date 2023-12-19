// Importation de React
import React from 'react';

// Importation du fichier de style Banner.scss
import './Banner.scss';

// Définition du composant fonctionnel Banner
function Banner() {
  return (
    // Conteneur du banner avec la classe 'banner'
    <div className='banner'>
        {/* Titre du banner */}
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

// Exportation du composant Banner pour pouvoir l'utiliser ailleurs
export default Banner;
