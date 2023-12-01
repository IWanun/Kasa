import React, { useEffect, useState } from 'react'
import "./ApartmentGrid.scss";
import Apartment from "./Apartment.jsx"

function ApartmentGrid() {
  const [apartments, setApartments] =useState ([]);

  useEffect(fetchApartments, []);
  //useEffect avec une array vide == exécute cette fonction au chargement du composant
     
function fetchApartments (){
fetch ("db.json")
.then((res) => res.json()) 
.then((res) => setApartments (res))
.catch(console.error);

}

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
          <Apartment title={apartment.title} imageUrl= {apartment.cover} id= {apartment.id}/>
      ))}
    </div>
  )
}

export default ApartmentGrid