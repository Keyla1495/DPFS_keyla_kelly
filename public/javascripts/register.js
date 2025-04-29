document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const name = form.name;
  const email = form.email;
  const password = form.password;
  const profileImage = form.profileImage;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const imageError = document.getElementById('imageError');

  form.addEventListener('submit', (e) => {
    let isValid = true;

    // Limpiar mensajes anteriores
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    imageError.textContent = '';

    // Nombre
    if (name.value.trim().length < 2) {
      nameError.textContent = 'El nombre debe tener al menos 2 caracteres.';
      isValid = false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.textContent = 'El correo electrónico no es válido.';
      isValid = false;
    }

    // Contraseña
    if (password.value.length < 8) {
      passwordError.textContent = 'Debe tener al menos 8 caracteres.';
      isValid = false;
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;
      if (!passwordRegex.test(password.value)) {
        passwordError.textContent = 'Debe tener mayúsculas, minúsculas, número y un carácter especial.';
        isValid = false;
      }
    }

    // Imagen
    if (profileImage.value) {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(profileImage.value)) {
        imageError.textContent = 'Formato no válido (JPG, JPEG, PNG, GIF).';
        isValid = false;
      }
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
