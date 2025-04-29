import React, { useEffect, useState } from "react";
import { fetchProducts } from "../src/services/api";

const LastItemPanel = () => {
  const [lastProduct, setLastProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Fetch de productos
    fetchProducts()
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          const last = data.products[data.products.length - 1];
          setLastProduct(last);
        } else {
          setError("No hay productos disponibles.");
        }
      })
      .catch((err) => {
        setError("Error al cargar los productos.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false); // Después de cargar los datos, cambia el estado de loading
      });
  }, []);

  return (
    <div className="panel last-item">
      <h2>Último Producto Creado</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        lastProduct && (
          <div>
            <h3>{lastProduct.name}</h3>
            <p>{lastProduct.description}</p>
            <a href={lastProduct.detail} target="_blank" rel="noopener noreferrer">
              Ver Detalle
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default LastItemPanel;
