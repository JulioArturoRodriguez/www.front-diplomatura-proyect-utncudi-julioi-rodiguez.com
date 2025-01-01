import React, { useState } from 'react'; // Necesario para usar useState
import { useNavigate } from 'react-router-dom'; // Necesario para usar useNavigate
import { Link } from 'react-router-dom'; // Necesario para el Link
import './registro.css'; // Estilos del componente


const Registro = () => {
  const [formData, setFormData] = useState({
    username: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    tarjeta: '',
    dni: '',
    celular: '',
    preguntaSeguridad: '',
    respuestaSeguridad: '',
    edad: '',
    fechaNacimiento: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      username,
      nombre,
      apellido,
      email,
      password,
      confirmPassword,
      tarjeta,
      dni,
      celular,
      preguntaSeguridad,
      respuestaSeguridad,
      edad,
      fechaNacimiento,
    } = formData;

    if (!Object.values(formData).every((field) => field)) {
      setError('Por favor, completa todos los campos.');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setSuccess('');
      return;
    }

    try {
      let response = await fetch('http://localhost:3000/usuario/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === 'success') {
        setSuccess('Usuario registrado con éxito. Redirigiendo...');
        setError('');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.message || 'Error al registrar el usuario.');
        setSuccess('');
      }
    } catch (error) {
      setError('Ocurrió un error al registrar. Inténtalo más tarde.');
      setSuccess('');
      console.error(error);
    }
  };

  return (
    <div className="registro-container d-flex justify-content-center align-items-center vh-100">
      <div className="registro-form-container p-4 rounded">
        <h2 className="text-center text-info">Crear Cuenta</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              <input
                type={field.includes('password') ? 'password' : field === 'fechaNacimiento' ? 'date' : 'text'}
                name={field}
                className="form-control"
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-info w-100">
            Registrarse
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/" className="text-info">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;
