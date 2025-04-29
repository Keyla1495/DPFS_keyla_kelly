import React from "react";
import { Link } from "react-router-dom"; 
import TotalPanel from "../components/TotalPanel";
import LastItemPanel from "../components/LastItemPanel";
import CategoryPanel from "../components/CategoryPanel";
import ProductList from "../components/ProductList";

function App() {
  return (
    <main className="dashboard-container">
      <nav className="navbar">
        <h2>Fantasy World Admin</h2>
        <div className="nav-links">
        <a href="http://localhost:3000/users/login" target="_blank" rel="noopener noreferrer">Iniciar Sesión</a>
        <a href="http://localhost:3000/users/register" target="_blank" rel="noopener noreferrer">Registrarse</a>

        </div>
      </nav>

      <h1>Dashboard de Admin</h1>

      <div className="panels">
        <TotalPanel />
        <LastItemPanel />
        <CategoryPanel />
      </div>

      <section className="panel product-list">
        <ProductList />
      </section>
    </main>
  );
}

export default App;
