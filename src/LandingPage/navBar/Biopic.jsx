import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Biopic.css";
import diplom1 from "../../assets/lp_imgs/dip1V.jpeg";
import diplom2 from "../../assets/lp_imgs/dip2H.jpeg";
import diplom3 from "../../assets/lp_imgs/dip3V.jpeg";
import diplom4 from "../../assets/lp_imgs/dip4H.jpeg";
import diplom5 from "../../assets/lp_imgs/dip5V.jpeg";
import lalo from "../../assets/lp_imgs/laloR.png";

const Biopic = () => {
  return (
    <div className="biopic">
      <div className="boxZero" style={{ width: "200px", height: "300px" }}>
        <section className="bioText">
          <h3 className="encabezado">Eduardo Romero Flores</h3>
          <img
            className="picL"
            src={lalo}
            height="300"
            width="220"
            alt="Coach"
          />
          <p>
            Desde pequeño adquirí dos pasiones que nunca he dejado: el
            <b>deporte</b>y la lectura. En la escuela primaria tuve contacto con
            el atletismo donde nació y aún pervive mi gusto por correr. Un
            tiempo apasionado del <b>gimnasio</b>, desde siempre de los espacios
            abiertos, el deporte siempre ha sido parte de mi vida. Escalar,
            practicar alpinismo, senderismo, correr en montañas; el
            <b>entrenamiento funcional</b>
            así como un poco de artes marciales han marcado mi formación. Además
            del gusto por el conocimiento; de vital importancia en la práctica
            deportiva ya sea esta recreativa, amateur o profesional.
            <br />
            Cuento con 2 certificaciones oficiales:
            <li>
              Entrenador deportivo especializado en 'Entrenamiento Funcional'
            </li>
            <li>Entrenador en 'Acondicionamiento Físico'</li>
          </p>
        </section>
        <img className="pictures" src={diplom3} alt="certificado" />
        <img className="pictures" src={diplom1} alt="certificado" />
        <img className="pictures" src={diplom2} alt="certificado" />
        <img className="pictures" src={diplom4} alt="certificado" />
        <img className="pictures" src={diplom5} alt="certificado" />
      </div>
    </div>
  );
};

export default Biopic;
