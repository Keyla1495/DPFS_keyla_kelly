// src/pages/Home.jsx
import React from 'react';
import Head from './partials/head';  // Ajusta las importaciones según tu estructura
import Header from './partials/header';
import Footer from './partials/footer';
import '../App.css'
import '../../public/style/home.css'; // Asegúrate de que este archivo CSS exista

function Home() {
  return (
    
    <>
      <Head />
      <Header />
      <main>
        <section className="banner">
          <img src="/images/Banner 1.png" alt="Banner Principal" />
        </section>

        <section className="productos-destacados">
          <h2>Populares</h2>
          <div className="productos">
            <div className="producto">
              <img src="/images/Libro A traves de mi ventana.jpeg" alt="Libro A través de mi ventana" />
            </div>
            <div className="producto">
              <img src="/images/Libro After.jpg" alt="Libro After" />
            </div>
            <div className="producto">
              <img src="/images/Libro Atlantis.jpg" alt="Libro Atlantis" />
            </div>
            <div className="producto">
              <img src="/images/Libro El final del Viaje.jpg" alt="Libro El final del Viaje" />
            </div>
            <div className="producto">
              <img src="/images/Libro Almas Perdidas I.png" alt="Libro Almas Perdidas : La Revelación" />
            </div>
          </div>
        </section>

        <section className="info-productos">
          <div className="info1">
            <img src="/images/Libro El pasado nunca nos olvida.jpg" alt="Libro El pasado nunca nos olvida" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sint perspiciatis quae deserunt laborum, amet omnis modi fugit? Sit, minus natus a ipsam nam repudiandae, ipsum esse nisi itaque, maxime iste! Modi esse dicta voluptatum libero quasi nam cum eius illum, mollitia possimus non earum, cumque perspiciatis nisi dolorum recusandae, facilis magnam voluptates? Id obcaecati ipsam distinctio dicta nam molestiae labore, culpa quod voluptatem hic aliquam, quasi fuga aliquid, excepturi harum quos quidem vel ea vero ex minima expedita. Ab deserunt facilis est? Labore consectetur cumque quam fugit! Excepturi nemo fuga quaerat deleniti. Qui quam fugit suscipit placeat tempora iste voluptates, quo laborum, fugiat odio aut corrupti distinctio veritatis sequi! Quaerat eaque dignissimos magni quisquam animi sit a maxime sed provident, quas excepturi tempore enim mollitia voluptatibus quam consectetur ipsum veniam saepe praesentium ratione architecto aspernatur cupiditate expedita. Consectetur repudiandae voluptas inventore, magnam itaque fuga delectus sed suscipit beatae accusamus?</p>
          </div>
          <div className="info2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium officiis quisquam a quod odio, recusandae omnis repellat, quis natus incidunt vel nostrum! Tenetur illo vel obcaecati culpa accusantium magnam? Beatae aut magni, cupiditate neque quis distinctio reprehenderit architecto perspiciatis voluptatibus tempora fugit hic non eos quibusdam incidunt, inventore perferendis? Quis corporis quibusdam mollitia commodi? Sit voluptas repellat officiis repudiandae.</p>
            <img src="/images/Libro Finalmente soy yo.jpg" alt="Libro Finalmente soy yo" />
          </div>
        </section>

        <section className="superventas">
          <h2>Superventas</h2>
          <div className="productos">
            <img src="/images/Libro Harry Potter y la piedra filosofal.jpg" alt="Producto 1" />
            <img src="/images/Libro La Historia de Rondha.jpg" alt="Producto 2" />
            <img src="/images/Libro Las Mil y una Noches.jpg" alt="Producto 3" />
            <img src="/images/Libro Los Hombres del Norte.jpg" alt="Producto 4" />
            <img src="/images/Libro The Book of Stolen Dreams.jpg" alt="Producto 5" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
