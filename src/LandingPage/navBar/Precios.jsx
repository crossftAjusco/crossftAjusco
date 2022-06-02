import React from "react";
import "./Precios.css";
import mensualidad from "../../assets/lp_imgs/standar2.png";
import enfocado from "../../assets/lp_imgs/enfocao.png";
import nutri from "../../assets/lp_imgs/nutricion.png";
import promo from "../../assets/lp_imgs/promostandar.png";
import promo2 from "../../assets/lp_imgs/promofocus.png";

const Precios = () => {
  return (
    <>
      <section className="sect">
        <div>
          <h1 className="title">Entrenamientos</h1>
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
        </div>
      </section>
      <section className="sect">
        <div>
          <h1 className="sloggi">Promociones</h1>
        </div>

        <div className="cost">
          <div className="pricestyle">
            <img className="sizeprice" src={promo} alt="focus" />
          </div>
          <div className="pricestyle">
            <img className="sizeprice" src={promo2} alt="focus" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Precios;
