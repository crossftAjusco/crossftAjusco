import React from "react";
import "./Precios.css";
import mensualidad from "../../assets/lp_imgs/mensualidad.png";
import visita from "../../assets/lp_imgs/visit.png";
import focus from "../../assets/lp_imgs/training.png";
import nutri from "../../assets/lp_imgs/nutri.png";

const Precios = () => {
  return (
    <div className="cost">
      <img src={mensualidad} alt="month" />
      <img src={visita} alt="visit" />
      <img src={focus} alt="focus" />
      <img src={nutri} alt="nutrition" />
    </div>
  );
};

export default Precios;
