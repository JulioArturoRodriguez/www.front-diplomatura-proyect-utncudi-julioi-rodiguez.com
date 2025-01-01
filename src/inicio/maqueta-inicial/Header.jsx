
import React, { useState } from 'react'; 
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import './Header.css'; 
import { NavLink } from 'react-router-dom'; 


const Header = () => {
    const [show, setShow] = useState(false); // Estado para manejar la visibilidad del Offcanvas

    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true); 

    return (
        <>
         
            <Navbar className="navbar" expand={false}> 
                <Navbar.Brand href="#home">AlmerTech <br /> Conexiones <br /> Colaborativas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                    <NavLink href="/inicio">INICIO</NavLink>
                        <NavLink to="/nosotros">ACERCA DE NOSOTROS</NavLink>
                        <NavLink to="/login">USUARIOS</NavLink>
                        <NavLink to="/muestra">PRODUCTOS</NavLink>
                        <NavLink to="/servicio">SERVICIOS</NavLink>                      
                        <NavLink to="/pregunta">PREGUNTAS FRECUENTES</NavLink>
                        <NavLink to="/politicas">POLÍTICA DE PRIVACIDAD</NavLink>
                        <NavLink to="/terminos">TÉRMINOS Y CONDICIONES</NavLink>
                        <NavLink to="/mapa">UBICACIÓN</NavLink>
                        <NavLink to="/contacto">CONTACTO</NavLink>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            
        </>
       
    );
};

export default Header;