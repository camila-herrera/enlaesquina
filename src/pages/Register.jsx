import "../styles/auth.css"

function Register({ goToLogin }) {
  return (
    <div className="auth-container">

      <img src="/fondo.jpg" className="auth-bg" />

      <div className="auth-box">
        <h2>Registrarse</h2>

        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />

        <button>Crear cuenta</button>

        <p onClick={goToLogin}>
          ¿Ya tienes cuenta? Inicia sesión
        </p>
      </div>

    </div>
  )
}

export default Register