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
              img="https://i.ibb.co/ySB8NCn/Alma-Delia.png"
              paragraph="Soy ultramaratonista de montaña, desde hace 5 años, en mi trayecto he ido aprendiendo a desarrollar la disciplina, nunca he contado con algún entrenador en específico, he corrido en base a mis conocimientos que los he adquirido de bibliografía y de amigos de experiencia en el ramo, así he llegado a correr 120km que ha sido lo máximo,  con buenos resultados excepto en mi última competencia de 100 millas no logré por lesión de siatica. Y después de 6 meses corrí el maratón Cdmx y lo logré terminar sin problema. 
Posteriormente se vino la pandemia que me saco de la jugada, padecí Covid y me dio para abajo todos los sistemas, perdí mucho músculo, fuerza en piernas y debilidad física.
Entro en recuperación donde no me permití vencerme ya que soy muy aferrada y empecé a meterle a la bici que fue mi gran aliada durante un año, seguí avanzando y el médico me indicó ejercicio de fuerza con pesas y funcional . 
Aquí es donde entra mi queridísimo Coach de CrossFt Ajusco. Que me lo encuentro en el camino y dije esto es lo que busco!!!
Y en el mes de marzo inicio entrenamiento con Lalo Romero el cual me ha llevado a otro nivel de desarrollo de esta disciplina. 
En estos tres meses he logrado desarrollar e incrementar masa muscular donde inicie con una masa muscular de 25% y hasta hoy estoy el 31.1% y he bajado mucha grasa visceral. 
La verdad que esta disciplina y la orientación de Lalo me ha llevado a otro nivel donde después de un año de estar en actividad física y con estos tres meses he logrado correr un ultramarathon, en el pasado mes de Abril donde me sentí muy bien y mi cuerpo reaccionó al 100% y lo increíble que la recuperación fue más rápida y más eficiente. 
Hoy solo tengo que a gradecer a Dios por poner gente extraordinaria en mi camino que siempre es un pilar para mi crecimiento deportivo y personal, como lo es Lalo Romero que me ha llevado a otro nivel para desarrollar esta pasión por la montaña y el deporte. 
No cabe duda que cuando tienes un coach con el conocimiento adecuado, simplemente te vuelves en tú mejor versión. 
Simplemente Gracias Lalo por ser mi Coach y no consentirme. Gracias por que en cada entrenamiento me exiges más y eso me saca de mi área de confort para seguir avanzando. 
Gracias, gracias, gracias. Amigo 
Dios te bendice &#128591;&#128591;&#x1F91C🙏🏼🙏🏼🙏🏼✍🏼🤜🏼🦅💪🏼🎬"
              author="Alma Delia Gonzalez Camacho."
            />
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
