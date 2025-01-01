
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa los componentes de cada ruta


import Header from './inicio/maqueta-inicial/Header';
import Inicio from './inicio/Inicio';
import Main2 from './inicio/hacerca-de-nosotros/Main2';
import Main3 from './inicio/politicas/main';
import Main4 from './inicio/productos/Main4';
import Login from './inicio/usuarios/login';
import Registro from './inicio/usuarios/registro';
import TermsAndConditions from './inicio/terminos-y-condiciones/terminos';
import ProductoMuestra from './inicio/productos-muestra/producto';
import Contact from './inicio/contacto/contacto';
import Preguntas from './inicio/preguntas-frecuentes/preguntas';
import MapaPage from './inicio/ubicacion/ubicacion';
import Servicios from './inicio/servicios/servicios';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={< Inicio/>} />
                <Route path="/nosotros" element={<Main2 />} />
                <Route path="/politicas" element={<Main3 />} />
                <Route path="/productos" element={<Main4 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/muestra" element={< ProductoMuestra/>} />
                <Route path="/terminos" element={<TermsAndConditions />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/pregunta" element={<Preguntas />} />
                <Route path="/mapa" element={< MapaPage/>} />
                <Route path="/servicio" element={<Servicios />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
