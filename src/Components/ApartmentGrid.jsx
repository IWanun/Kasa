// Importation de React, useEffect et useState depuis React
import React, { useEffect, useState } from 'react';

// Importation du fichier de style ApartmentGrid.scss
import "./ApartmentGrid.scss";

// Importation du composant Apartment
import Apartment from "./Apartment.jsx";

// Définition du composant fonctionnel ApartmentGrid
function ApartmentGrid() {
  // Utilisation du state pour stocker la liste des appartements
  const [apartments, setApartments] = useState([]);

  // Utilisation de useEffect pour exécuter fetchApartments au chargement du composant
  useEffect(() => {
    fetchApartments();
  }, []);
  // useEffect avec une array vide == exécute cette fonction au chargement du composant

  // Fonction pour effectuer la requête et mettre à jour le state avec les appartements
  function fetchApartments() {
    fetch("db.json") // Requête vers le fichier JSON (changez le chemin en fonction de votre structure)
      .then((res) => res.json()) // Conversion de la réponse en JSON
      .then((res) => setApartments(res)) // Mise à jour du state avec la liste des appartements
      .catch(console.error); // Gestion des erreurs
  }

  // Rendu du composant avec la liste des appartements
  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Apartment
          key={apartment.id} // Ajout de la clé (key) pour éviter les avertissements React
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  )
}

// Exportation du composant ApartmentGrid pour pouvoir l'utiliser ailleurs
export default ApartmentGrid;
