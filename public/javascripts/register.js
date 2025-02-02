document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const warnings = document.getElementById("warnings");
  
    formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe el formulario automáticamente

    let mensajes = "";
    let entrar = false;

    // Validar nombre
    const nombre = document.getElementById("nombre").value.trim();
        if (nombre.length < 3) {
        mensajes += "El nombre debe tener al menos 3 caracteres.<br>";
        entrar = true;
        }

    // Validar email
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para emails válidos
        if (!regexEmail.test(email)) {
        mensajes += "El correo electrónico no es válido.<br>";
        entrar = true;
        }

    // Validar contraseña
    const password = document.getElementById("password").value;
        if (password.length < 8) {
        mensajes += "La contraseña debe tener al menos 8 caracteres.<br>";
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
