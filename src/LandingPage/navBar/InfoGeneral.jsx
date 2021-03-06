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

  return (
    <div>
      <section className="Info">
        <div className="details">
          <h4 className="title">
            Entrena para ser fuerte, no solo para parecerlo...
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
        <div className="tarjetas">
          <CardActionArea title={`Misión`} content={mision} />
          <br></br>
          <CardActionArea title={`Visión`} content={vision} />
        </div>
      </section>
    </div>
  );
};

export default InfoGeneral;
