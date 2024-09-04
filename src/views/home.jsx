// src/pages/Home.jsx
import React, { useState } from 'react';
import Head from './partials/head'; 
import Header from './partials/header';
import Footer from './partials/footer';

import '../../public/style/home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head />
      <Header />
      <main>
        <section className="banner">
        <a href="/detalleproducto"><img src="/images/Banner 1.png" alt="Banner Principal" /></a>
        </section>

        <section className="productos-destacados">
          <h2>Populares</h2>
          <div className="productos">
            <div className="producto">
            <a href="/detalleproducto"><img src="/images/Libro A traves de mi ventana.jpeg" alt="Libro A través de mi ventana" /></a>
            </div>
            <div className="producto">
            <a href="/detalleproducto"><img src="/images/Libro After.jpg" alt="Libro After" /></a>
            </div>
            <div className="producto">
            <a href="/detalleproducto"><img src="/images/Libro Atlantis.jpg" alt="Libro Atlantis" /></a>
            </div>
            
            <div className="producto">
            <a href="/detalleproducto"><img src="/images/Libro El final del Viaje.jpg" alt="Libro El final del Viaje" /></a>
            </div>
  
            <div className="producto">
            <a href="/detalleproducto"><img src="/images/Libro Almas Perdidas I.png" alt="Libro Almas Perdidas : La Revelación" /></a>
            </div>
          </div>
        </section>

        <section className="info-productos">
          <div className="info1">
          <a href="/detalleproducto"><img src="/images/Libro El pasado nunca nos olvida.jpg" alt="Libro El pasado nunca nos olvida" /></a>
         
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestias ad laborum unde numquam, expedita aut illo necessitatibus reprehenderit sequi reiciendis libero quasi magnam, sapiente quaerat? Laboriosam cupiditate ad itaque laborum, repudiandae reprehenderit, impedit quidem aut officiis beatae possimus porro, odit nam alias id? Nihil illum aut expedita ipsam perspiciatis.</p>
          </div>
          <div className="info2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestias ad laborum unde numquam, expedita aut illo necessitatibus reprehenderit sequi reiciendis libero quasi magnam, sapiente quaerat? Laboriosam cupiditate ad itaque laborum, repudiandae reprehenderit, impedit quidem aut officiis beatae possimus porro, odit nam alias id? Nihil illum aut expedita ipsam perspiciatis.</p>
            <a href="/detalleproducto"><img src="/images/Libro Finalmente soy yo.jpg" alt="Libro Finalmente soy yo" /></a>
          </div>
        </section>

        <section className="superventas">
          <h2>Superventas</h2>
          <div className="productos">
          <a href="/detalleproducto"><img src="/images/Libro Harry Potter y la piedra filosofal.jpg" alt="Producto 1" /></a>
          <a href="/detalleproducto"><img src="/images/Libro La Historia de Rondha.jpg" alt="Producto 2" /></a>
          <a href="/detalleproducto"><img src="/images/Libro Las Mil y una Noches.jpg" alt="Producto 3" /></a>
          <a href="/detalleproducto"><img src="/images/Libro Los Hombres del Norte.jpg" alt="Producto 4" /></a>
          <a href="/detalleproducto"><img src="/images/Libro The Book of Stolen Dreams.jpg" alt="Producto 5" /></a>
          </div>
        </section>
      </main>
      <Footer />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#libros">Libros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
