import React, { useEffect, useState } from "react";
import { fetchProducts } from "../src/services/api";

const CategoryPanel = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setCategories(data.countByCategory || {});
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="panel category-panel">
      <h2>Categorías</h2>
      <ul>
        {Object.entries(categories).map(([name, total]) => (
          <li key={name}>
            {name}: {total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;

