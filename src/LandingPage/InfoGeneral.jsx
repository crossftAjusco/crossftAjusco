import React from "react";
import CardActionArea from "./Card";
import { CardMedia } from "@mui/material";
import "./InfoGeneral.css";

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
  const picture = `"https://www.sportlife.es/uploads/s1/75/96/70/8/trail-running.jpeg"`;

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
        <CardMedia image={picture} />
        <CardActionArea title={`Misión`} content={mision} />
        <CardActionArea title={`Visión`} content={vision} />
      </section>
    </div>
  );
};

export default InfoGeneral;
