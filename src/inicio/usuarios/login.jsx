import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Función que realiza la solicitud de login
  const loginUser = async (credentials) => {
    try {
      let response = await fetch('https://www-backend-cudi-utn-proyect-julio.onrender.com/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
       response = await response.json();
      // Verificamos si la respuesta es correcta (status 200)
      if (response && response.accesstoken) {
    
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      // Si la respuesta es exitosa, retornamos los datos
    
      return response;

    } catch (error) {
      // Captura cualquier error y lo pasa a la interfaz de usuario
      throw new Error(error.message || 'Ocurrió un error al intentar iniciar sesión');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple para verificar que el email y la contraseña no estén vacíos
    if (!email || !password) {
      setError('Por favor ingresa ambos campos: correo electrónico y contraseña');
      return;
    }

    try {
      const credentials = { email, password };
      const response = await loginUser(credentials); // Llamar a la función loginUser

      // Verificamos si la respuesta contiene el token de acceso
      if (response && response.data && response.data.accesstoken) {
        // Guardar el token en localStorage o sessionStorage según prefieras
        localStorage.setItem('token', response.data.accesstoken);
        localStorage.setItem('username', response.data.user);
        // Redirigir al usuario a la página de productos solo si el login es exitoso
        navigate('/productos');
      } else {
        setError('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      // Si ocurre un error, mostrar el mensaje de error
      setError(error.message || 'Ocurrió un error al intentar iniciar sesión. Inténtalo más tarde.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error si lo hay */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <p className="signup-link">
          ¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
