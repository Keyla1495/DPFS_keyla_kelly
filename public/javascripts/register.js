document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const warnings = document.getElementById("warnings");
  
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que se envíe el formulario automáticamente

        let mensajes = "";
        let entrar = false;

        // Validar nombre (mínimo 2 caracteres)
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre.length < 2) {
            mensajes += "El nombre debe tener al menos 2 caracteres.<br>";
            entrar = true;
        }

        // Validar email (formato válido)
        const email = document.getElementById("email").value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para emails válidos
        if (!regexEmail.test(email)) {
            mensajes += "El correo electrónico no es válido.<br>";
            entrar = true;
        }

        // Validar contraseña (mínimo 8 caracteres, opcionalmente con mayúsculas, minúsculas, número y carácter especial)
        const password = document.getElementById("password").value;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password.length < 8) {
            mensajes += "La contraseña debe tener al menos 8 caracteres.<br>";
            entrar = true;
        } else if (!regexPassword.test(password)) {
            mensajes += "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.<br>";
            entrar = true;
        }

        // Validar imagen (formato válido)
        const imagen = document.getElementById("imagen").files[0];
        const imagenRegex = /\.(jpg|jpeg|png|gif)$/i; // Extensiones válidas
        if (imagen && !imagenRegex.test(imagen.name)) {
            mensajes += "La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF).<br>";
            entrar = true;
        }

        if (entrar) {
            warnings.innerHTML = mensajes; // Muestra los mensajes de advertencia
        } else {
            warnings.innerHTML = ""; // Limpia las advertencias si todo está correcto
            formulario.submit(); // Envía el formulario al servidor
        }
    });
});
