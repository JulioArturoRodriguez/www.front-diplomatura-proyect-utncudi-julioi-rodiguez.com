import React from 'react';
import './ubicacion.css'; 

const MapaPage = () => {
    return (
        <div className="map-container">
            <h1>Ubicación de Nuestra Oficina</h1>
            <iframe
                className="map-frame"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.569968345075!2d-58.63125102352353!3d-34.79159966744625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc5925425fb9b%3A0xb6680e29203b8739!2sCUDI%20-%20Centro%20Universitario%20de%20la%20Innovaci%C3%B3n!5e0!3m2!1ses-419!2sar!4v1732571283571!5m2!1ses-419!2sar" 
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación"
            ></iframe>
        </div>
    );
};

export default MapaPage;
