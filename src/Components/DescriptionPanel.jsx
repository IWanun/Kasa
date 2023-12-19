import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  // Utilisation de l'état de visibilité fourni par les props
  const [isContentVisible, setIsContentVisible] = useState(props.isOpen);

  // Fonction pour basculer la visibilité du contenu et appeler la fonction de bascule fournie par les props
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
    props.togglePanel && props.togglePanel();
  };

  // Construction des classes CSS en fonction de l'état de visibilité
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description_content";
  const chevronClass = (isContentVisible ? "fa-chevron-down" : "fa-chevron-up") + " fas";

  // Rendu du composant
  return (
    <div className="description_panel">
      {/* Titre de la description avec possibilité de cliquer pour basculer la visibilité */}
      <p className="description_title" onClick={showContent}>
        <span>{props.title}</span>
        {/* Icône chevron pour indiquer l'état de visibilité du contenu */}
        <i className={chevronClass}></i>
      </p>
      {/* Contenu de la description avec classe en fonction de l'état de visibilité */}
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
