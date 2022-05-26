import React, { useState } from "react";
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
      <div style={{ width: "320px", height: "550px" }} className="bioText">
        <h3 className="encabezado">Eduardo Romero Flores</h3>
        <img className="picL" src={lalo} />
        <p>
          Desde pequeño adquirí dos pasiones que nunca he dejado: el{" "}
          <b>deporte</b> y la lectura. En la escuela primaria tuve contacto con
          el atletismo en donde nació y aún pervive mi gusto por correr. Después
          de un tiempo me convertí en un apasionado del <b>gimnasio</b> además
          de ejercitarme en espacios abiertos; me gusta escalar, practicar
          alpinismo, senderismo y correr en las montañas. El
          <b>entrenamiento funcional</b> y las artes marciales han marcado mi
          formación; además del gusto por el conocimiento; de vital importancia
          en la práctica deportiva ya sea esta recreativa, amateur o
          profesional.
          <br />
          Cuento con 2 certificaciones oficiales:
          <em>
            <li>
              Entrenador deportivo especializado en 'Entrenamiento Funcional'
            </li>
            <li>Entrenador en 'Acondicionamiento Físico'</li>
          </em>
        </p>
      </div>
      <div className="ImgCert">
        <img
          style={{ width: "320px", height: "550px" }}
          src={diplom3}
          alt="certificado"
        />
      </div>
      <div className="ImgCert">
        <img
          style={{ width: "320px", height: "520px" }}
          src={diplom1}
          alt="certificado"
        />
      </div>
      <div className="ImgCert">
        <img
          style={{ width: "320px", height: "520px" }}
          src={diplom2}
          alt="certificado"
        />
      </div>
      <div className="ImgCert">
        <img
          style={{ width: "320px", height: "520px" }}
          src={diplom4}
          alt="certificado"
        />
      </div>
      <div className="ImgCert">
        <img
          style={{ width: "320px", height: "570px" }}
          src={diplom5}
          alt="certificado"
        />
      </div>
    </div>
  );
};

export default Biopic;
