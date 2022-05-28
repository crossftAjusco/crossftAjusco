import React from "react";
import "./Precios.css";
import mensualidad from "../../assets/lp_imgs/estandar.png";
import enfocado from "../../assets/lp_imgs/enfocao.png";
import nutri from "../../assets/lp_imgs/nutricion.png";
import promo from "../../assets/lp_imgs/promo.png";

const Precios = () => {
  return (
    <>
      <section className="sect">
        <div>
          <h1 className="sloggi">Entrenamientos</h1>
        </div>
        <div className="cost">
          <div className="pricestyle">
            <img className="sizeprice" src={mensualidad} alt="month" />
          </div>
          <div className="pricestyle">
            {" "}
            <img className="sizeprice" src={enfocado} alt="visit" />
          </div>
          <div className="pricestyle">
            <img className="sizeprice" src={nutri} alt="focus" />
          </div>
          <div className="pricestyle">
            <img className="sizeprice" src={promo} alt="focus" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Precios;
