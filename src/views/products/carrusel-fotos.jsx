import React from 'react';
import Slider from 'react-slick';

import '../../../public/style/carruselfotos.css';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="Carrusel">
      <h2>Recomendados</h2>
      <Slider {...settings}>
        <div>
          <a href="#">
            <img src="/images/De Lukov, con amor.jpeg" alt="De Lukov, con amor" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Libro El Diario de Ana Frank.jpg" alt="El Diario de Ana Frank" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Libro Lascivia.jpg" alt="Lascivia" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Portada del Libro Cada Niña que murio.jpg" alt="Cada Niña que murio" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Portada del Libro Cinder.jpeg" alt="Cinder" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Portada del Libro de Actividades para preescolar.jpg" alt="Actividades para preescolar" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Portada del Libro No es lo que parece.jpg" alt="No es lo que parece" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/Portada del Libro Winter.jpeg" alt="Winter" />
          </a>
        </div>
      </Slider>
    </section>
  );
};

export default Carrusel;
