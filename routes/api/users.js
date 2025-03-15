const express = require('express');
const router = express.Router();
const { User } = require('../../models/user');

// Obtener lista de usuarios paginada
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const { count, rows: users } = await User.findAndCountAll({
      attributes: ['id', 'name', 'email'],
      limit,
      offset
    });

    const totalPages = Math.ceil(count / limit);

    res.json({
      count,
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        detail: `/api/users/${user.id}`
      })),
      next: page < totalPages ? `/api/users?page=${page + 1}` : null,
      previous: page > 1 ? `/api/users?page=${page - 1}` : null
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Obtener detalle de un usuario
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email', 'image']
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      image: `/uploads/${user.image}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
});

module.exports = router;
