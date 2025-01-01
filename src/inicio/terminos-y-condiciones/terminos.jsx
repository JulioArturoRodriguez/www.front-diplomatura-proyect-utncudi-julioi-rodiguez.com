// TermsAndConditions.js
import React, { useState } from 'react';
import './TermsAndConditions.css'; // Para estilos personalizados

const TermsAndConditions = () => {
    // Estado para manejar la aceptación de los términos
    const [accepted, setAccepted] = useState(false);

    // Estado para manejar si se debe mostrar el resumen de los términos
    const [showSummary, setShowSummary] = useState(false);

    // Función para manejar el clic en el botón de "Aceptar"
    const handleAccept = () => {
        setAccepted(true);
    };

    // Función para manejar el clic en el botón de "Mostrar Resumen"
    const handleShowSummary = () => {
        setShowSummary(!showSummary);
    };

    return (
        <div className="container-terminos my-5">
            <h1 className="text-center mb-4">Términos y Condiciones</h1>
            <p className="text-center">
                Al utilizar este sitio web, acepta nuestros términos y condiciones de uso.
            </p>
            
            <section className="terms-section">
                <h2 className="my-3">1. Introducción</h2>
                <p>Bienvenido a AlmerTech. Estos términos y condiciones regulan el uso de nuestro sitio web y nuestros servicios. Al acceder o usar este sitio, usted acepta cumplir con estos términos.</p>

                <h2 className="my-3">2. Uso del Sitio</h2>
                <p>Este sitio web está destinado únicamente para fines legales. Al utilizar este sitio, se compromete a no realizar actividades que infrinjan la ley, como el robo de datos o el acceso no autorizado a sistemas.</p>

                <h2 className="my-3">3. Propiedad Intelectual</h2>
                <p>Todo el contenido, incluidos textos, imágenes, logotipos, gráficos, y software, es propiedad de AlmerTech o sus licenciantes y está protegido por derechos de autor.</p>

                <h2 className="my-3">4. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Le recomendamos revisar esta página regularmente para estar al tanto de cualquier cambio.</p>

                <h2 className="my-3">5. Limitación de Responsabilidad</h2>
                <p>En ningún caso, AlmerTech será responsable de daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de este sitio.</p>

                <h2 className="my-3">6. Ley Aplicable</h2>
                <p>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que AlmerTech tiene su sede, sin tener en cuenta sus disposiciones sobre conflicto de leyes.</p>
            </section>

            {/* Botón para mostrar o esconder el resumen */}
            <div className="text-center my-3">
                <button 
                    className="btn btn-primary"
                    onClick={handleShowSummary}>
                    {showSummary ? 'Ocultar Resumen' : 'Mostrar Resumen'}
                </button>
            </div>

            {/* Resumen de los términos */}
            {showSummary && (
                <div className="terms-summary mt-4">
                    <h3>Resumen de los Términos</h3>
                    <ul>
                        <li>Uso legal del sitio web.</li>
                        <li>Propiedad intelectual de contenidos.</li>
                        <li>Responsabilidad limitada de la empresa.</li>
                        <li>Modificaciones de los términos sin previo aviso.</li>
                    </ul>
                </div>
            )}

            {/* Aceptación de términos */}
            <div className="acceptance mt-4">
                <label>
                    <input
                        type="checkbox"
                        checked={accepted}
                        onChange={handleAccept}
                    />
                    Acepto los términos y condiciones
                </label>
            </div>

            {/* Solo muestra el botón si el usuario acepta los términos */}
            {accepted && (
                <div className="text-center mt-4">
                    <button className="btn btn-success" onClick={() => alert('Gracias por aceptar los términos')}>
                        Confirmar
                    </button>
                </div>
            )}

            <footer className="text-center mt-4">
                <p>&copy; 2024 AlmerTech. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default TermsAndConditions;
