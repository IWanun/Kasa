import React from 'react';
import { NavLink } from 'react-router-dom';
import './Apartment.scss';

function Apartment(props) {
  return (
    <NavLink to={`/Apartment?id=${props.id}`}>
      <div className='apartment'>
        <img className='apartment_image' src={props.imageUrl} alt="" />
        <div className='apartment_subtitle'>{props.title}</div>
      </div>
    </NavLink>
  );
}

export default Apartment;
