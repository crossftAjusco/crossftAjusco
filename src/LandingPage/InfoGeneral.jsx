import React from "react";
import CardActionArea from "./Card";
import { CardMedia } from "@mui/material";
import "./InfoGeneral.css";
import misimg from "https://www.sportlife.es/uploads/s1/75/96/70/8/trail-running.jpeg";
import seimg from "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchambermaster.blob.core.windows.net%2Fimages%2Fmembers%2F2860%2F1763%2FMalibu%2520Fitness.jpg&f=1&nofb=1";
const InfoGeneral = () => {
  const mision = `Tenemos como misión buscar que nuestros socios día a día progresen
            en todas las cualidades físicas que poseemos. Se busca que a la par
            del desarrollo físico, también exista un desarrollo mental que les
            permita afrontar cualquier reto y esto solo se puede lograr
            haciéndoles salir de la zona de confort y acercándolos a lo que
            creen son sus límites`;
  const vision = ` Ser un referendo a nivel local y regional brindando un valor agregado
          a nuestros usuarios y a nuestra comunidad. Lograr que nuestros de
          deportistas hagan una historia llena de logros personales y en equipo. `;
  const first = <img src={misimg} alt="logo" />;
  const second = <img src={seimg} alt="logo" />;

  return (
    <div>
      <section className="Info">
        <div className="details">
          <h4>
            <i>Entrena para ser fuerte, no solo para parecerlo</i>
          </h4>
          <br />
          <h5>
            Más que un centro de entrenamiento, somos una comunidad.
            <br />
            En <strong>CrossFT Ajusco</strong> recibes un entrenamiento
            funcional realizado a alta intensidad. Se adapta a todos los niveles
            y está dirigido a cualquier persona.
          </h5>
        </div>
        <CardMedia />
        <CardActionArea img={first} title={`Misión`} content={mision} />
        <CardMedia img={second} />
        <CardActionArea title={`Visión`} content={vision} />
      </section>
    </div>
  );
};

export default InfoGeneral;
