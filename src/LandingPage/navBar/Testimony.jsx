import React from "react";
import "./Testimony.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@mui/material/Avatar";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimony = () => {
  {
    /*const laura = `Es el mejor lugar para entrenar, gracias a la metodologia del
  profesor logre romper mis limites, ahora voy por mi segundo maraton y esta vez voy
por el primer lugar`;*/
  }
  const vania = `Lalo es una persona muy preparada que sabe lo que hace al planear y
        estructurar los entrenamientos, definitivamente una persona regresa al
        tomar una clase de prueba. Es dinámico, nada rutinario y siempre hay
        algo qué aprender para perfeccionar las técnicas. CrossFT es mi lugar
        favorito para ponerme en forma!`;
  return (
    <section className="wall">
      <div
        className="testimonial"
        style={{ display: "flex", justifyContent: "center", marginTop: 0 }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1 className="marker" style={{ marginBottom: 20 }}>
            Testimonios
          </h1>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card img="https://i.ibb.co/g4mnQr1/Captura-de-pantalla-2022-05-18-a-la-s-14-10-17.png" />
            <Card img="https://hagadone.media.clients.ellingtoncms.com/ARTICLE_190629924_AR_0_VKRMBLFPLLVN_t1170.jpg?5cc718665ab672dba93d511ab4c682bb370e5f86" />
            <Card img="https://lionsheadcf.com/wp-content/uploads/2020/08/lindsay-davis-scaled.jpg" />
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 100,
          height: 100,
          border: "1px solid lightgray",
          padding: 5,
          marginBottom: 15,
        }}
      />
      <p style={{ color: "white", fontFamily: "monospace" }}>
        Lalo es una persona muy preparada que sabe lo que hace al planear y
        estructurar los entrenamientos, definitivamente una persona regresa al
        tomar una clase de prueba. Es dinámico, nada rutinario y siempre hay
        algo qué aprender para perfeccionar las técnicas. CrossFT es mi lugar
        favorito para ponerme en forma!
      </p>
      <p
        style={{
          fontWeight: 400,
          color: "yellow",
          fontStyle: "italic",
          marginTop: 25,
        }}
      >
        <span>Vania Ramírez </span>, Frontend Developer Sr.
      </p>
    </div>
  );
};

export default Testimony;
