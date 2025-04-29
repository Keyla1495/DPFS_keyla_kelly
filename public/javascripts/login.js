document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const warnings = document.getElementById("warnings");

  if (!loginForm || !emailInput || !passwordInput || !warnings) return;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    warnings.innerHTML = "";
    warnings.style.color = "red"; // Color por defecto para errores

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let valid = true;

    // Validaciones
    if (!validateEmail(email)) {
      warnings.innerHTML += "<p>El correo no es válido.</p>";
      valid = false;
    }

    if (password.length < 6) {
      warnings.innerHTML += "<p>La contraseña debe tener al menos 6 caracteres.</p>";
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        warnings.style.color = "green";
        warnings.innerHTML = "<p>Inicio de sesión exitoso. Redirigiendo...</p>";
        setTimeout(() => {
          window.location.href = "/index";
        }, 1500);
      } else {
        warnings.innerHTML = `<p>${result.message || "Credenciales inválidas"}</p>`;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      warnings.innerHTML = "<p>Hubo un error en el servidor. Intenta nuevamente.</p>";
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
