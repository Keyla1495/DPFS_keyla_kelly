import React, { useEffect, useState } from "react";
import { fetchProducts, fetchUsers } from "../src/services/api";

function TotalPanel() {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data.count); 
      })
      .catch(err => console.error('Error al traer productos', err));

    fetchUsers()
      .then(data => {
        setUsers(data.count); 
      })
      .catch(err => console.error('Error al traer usuarios', err));
  }, []);

  return (
    <div>
      <h2>Total de Productos: {products}</h2>
      <h2>Total de Usuarios: {users}</h2>
    </div>
  );
}

export default TotalPanel;
