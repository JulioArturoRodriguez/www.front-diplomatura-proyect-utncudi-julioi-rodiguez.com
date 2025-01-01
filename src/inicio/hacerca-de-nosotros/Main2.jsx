import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main2.css';

const MainNosotros = () => {
    return (
        <div className="bg-light text-dark p-5">
            <div className="containerhacer">
                <h2 className="text-center text-primary mb-4">ACERCA DE NOSOTROS</h2>
                <p className="text-center lead">Conoce más sobre nuestro equipo, nuestra misión y nuestros valores.</p>
                <hr className="my-4" />

                <section className="mb-5">
                    <h4 className="text-info">¿Quiénes somos?</h4>
                    <p>
                        En nuestra compañía, nos especializamos en ofrecer servicios de soporte técnico de alta calidad. Nuestro equipo de Help Desk está compuesto por profesionales altamente capacitados y apasionados por la tecnología. Nos dedicamos a resolver cualquier problema técnico que puedas encontrar y garantizar que tu experiencia con nuestros productos y servicios sea la mejor posible.
                    </p>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">Nuestro enfoque</h4>
                    <p>
                        Proveemos asistencia técnica, solucionamos problemas de hardware y software, y ofrecemos orientación y soporte para asegurar que todos los sistemas funcionen correctamente. Al mantenernos actualizados con las últimas tecnologías, podemos ofrecer soluciones innovadoras y adaptadas a las necesidades específicas de nuestros clientes.
                    </p>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">Nuestra misión</h4>
                    <p>
                        Proporcionar un servicio de soporte técnico excepcional basado en la confianza, la calidad y la eficiencia. Nuestro compromiso es garantizar que los sistemas de nuestros clientes estén siempre operativos y funcionales.
                    </p>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">Compromiso con la calidad</h4>
                    <p>
                        Nos enorgullece nuestro firme compromiso con la calidad. Valoramos cada interacción como una oportunidad para superar las expectativas de nuestros clientes. Recibimos y utilizamos la retroalimentación de nuestros clientes para mejorar continuamente nuestros servicios.
                    </p>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">Valores y ética profesional</h4>
                    <p>
                        Actuamos con integridad, responsabilidad y respeto. Promovemos un entorno de trabajo ético y profesional, asegurándonos de construir relaciones duraderas basadas en la confianza y la transparencia.
                    </p>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">Términos y condiciones comunes</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Alcance del servicio:</strong> Nuestros servicios están diseñados para resolver problemas técnicos específicos. No somos responsables de problemas derivados de software o hardware de terceros.
                        </li>
                        <li className="list-group-item">
                            <strong>Confidencialidad:</strong> Nos comprometemos a proteger toda la información confidencial compartida por nuestros clientes y a utilizarla únicamente para fines de soporte.
                        </li>
                        <li className="list-group-item">
                            <strong>Limitación de responsabilidad:</strong> Nuestra empresa no será responsable por pérdidas indirectas, incidentales o consecuentes relacionadas con el uso de nuestros servicios.
                        </li>
                        <li className="list-group-item">
                            <strong>Actualizaciones de las políticas:</strong> Nos reservamos el derecho de actualizar nuestros términos y condiciones en cualquier momento para reflejar cambios en nuestras prácticas y regulaciones.
                        </li>
                        <li className="list-group-item">
                            <strong>Soporte no cubierto:</strong> Cualquier soporte técnico fuera del alcance del contrato puede estar sujeto a tarifas adicionales.
                        </li>
                        <li className="list-group-item">
                            <strong>Cancelaciones:</strong> Los servicios pueden ser cancelados por cualquiera de las partes con un aviso previo de al menos 30 días.
                        </li>
                        <li className="list-group-item">
                            <strong>Propiedad intelectual:</strong> Todas las herramientas y soluciones proporcionadas son propiedad de nuestra empresa, a menos que se indique lo contrario.
                        </li>
                    </ul>
                </section>

                <section className="mb-5">
                    <h4 className="text-info">¿Por qué elegirnos?</h4>
                    <p>
                        Elegirnos significa contar con un equipo de expertos dedicados a proporcionar el mejor soporte técnico posible. Nuestro compromiso con la innovación y la mejora continua asegura que nuestros clientes reciban soluciones eficientes y duraderas.
                    </p>
                </section>

                <footer className="text-center text-secondary mt-5">
                    &copy; {new Date().getFullYear()} [Nombre de la Empresa]. Todos los derechos reservados.
                </footer>
            </div>
        </div>
    );
};

export default MainNosotros;
