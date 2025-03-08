CREATE DATABASE fantasy_world;
USE fantasy_world;

CREATE TABLE Categorias (
    Categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    Categoria VARCHAR(255) NOT NULL
);

CREATE TABLE Autores (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);


CREATE TABLE ProductCategorias (
    ProductCateg_id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);


CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(25) NOT NULL,
    Apellido VARCHAR(25) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    Categoria_id INT,
    Imagen VARCHAR(255),
    FOREIGN KEY (Categoria_id) REFERENCES Categorias(Categoria_id)
);


CREATE TABLE Productos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Imagen VARCHAR(255),
    ProductCateg_id INT,
    AutorID INT,
    Precio DECIMAL(10, 2),
    FOREIGN KEY (ProductCateg_id) REFERENCES ProductCategorias(ProductCateg_id),
    FOREIGN KEY (AutorID) REFERENCES Autores(ID)
);
