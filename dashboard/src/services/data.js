const PRODUCTS_URL = "data/products.json";

export const fetchProducts = async () => {
  const response = await fetch(PRODUCTS_URL);
  return response.json(); // Devuelve todo el JSON de productos
};

export const fetchProductDetail = async (id) => {
  const response = await fetch(PRODUCTS_URL);
  const data = await response.json();
  return data.products.find(product => product.id === id); // Devuelve el producto por ID
};
