import React from 'react'
import "./ApartmentHeader.scss"

export function ApartmentHeader(props) {
  const { flat } = props;
  const { name } = flat.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='apartment_header'>
    <div className='apartment_title'>
    <h1>{flat.title}</h1>
    <h2>{flat.location}</h2>
    <div className='apartment_tags'>
    {flat.tags.map((tag) => (
    <span key= {tag}>{tag}</span>
    ))}


    </div>
      </div>

      <div className='apartment__owner'>
        <div className='apartment_owner__details'>
      <h3> 
      <span>{firstName}</span> 
      <span>{lastName}</span> 
      </h3>
      
      <div className='apartment_owner__badge'>
      <img src={flat.host.picture} alt="" /></div>
      </div>

      <div className='apartment_owner__stars'>
      {[1,2,3,4,5].map((num)=> (
      <span key={num} className={props.flat.rating >= num ? "on" : ""}>
        ★</span>
      ))}

      </div>

    </div>
    </div>
  )
}

