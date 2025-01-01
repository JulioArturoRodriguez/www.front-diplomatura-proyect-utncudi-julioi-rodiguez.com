import React from 'react';
import './servicios.css'; // Archivo CSS para estilos personalizados

const Servicios = () => {
    return (
        <div className="service-container my-5">
            <h1 className="text-center mb-4">Nuestros Servicios</h1>
            <p className="text-center">
                En AlmerTech, ofrecemos soluciones integrales de Help Desk diseñadas para mejorar la productividad de su empresa y garantizar la mejor experiencia para sus clientes.
            </p>

            <section className="my-5">
                <h2>¿Qué es un servicio Help Desk?</h2>
                <p>
                    Un Help Desk es un servicio de soporte que actúa como el primer punto de contacto entre los usuarios y el equipo técnico. Su objetivo principal es resolver problemas técnicos, responder preguntas frecuentes y garantizar que los sistemas y aplicaciones funcionen sin interrupciones. Este servicio ayuda a empresas y usuarios a mejorar su eficiencia y productividad.
                </p>
            </section>

            <section className="services-grid my-5">
                <div className="row">
                    {/* Soporte Técnico */}
                    <div className="col-md-4 text-center">
                        <i className="fas fa-tools fa-3x mb-3"></i>
                        <h3>Soporte Técnico</h3>
                        <p>
                            Asistencia para solucionar problemas de hardware y software, garantizando el funcionamiento óptimo de sus dispositivos.
                        </p>
                    </div>

                    {/* Gestión de Incidencias */}
                    <div className="col-md-4 text-center">
                        <i className="fas fa-bug fa-3x mb-3"></i>
                        <h3>Gestión de Incidencias</h3>
                        <p>
                            Seguimiento y resolución de problemas reportados por los usuarios, asegurando tiempos de respuesta rápidos y eficaces.
                        </p>
                    </div>

                    {/* Consultoría y Optimización */}
                    <div className="col-md-4 text-center">
                        <i className="fas fa-chart-line fa-3x mb-3"></i>
                        <h3>Consultoría y Optimización</h3>
                        <p>
                            Análisis y mejora de procesos tecnológicos para garantizar la máxima productividad y reducción de costos operativos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="levels my-5">
                <h2>Niveles de Servicios Help Desk</h2>
                <div className="row">
                    {/* Nivel 1 */}
                    <div className="col-md-4">
                        <h4 className="text-center">Nivel 1: Soporte Básico</h4>
                        <p>
                            Resolución de problemas simples como restablecimiento de contraseñas, preguntas frecuentes y asistencia inicial para usuarios.
                        </p>
                    </div>
                    {/* Nivel 2 */}
                    <div className="col-md-4">
                        <h4 className="text-center">Nivel 2: Soporte Avanzado</h4>
                        <p>
                            Asistencia especializada para resolver problemas técnicos más complejos relacionados con sistemas y aplicaciones.
                        </p>
                    </div>
                    {/* Nivel 3 */}
                    <div className="col-md-4">
                        <h4 className="text-center">Nivel 3: Especialistas</h4>
                        <p>
                            Equipos expertos en resolver problemas críticos que requieren experiencia avanzada o desarrollo de soluciones personalizadas.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="text-center mt-5">
                <p>&copy; 2024 AlmerTech. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Servicios;
