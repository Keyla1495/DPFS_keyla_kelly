const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Crear el directorio si no existe
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Especifica la carpeta de destino
  },
  filename: (req, file, cb) => {
    // Asigna un nombre único al archivo basado en la fecha actual y la extensión del archivo
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Validación del tipo de archivo (solo imágenes)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Tipos de archivos permitidos
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Acepta el archivo
  } else {
    cb(new Error('Solo se permiten imágenes JPG, PNG y GIF'), false); // Rechaza el archivo
  }
};

// Configura multer con almacenamiento y validación de archivo
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Limita el tamaño del archivo a 5MB
});

module.exports = upload;
