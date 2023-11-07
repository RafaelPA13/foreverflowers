import Slide1 from '../assets/Flor1.jpg'
import Slide2 from '../assets/Flor2.jpg'
import Slide3 from '../assets/Flor3.jpg'

import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <h3>Primeiro Slide</h3>
          <p>Descrição do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>Segundo Slide</h3>
          <p>Descrição do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <h3>Terceiro Slide</h3>
          <p>Descrição do terceiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
