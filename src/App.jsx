// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/home.jsx'; // Ruta actualizada
import DetalleProducto from './views/products/product-detail.jsx';
import Login from './views/users/login.jsx';
import Register from './views/users/register.jsx';
import CarritoDeCompras from './views/users/productCart.jsx';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalleproducto" element={<DetalleProducto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carritodecompras" element={<CarritoDeCompras />} />
      </Routes>
    </div>
  );
}

export default App;
