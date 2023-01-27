import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
    return (
       <div>
        <Carousel>
      <Carousel.Item>
       
      <img
          className="d-block w-100"
          src= "https://i.postimg.cc/Qxc3bLSX/river.jpg"
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://i.postimg.cc/dtqM5YGj/Screenshot-2023-01-27-at-12-49-26-Shamsia-Rahman-Sami-shamsiarahman-Instagram-photos-and-videos.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/Nj4v31WS/photo-2022-09-23-19-58-05.jpg"
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

export default Header;