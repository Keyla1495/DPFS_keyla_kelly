const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const registerValidations = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),

  body('email')
    .notEmpty().withMessage('El email es obligatorio.')
    .isEmail().withMessage('Debe ser un formato de email válido.')
    .bail()
    .custom((value) => {
      const users = readUsers();
      const existingUser = users.find(user => user.email === value);
      if (existingUser) {
        throw new Error('Este email ya está registrado.');
      }
      return true;
    }),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .isLength({ min: 8 }).withMessage('Debe tener al menos 8 caracteres.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/)
    .withMessage('Debe contener mayúsculas, minúsculas, un número y un carácter especial.'),

  body('profileImage').custom((value, { req }) => {
    if (!req.file) return true;
    const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(req.file.originalname).toLowerCase();
    if (!acceptedExtensions.includes(ext)) {
      throw new Error('Formato de imagen no válido (JPG, JPEG, PNG, GIF).');
    }
    return true;
  })
];

module.exports = registerValidations;
