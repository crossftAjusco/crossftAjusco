import { Carousel } from "react-bootstrap";
import "./carrousel.css";
import img1 from "../../assets/lp_imgs/powerade.jpg";
import img2 from "../../assets/lp_imgs/arenal.jpg";
import img3 from "../../assets/lp_imgs/lalostyle.jpg";
import img4 from "../../assets/lp_imgs/bosque.jpg";
import img5 from "../../assets/lp_imgs/celebrate.jpg";
import img6 from "../../assets/lp_imgs/spartan.jpg";
import img7 from "../../assets/lp_imgs/team.jpg";
import img8 from "../../assets/lp_imgs/trainning.jpg";
{
  /*Este componente aparece en la página de inicio y contiene las imagenes
representativas del negocio, con una pequeña descripción */
}

const Carrousel = () => {
  return (
    <Carousel className="middle" fade>
      <Carousel.Item>
        <img className="picture" src={img1} alt="First slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Carrera Power Ade</h3>
          <p>
            Preparamos a nuestros estudiantes para competir en carreras y
            maratones
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img2} alt="Second slide" />

        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Entrenamiento en el centro recreativo "El Arenal"</h3>
          <p>
            Algunos de nuestros entrenamientos los realizamos en diversos
            centros recreativos
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Yo seré tu entrenador</h3>
          <p>
            Mi nombre es Eduardo Romero Flores y será un honor ayudarte a lograr
            tus metas
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img4} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Entrenamiento en el bosque</h3>
          <p>También nos divertimos mucho entrenando al aire libre</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img5} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>En equipo todo es mejor</h3>
          <p>!Súmate a la mejor comunidad de Crossfit en CDMX!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img6} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>
            Cuento con una amplía trayectoria en la enseñanza y capacitacion
            deportiva y certificaciones avaladas por CONAE (Colegio Nacional de
            Entrenadores)
          </h3>
          <p>
            He participado en diversos eventos de Crossfit como el Spartan Race
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img7} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Carrera en comunidad</h3>
          <p>¡Serás capaz de enfrentar retos increíbles!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="picture" src={img8} alt="Third slide" />
        <Carousel.Caption className="carousel-caption carousel-label">
          <h3>Visítanos!</h3>
          <p>
            Agenda una cita vía{" "}
            <i class="fas fa-whatsapp-square    ">WhatsApp</i>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrousel;
