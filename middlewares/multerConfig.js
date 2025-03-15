const multer = require('multer');
const path = require('path');

// Configuración de Multer para guardar imágenes de perfil
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads/')); // Asegúrate de crear esta carpeta
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para evitar duplicados
  }
});

const upload = multer({ storage });

module.exports = upload;
