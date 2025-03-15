import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalCategories: 0,
    countByCategory: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get("/api/users");
        const productsRes = await axios.get("/api/products");

        setStats({
          totalUsers: usersRes.data.count,
          totalProducts: productsRes.data.count,
          totalCategories: Object.keys(productsRes.data.countByCategory).length,
          countByCategory: productsRes.data.countByCategory,
        });
      } catch (error) {
        console.error("Error al obtener datos del dashboard", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Total de productos: {stats.totalProducts}</h3>
        <h3>Total de usuarios: {stats.totalUsers}</h3>
        <h3>Total de categorías: {stats.totalCategories}</h3>
      </div>
      <div>
        <h4>Productos por categoría:</h4>
        <ul>
          {Object.entries(stats.countByCategory).map(([category, count]) => (
            <li key={category}>
              {category}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
