const API_URL = "http://localhost:3000/api";

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`, { credentials: 'include' });
  return response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`, { credentials: 'include' });
  return response.json();
};

export const fetchProductDetail = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, { credentials: 'include' });
  return response.json();
};

export const fetchUserDetail = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`, { credentials: 'include' });
  return response.json();
};
