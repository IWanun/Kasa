import React from 'react'
import { DescriptionPanel } from '../../Components/DescriptionPanel';


import './About.scss'

function About() {
  return (
    <>
     <div className='banner2'></div>
    <div  className='about_container'>
    <DescriptionPanel title="Fiabilité" 
    content="Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos 
    sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>

    <DescriptionPanel title="Respect" 
    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
     discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme "/>

    <DescriptionPanel title="Service"
     content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience
      parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>

    <DescriptionPanel title="Responsabilité" 
    content="La sécurité est la priorité de Kasa. Aussi bine pour nos hôtes que pour les
    voyageurs, chaque logement correspond aux critères de sécurité établis par nos
     services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à
     nos équipes de vérifier que les standards sont bien respectés. Nous organisons
     également des ateliers sur la sécurité domestique pour nos hôtes."/>

    </div>
  
    </>

  )
}

export default About