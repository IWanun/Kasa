import React from 'react'
import { DescriptionPanel } from '../../Components/DescriptionPanel';


import './About.scss'

function About() {
  return (
    <>
     <div className='banner2'></div>
    <div  className='about_container'>
    <DescriptionPanel title="Fiabilité" content="C'est très important"/>
    <DescriptionPanel title="Respect" content="C'est très important"/>
    <DescriptionPanel title="Service" content="C'est très important"/>
    <DescriptionPanel title="Responsabilité" content="C'est très important"/>
    </div>
  
    </>

  )
}

export default About