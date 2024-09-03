import React from 'react';
import Head from '../partials/head';  // Ajusta las importaciones según tu estructura
import Header from '../partials/header';
import Footer from '../partials/footer';
import '../../../public/style/productDetail.css'

const ProductDetail = () => {
  return (
    <>
    <Head />
    <Header />
      <main>
        <section className="detalleProducto">
          <div className="imagenDetalle">
            <img src="/images/Libro A traves de mi ventana.jpeg" alt="Descripción del Producto" />
          </div>
          <div className="infoProducto">
            <h1 className="titulo">Titulo del Producto</h1>
            <h2 className="subtitulo">Lorem ipsum dolor sit.</h2>
            <p className="disponibles">Disponibilidad: 4</p>
            <h2 className="precio">Precio: $0.00</h2>
            <div className="contador">
              <button className="contador-btn">-</button>
              <span className="contador-cantidad">1</span>
              <button className="contador-btn">+</button>
            </div>
            <button className="añadirAlCarrito">Añadir al Carrito</button>
            <div className="descripcionProducto">
              <h2>Descripción del Producto</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima hic libero necessitatibus neque ad nostrum, cum doloremque numquam inventore, natus distinctio soluta impedit perspiciatis doloribus ipsam. Totam neque tenetur labore.</p>
            </div>
          </div>
        </section>

        <section className="recomendados">
          <div className="Carrusel">
            <h2>Recomendados</h2>
            <div className="slick-list" id="slick-list">
              <button className="slick-arrow slick-prev" id="button-prev" data-button="button-prev" onClick={() => {/* Función para manejar el clic */}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </svg>
              </button>
              <div className="slick-track" id="track">
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/De Lukov, con amor.jpeg" alt="De Lukov, con amor" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Libro El Diario de Ana Frank.jpg" alt="El Diario de Ana Frank" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Libro Lascivia.jpg" alt="Lascivia" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Portada del Libro Cada Niña que murio.jpg" alt="Cada Niña que murio" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Portada del Libro Cinder.jpeg" alt="Cinder" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Portada del Libro de Actividades para preescolar.jpg" alt="Actividades para preescolar" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Portada del Libro No es lo que parece.jpg" alt="No es lo que parece" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="">
                      <picture>
                        <img src="/images/Portada del Libro Winter.jpeg" alt="Winter" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <button className="slick-arrow slick-next" id="button-next" data-button="button-next" onClick={() => {/* Función para manejar el clic */}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetail;
