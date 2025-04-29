-- Insertar categorías de libros
INSERT INTO categories (name) VALUES
('Ficción'),
('No Ficción'),
('Ciencia Ficción'),
('Fantasía'),
('Biografías'),
('Infantil');

-- Insertar usuarios (lectores y admin)
INSERT INTO users (name, email, password, role) VALUES
('Ana López', 'ana@example.com', 'password123', 'user'),
('Pedro Ramos', 'pedro@example.com', 'securepass', 'admin'),
('Laura Sánchez', 'laura@example.com', 'laura2024', 'user'),
('Mario Díaz', 'mario@example.com', 'mario123', 'user');

-- Insertar productos (libros)
INSERT INTO products (name, description, price, image, category_id) VALUES
('Cien Años de Soledad', 'Novela icónica de Gabriel García Márquez que narra la historia de la familia Buendía.', 18.50, 'cien_anos.jpg', 1),
('Sapiens: De animales a dioses', 'Un recorrido por la historia de la humanidad escrito por Yuval Noah Harari.', 21.00, 'sapiens.jpg', 2),
('Dune', 'Clásico de ciencia ficción de Frank Herbert sobre política, religión y poder en un planeta desértico.', 19.99, 'dune.jpg', 3),
('El Nombre del Viento', 'Primera parte de las Crónicas del Asesino de Reyes, escrita por Patrick Rothfuss.', 17.75, 'nombre_viento.jpg', 4),
('Steve Jobs', 'Biografía autorizada de Steve Jobs escrita por Walter Isaacson.', 23.50, 'steve_jobs.jpg', 5),
('El Principito', 'Obra de Antoine de Saint-Exupéry que narra la historia de un pequeño príncipe de otro planeta.', 9.99, 'principito.jpg', 6);
