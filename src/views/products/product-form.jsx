import React, { useState } from 'react';
import Head from './Head';  // Ajusta las importaciones según tu estructura
import Header from './Header';
import Footer from './Footer';

const ProductForm = ({ product }) => {
  const [formData, setFormData] = useState({
    name: product ? product.name : '',
    description: product ? product.description : '',
    category: product ? product.category : '',
    price: product ? product.price : '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'image' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div>
      <Head />
      <Header />
      <main>
        <h2>{product ? 'Editar Producto' : 'Crear Producto'}</h2>
        <form 
          action={product ? `/productos/${product.id}` : '/productos'} 
          method="POST" 
          encType="multipart/form-data" 
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <label htmlFor="description">Descripción:</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required
          />
          
          <label htmlFor="image">Imagen:</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            onChange={handleChange} 
          />
          
          <label htmlFor="category">Categoría:</label>
          <input 
            type="text" 
            id="category" 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required 
          />
          
          <label htmlFor="price">Precio:</label>
          <input 
            type="number" 
            id="price" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            required 
          />
          
          <button type="submit">Guardar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ProductForm;
