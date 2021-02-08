// React
import React from "react";

// Assets
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div className="container-carousel third-background">
      <Carousel interval={3500} className="home-page-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://images8.alphacoders.com/926/926492.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://i.pinimg.com/originals/86/ff/b8/86ffb87572d657f335cd7cd828c70de3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
