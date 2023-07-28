import React from "react";

export const Ubicacion: React.FC = () => {
    return (
      <div>
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.8243350378107!2d-70.3323609!3d-27.381200999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698047e3780368b%3A0x93726f02eb717f1a!2sSalitrera%20Flor%20de%20Chile%201466%2C%201532889%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1ses!2scl!4v1690424548576!5m2!1ses!2scl"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
export default Ubicacion;