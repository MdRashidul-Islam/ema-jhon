import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/laptop.jpg'
import img2 from '../../images/phone.jpg'
import img3 from '../../images/camera.jpg'


const Home = () => {
        return (
                <div>
                        <Carousel>
  <Carousel.Item>
    <img
      className="img"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
        );
};

export default Home;