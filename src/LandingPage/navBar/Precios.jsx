import React from "react";
import "./Precios.css";
import mensualidad from "../../assets/lp_imgs/estandar.jpg";
import enfocado from "../../assets/lp_imgs/enfocado.jpg";
import nutri from "../../assets/lp_imgs/nutriconComp.jpg";

const Precios = () => {
  return (
    <div className="cost">
      <img className="pricestyle" src={mensualidad} alt="month" />
      <img src={enfocado} alt="visit" />
      <img src={nutri} alt="focus" />
    </div>
  );
};

export default Precios;
