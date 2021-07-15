import React from "react";
import "./ImagemButton.css";

function ImagemButton(props) {
  return (
    <div className="image-button-container">
      <img src={props.imagem} />
      <a href="https://www.linkedin.com/in/gabazevdo/" target="_blank">
        {props.linkLinkedin}
      </a>
      <a href="https://fb.me/gabazevdo" target="_blank">
        {props.linkFacebook}
      </a>
      <a href="https://instagram.com/gabazevdo" target="_blank">
        {props.linkInstagram}
      </a>
    </div>
  );
}

export default ImagemButton;
