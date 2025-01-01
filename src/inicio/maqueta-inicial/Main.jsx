import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Main = () => {
    const images = [
        'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ0eCUyMDMwODB8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnR4JTIwMzA4MHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1555618568-bdf0a992c512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ0eCUyMDMwODB8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1611275484845-52a71f2b0a6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnl6ZW4lMjA3fGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/1435610168/es/foto/computadora-de-escritorio-gamer-con-luces-rgb-en-el-fondo-maqueta-de-pantalla-blanca-de.jpg?s=2048x2048&w=is&k=20&c=U9iwHutjhtMF1DQWtvwn1o_JWFyF6iEq-wnqjIG8Cg0=',
        'data:image/jpeg;base64,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',
        'https://images.unsplash.com/photo-1689236673605-e5d95a9c450c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjB2aWVqYXxlbnwwfHwwfHx8MA%3D%3D',
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen activa
    const itemsToShow = 3; // Número de imágenes a mostrar a la vez

    // Función para cambiar la imagen activa
    const scrollToImage = (index) => {
        setCurrentIndex(index);
        
    };

    // Función para cambiar de imagen al hacer clic en los botones de navegación
    const handleScroll = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === 'left') {
                return (prevIndex - 1 + images.length) % images.length;
            } else {
                return (prevIndex + 1) % images.length;
            }
        });
    };

    return (
        <div className="bg-dark text-white p-4">
            <h2 className="text-center">NUESTROS SERVICIOS</h2>
            <p className="text-center">TODOS NUESTROS SERVICIOS CUENTAN CON GARANTÍA</p>

            {/* Contenedor de la galería de imágenes con navegación */}
            <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-light small-btn" onClick={() => handleScroll('left')}>
                    <FaChevronLeft />
                </button>

                <div className="image-container">
                    {/* Mostrar varias imágenes a la vez */}
                    <div className="image-scroll" style={{ transform: `translateX(-${(currentIndex / images.length) * 100}%)` }}>
                        {images.map((src, index) => (
                            <div key={index} className="image-item">
                                <img 
                                    src={src} 
                                    alt={`Imagen ${index}`} 
                                    className="img-fluid square-image" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="btn btn-light small-btn" onClick={() => handleScroll('right')}>
                    <FaChevronRight />
                </button>
            </div>

            {/* Contenedor de los puntos de navegación */}
            <div className="d-flex justify-content-center mt-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => scrollToImage(index)}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Resto de tu contenido */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bg-primary text-white p-3">
                            <img 
                                src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/07/windows_11_new_hero_3.jpg" 
                                alt="Windows Logo" 
                                className="img-fluid square-image" 
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-secondary text-white p-3">
                            <img 
                                src="https://media.istockphoto.com/id/639735856/photo/helpful-customer-service.jpg?s=612x612&w=0&k=20&c=1dRYs2G4MOUmDB8BaMwcLonbGEVKPiwIyYSF08KMMhQ=" 
                                alt="Servicio Logo" 
                                className="img-fluid square-image" 
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-success text-white p-3">
                            <img 
                                src="https://cdn.pixabay.com/photo/2017/01/08/13/13/linux-1962898_640.jpg" 
                                alt="Linux Logo" 
                                className="img-fluid square-image" 
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <div className="image-box mb-3">
                    <h5>PC Sucia</h5>
                        <img 
                            src="https://media.istockphoto.com/id/180946050/photo/dirty-cpu-cooler.jpg?s=612x612&w=0&k=20&c=dq0Or4Y9Ncshmo_sq1D-x2f5PkIIvcp_LdeUuS76h4g=" 
                            alt="PC Sucia" 
                            className="img-fluid" 
                        />
                    </div>
                    
                    <h3>PASA DE ESTO A...</h3>
                </div>

                <div className="text-center mt-5">
                    <div className="image-box mb-3">
                        <img 
                            src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg" 
                            alt="PC Limpia" 
                            className="img-fluid" 
                        />
                    </div>
                    <h5>PC Limpia y Lista</h5>
                </div>
            </div>
        </div>
    );
};

export default Main;
