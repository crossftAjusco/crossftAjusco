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
  return (
    <section className="wall">
      <div
        className="testimonial"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1 className="marker" style={{ marginBottom: 20 }}>
            Testimonios
          </h1>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card
              img="https://pbs.twimg.com/profile_images/1431129476151357441/AZmUEptx_400x400.jpg"
              paragraph="Mi experiencia en el ejercicio lleva apenas 3 meses y medio, después de casi 20 años de inactividad física. Encontré en redes sociales a Cross FT Ajusco y llegó por medio de una dinámica, la cual fue 2 semanas de entrenamiento gratuitas, a partir de ahí ya no me fui, hoy puedo decir que estoy frente a un entrenador muy profesional (Lalo Romero) ya que sabe, entiende y adecua la forma de cada uno de los inscritos en su proyecto. En lo personal para mí ha Sido muy grato ya que en este poco tiempo he perdido casi 10 kilos, eso me sigue motivando día con día a qué nunca es tarde para empezar o regresar a hacer actividad física..."
              author="Alejandro García"
            />
            <Card
              img="https://i.ibb.co/g4mnQr1/Captura-de-pantalla-2022-05-18-a-la-s-14-10-17.png"
              paragraph="Lalo es una persona muy preparada que sabe lo que hace al planear y estructurar los entrenamientos, definitivamente una persona regresa al tomar una clase de prueba. Es dinámico, nada rutinario y siempre hay algo qué aprender para perfeccionar las técnicas. CrossFT es mi lugar favorito para ponerme en forma! "
              author="Vania Ramírez"
            />
            <Card
              img="https://www.okchicas.com/wp-content/uploads/2020/06/%C3%87a%C4%9Fatay-Ulusoy-525x700.jpg"
              paragraph="Entrenar en CrossFt Ajusco cambió mi realidad, mi cotidianidad. Ahora sé y entiendo que se puede vivir de otro modo. Entendí que mi cuerpo tiene otra forma y otro sentir cuando está en movimiento incluso cuando esta en reposo. Y no, no es vanidad, es estar sano y listo para el mañana. Perdí la flojera de levantarme temprano, perdí algunos dolores de espalda y las canas que me salían por estrés. Y creo que también perdí la pena de entrenar solo, pero siempre es mejor estar acompañado."
              author="Héctor Fuentes"
            />
            <Card
              img="https://anabelavila.com/wp-content/uploads/2016/02/beneficios-crossfit-mujeres.webp"
              paragraph="El profesor Eduardo Flores llegó a mi vida después de un período lleno de hábitos pocos saludables y una vida sedentaria. Al inicio me costaba mucho los ejercicios. Sin embargo poco a poco mi cuerpo iba conquistando pequeños retos, que al principio creía inalcanzables. Hoy en día me doy cuenta del gran avance que he tenido en mi pasión (carreras de montaña) y de los alcances que puedo tener. Me siento feliz en espera de mis primeras 50millas. Croft Ajusco es el inicio de grandes sueños.
              Gracias por toda la dedicación al Crossfit, a entrenarnos de manera individualizada, atendiendo nuestras necesidades físicas, por crear rutinas especiales para los que tenemos alguna lesión, por siempre estar atento a que realicemos adecuadamente los ejercicios, gracias por todos los consejos de vida y la motivación para mejorar física y mentalmente a cada día!!!
"
              author="Elizabeth Morales"
            />
            <Card
              img="https://pbs.twimg.com/profile_images/1342152259359137792/BX1YBK2E_400x400.jpg"
              paragraph="Iniciar con el entrenamiento en Cross F T Ajusco me ha hecho entender que mi cuerpo es maravilloso, que la disciplina es un punto importante en todos los ámbitos de nuestras vidas, todo inicio por salud, hoy puedo decir que vivo enamorada del entrenamiento y de la fuerza que puedo mostrarme a mi misma gracias a la motivación y acompañamiento de Eduardo y Edgar. 
              Cross F T Ajusco es una analogía de vida, para conseguir resultados es necesario poner mucho empeño, dedicación, paciencia, amor, errores y posibles caídas, pero te levantas y continúas."
              author="Isaac Ramírez"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, paragraph, author }) => {
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
      <p className="pghp">{paragraph}</p>
      <p
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          marginTop: 25,
        }}
      >
        <b>
          <span className="autor">{author}</span>
        </b>
      </p>
    </div>
  );
};

export default Testimony;
