import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

{
  /*Este componente se enciende en el componente general app y se muestra
  en todas la vistas, utiliza la libreria de iconos de MUI, mediante un iframe se coloca
  el mapa desde Google Maps y se  utiliza la API de Whats App para acceder chatear 
  directamente al número del establecimiento.
   */
}
const Footer = () => {
  return (
    <div>
      {/*Dirección y mapa del establecimiento */}
      <section className="sticky">
        <div className="box">
          <h4>
            Ubicación
            <div className="lineA">
              <span></span>
            </div>
          </h4>
          <br />
          <h6>
            Francisco Javier Mina 6-C, San Miguel Ajusco,
            <br />
            Tlalpan,14710, CDMX.
          </h6>
          <figure className="img">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.1010016038629!2d-99.20378410923666!3d19.221197554039943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfdeda7d625df%3A0x31edb69ea05af702!2sCross%20F%20T%20Ajusco!5e0!3m2!1ses-419!2smx!4v1649032398493!5m2!1ses-419!2smx"></iframe>
          </figure>
        </div>
        {/*Fechas y horarios*/}
        <div className="box3">
          <h4>
            Horarios
            <div className="line">
              <span></span>
            </div>
          </h4>
          <br />
          <h6>Lunes a viernes</h6>
          <h6>06:00-06:50</h6>
          <h6>07:00-08:00</h6>
          <h6>08:10-09:10</h6>
          <h6>18:00-19:00</h6>
          <h6>19:10-20:10</h6>
          <h6>20:10-21:20</h6>
          <h6>Sábado</h6>
          <h6>7:00-8:10</h6>
          <h6>8:10-9:10</h6>
        </div>
        {/*Contacto y redes sociales */}
        <div className="socialmedia">
          <h4>
            Contacto
            <div className="line">
              <span></span>
            </div>
          </h4>
          <br />
          <a href="https://www.facebook.com/YETIS14Ajusco12" target="_blank">
            <FacebookIcon />
          </a>
          <h6>@YETIS14Ajusco12</h6>

          <a href="mailto:axoscoyetizote@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <h6>Mail</h6>

          <a
            href="https://api.whatsapp.com/send?phone=5569083741"
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
          <h6>55-69-08-37-41</h6>
          <a
            href="https://instagram.com/crossftajusco?utm_medium=copy_link"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <h6>Cross F T Ajusco</h6>
          <a
            href="https://www.youtube.com/channel/UCoDuKqxn9dSVBf5ouc8dXNQ"
            target="_blank"
          >
            <YouTubeIcon />
          </a>
          <h6>CrossFT Ajusco</h6>
        </div>
      </section>
      {/*Copyright */}
      <div className="copyright">
        <small>
          &copy; 2022 <b>CrossFt Ajusco</b> Todos los derechos reservados.
        </small>
      </div>
    </div>
  );
};

export default Footer;
