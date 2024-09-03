import React from 'react';
import '../../../public/style/login.css';

const Login = () => {
  return (
    <div className="cajaLogin">
      <form action="">
        <h1>Fantasy World</h1>
        <h3>Bienvenido a Fantasy World</h3>
        <p>Usa tu dirección de email para acceder</p>

        <div className="cajaInput">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" placeholder="Email" required />
        </div>

        <div className="cajaInput">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" placeholder="Contraseña" required />
        </div>

        <button type="submit" className="boton">ACCEDER</button>
        <p className="contraseñaOlvidada">
          <a href="">¿Has olvidado tu contraseña?</a>
        </p>
        
        <p className="sinCuenta">
          ¿No tienes una cuenta? <a href="./register.html">Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
