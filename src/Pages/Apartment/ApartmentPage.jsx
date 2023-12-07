import React, { useEffect, useState } from 'react';
import { DescriptionPanel } from '../../Components/DescriptionPanel';
import { ImageBanner } from '../../Components/ImageBanner';
import { ApartmentHeader } from '../../Components/ApartmentHeader';
import './ApartmentPage.scss';
import { useLocation } from 'react-router-dom';

function Apartment() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, []); // Assurez-vous de spécifier les dépendances correctement pour éviter les avertissements

  function fetchApartmentData() {
    const searchParams = new URLSearchParams(location.search);
    const apartmentId = searchParams.get('id');

    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id.toString() === apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
  }

  if (flat === null) return <div>...Loading</div>;

  return (
    <div className='apartment_page'>
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className='apartment_description_area'>
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel title="Equipements" content={flat.equipments.map((equipment, i) => <li key={i}>{equipment}</li>)} />
      </div>
    </div>
  );
}

export default Apartment;
