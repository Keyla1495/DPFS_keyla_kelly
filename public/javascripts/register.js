document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const imagen = document.getElementById('profileImage').files[0]; 

    if (nombre.length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor ingresa un email válido.');
      return;
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (imagen && !['image/jpeg', 'image/png', 'image/gif'].includes(imagen.type)) {
      alert('Solo se permiten imágenes JPG, PNG o GIF.');
      return;
    }

    form.submit();
  });
});
