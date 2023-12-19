import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DescriptionPanel } from '../../Components/DescriptionPanel';
import { ImageBanner } from '../../Components/Carousel';
import { ApartmentHeader } from '../../Components/ApartmentHeader';
import './ApartmentPage.scss';

function Apartment() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  const [redirectToErrorPage, setRedirectToErrorPage] = useState(false);

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    const searchParams = new URLSearchParams(location.search);
    const apartmentId = searchParams.get('id');

    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id.toString() === apartmentId);

        if (flat) {
          setFlat(flat);
        } else {
          // Si l'appartement n'est pas trouvé, définir l'état de redirection
          setRedirectToErrorPage(true);
        }
      })
      .catch(console.error);
  }

  if (redirectToErrorPage) {
    // Rediriger vers la page d'erreur si l'appartement n'est pas trouvé
    return <Navigate to="/Error" />;
  }

  if (flat === null) return <div>...Loading</div>;

  return (
    <div className='apartment_page'>
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className='apartment_description_area'>
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((equipment, i) => <li key={i}>{equipment}</li>)}
        />
      </div>
    </div>
  );
}

export default Apartment;
