import Carousel from "react-bootstrap/Carousel";
import Img1 from "./images/feedback1.jpg";
import Img2 from "./images/feedback2.jpg";
import Img3 from "./images/feedback3.jpg";
import Img4 from "./images/feedback4.jpg";
import Img5 from "./images/feedback5.jpg";
import Img6 from "./images/feedback6.jpg";
import Img7 from "./images/feedback7.jpg";
import Img8 from "./images/feedback8.jpg";
import Img9 from "./images/feedback9.jpg";
import Img10 from "./images/feedback10.jpg";
import Img11 from "./images/feedback11.jpg";
import Img12 from "./images/feedback12.jpg";
import Img13 from "./images/feedback13.jpg";
import Img14 from "./images/feedback14.jpg";

function Carusel() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-50" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img4} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img5} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img6} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img7} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img8} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img9} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img10} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img11} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img12} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img13} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={Img14} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;
