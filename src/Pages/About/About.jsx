import React from 'react'
import { DescriptionPanel } from '../../Components/DescriptionPanel';
import { ImageBanner } from "../../Components/ImageBanner"

import './About.scss'

function About() {
  return (
    <>
    <ImageBanner />
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