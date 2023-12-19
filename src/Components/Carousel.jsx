// Importation de React et useState depuis React
import React, { useState } from "react";

// Importation du fichier de style ImageBanner.scss
import "./Carousel.scss";

// Composant fonctionnel ImageBanner
export function ImageBanner(props) {
  // Récupération des images passées en tant que propriété
  const pictures = props.pictures;

  // État local pour suivre l'index de l'image actuelle
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'index de l'image
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à l'image suivante
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour passer à l'image précédente
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Fonction pour vérifier si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carrousel d'images ou une image par défaut si aucune image n'est disponible
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="https://picsum.photos/800" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  // Rendu du composant ImageBanner
  return (
    <div className="image_banner">
      {/* Conteneur pour le carrousel d'images ou une image par défaut */}
      <div className="image_container">{getCarouselOrDefaultImage()}</div>

      {/* Affichage des boutons de navigation si des images sont disponibles */}
      {arePicturesAvailable() && (
        <>
          {/* Bouton pour passer à l'image précédente */}
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Affichage du numéro de diapositive actuel */}
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>

          {/* Bouton pour passer à l'image suivante */}
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
