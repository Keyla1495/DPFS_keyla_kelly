import React from 'react';
import Head from '../partials/head';  // Ajusta las importaciones según tu estructura
import Header from '../partials/header';
import Carrusel from '../products/carrusel-fotos';
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
            <h2 className="precio">Precio: $10.99</h2>
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

        <Carrusel />

      </main>

      <Footer />
    </>
  );
};

export default ProductDetail;
