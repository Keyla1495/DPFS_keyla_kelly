import React from 'react';
import '../../../public/style/header.css';

const Header = () => {
  return (
    
    <header>
    <div className="container">
        <div className="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
            <h1><a href="/">Fantasy World</a></h1>
        </div>
        
        <nav className="menu">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/libros">Libros</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
        <div className="buscador">
            <input type="search" placeholder="Buscar..."/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="iconos">
          <div className="carrito" id="cartIcon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count" id="cartCount">0</span>
            </div>
            <div className="usuario"><a href="/login"><i className="fa-solid fa-user"></i></a></div>
        </div>
    </div>
</header>

  );
}

export default Header;
