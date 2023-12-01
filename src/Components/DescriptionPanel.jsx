import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description_content";
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div className="description_panel">
      <p className="description_title" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
