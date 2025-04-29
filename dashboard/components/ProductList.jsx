import React, { useEffect, useState } from "react";
import { fetchProducts } from "../src/services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetchProducts()
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="panel product-list">
      <h2>Lista de Productos</h2>
      <button onClick={loadProducts}>Actualizar productos</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - <a href={product.detail} target="_blank" rel="noopener noreferrer">Detalle</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
