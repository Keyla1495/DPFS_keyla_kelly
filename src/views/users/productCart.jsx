import React from 'react';
import Head from '../partials/head';  // Ajusta las importaciones según tu estructura
import Header from '../partials/header';
import Footer from '../partials/footer';
import '../../../public/style/productCart.css';


const ProductCart = () => {
  return (
    <>
      <Head />

      <Header />
     
        <main>
          <section className="cart">
            <h2>Tu Carrito de Compras</h2>
            <div className="cart-items">
              <div className="cart-item">
                <img
                  src="../public/images/Libro The Great Gatsby.jpg"
                  alt="The Great Gatsby"
                />
                <div className="item-details">
                  <h3>The Great Gatsby</h3>
                  <p>Precio: $10.99</p>
                  <p>Cantidad: 1</p>
                  <button className="remove-item">Eliminar</button>
                </div>
              </div>
              <div className="cart-item">
                <img
                  src="../public/images/Libro The Great Gatsby.jpg"
                  alt="The Great Gatsby"
                />
                <div className="item-details">
                  <h3>The Great Gatsby</h3>
                  <p>Precio: $10.99</p>
                  <p>Cantidad: 1</p>
                  <button className="remove-item">Eliminar</button>
                </div>
              </div>
              <div className="cart-item">
                <img
                  src="../public/images/Libro The Great Gatsby.jpg"
                  alt="The Great Gatsby"
                />
                <div className="item-details">
                  <h3>The Great Gatsby</h3>
                  <p>Precio: $10.99</p>
                  <p>Cantidad: 1</p>
                  <button className="remove-item">Eliminar</button>
                </div>
              </div>
              <div className="cart-item">
                <img
                  src="../public/images/Libro The Great Gatsby.jpg"
                  alt="The Great Gatsby"
                />
                <div className="item-details">
                  <h3>The Great Gatsby</h3>
                  <p>Precio: $10.99</p>
                  <p>Cantidad: 1</p>
                  <button className="remove-item">Eliminar</button>
                </div>
              </div>
              {/* Repite para otros items */}
            </div>
            <div className="cart-summary">
              <h3>Total: $10.99</h3>
              <button className="checkout">Finalizar Compra</button>
            </div>
          </section>
        </main>

        <Footer />

     
    </>
  );
};

export default ProductCart;