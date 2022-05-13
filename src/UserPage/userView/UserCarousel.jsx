import { Carousel } from "react-bootstrap";
import img3 from "../../assets/lp_imgs/p3.jpg";
import img4 from "../../assets/lp_imgs/p4.jpg";
import img5 from "../../assets/lp_imgs/p5.jpg";


const UserCarousel = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="First slide"/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="First slide"/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="First slide"/>
        
      </Carousel.Item>
    </Carousel>
  );
};
export default UserCarousel;
