import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/style/register.css';

function Register() {
  return (
    <div className='bg-register'>
      <div className="cajaRegister">
      <form action="">
        <h1>Fantasy World</h1>
        <h3>Bienvenido a Fantasy World</h3>
        <p>Únete a la aventura, regístrate ahora</p>

        <div className="cajaInput">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" placeholder="Ingresa tu Nombre Completo" required />
        </div>

        <div className="cajaInput">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" placeholder="Ingresa tu email" required />
        </div>

        <div className="cajaInput">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" placeholder="Ingresa tu contraseña" required />
        </div>

        <button type="submit" className="boton">REGÍSTRATE</button>

        <p className="cuentaExistente">
          ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
