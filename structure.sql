CREATE DATABASE Libreria_FW;

USE Libreria_FW;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Productos
CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    imagen VARCHAR(255)
);

-- Tabla Categorías
CREATE TABLE Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla Marcas
CREATE TABLE Marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);



-- Tabla Talles
CREATE TABLE Talles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Relación Producto-Categoría (Muchos a Muchos)
CREATE TABLE Producto_Categoria (
    producto_id INT,
    categoria_id INT,
    PRIMARY KEY (producto_id, categoria_id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id),
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

-- Tabla Carrito de Compras
CREATE TABLE Carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    total DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

-- Relación Producto-Carrito (Muchos a Muchos)
CREATE TABLE Carrito_Producto (
    carrito_id INT,
    producto_id INT,
    cantidad INT,
    precio DECIMAL(10,2),
    PRIMARY KEY (carrito_id, producto_id),
    FOREIGN KEY (carrito_id) REFERENCES Carritos(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);
