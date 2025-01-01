import React, { useState } from 'react';
import './preguntas.css'; // Para los estilos personalizados

const Preguntas = () => {
    // Estados para manejar si las respuestas están visibles o no
    const [openQ1, setOpenQ1] = useState(false);
    const [openQ2, setOpenQ2] = useState(false);
    const [openQ3, setOpenQ3] = useState(false);
    const [openQ4, setOpenQ4] = useState(false);
    const [openQ5, setOpenQ5] = useState(false);
    const [openQ6, setOpenQ6] = useState(false);

    // Funciones para manejar la apertura y cierre de las respuestas
    const toggleAnswer = (question) => {
        if (question === 1) setOpenQ1(!openQ1);
        if (question === 2) setOpenQ2(!openQ2);
        if (question === 3) setOpenQ3(!openQ3);
        if (question === 4) setOpenQ4(!openQ4);
        if (question === 5) setOpenQ5(!openQ5);
        if (question === 6) setOpenQ6(!openQ6);
    };

    return (
        <div className="pregunta-container my-5">
            <h1 className="text-center mb-4">Preguntas Frecuentes (AlmerTech)</h1>

            <div className="accordion" id="faqAccordion">
                {/* Servicio 1 - Nivel 1 */}
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(1)}
                                aria-expanded={openQ1}
                                aria-controls="collapseOne"
                            >
                                ¿Qué hacer si tengo problemas con el inicio de sesión? (Nivel 1)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseOne"
                        className={`collapse ${openQ1 ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Para problemas con el inicio de sesión, asegúrese de verificar lo siguiente:
                            <ul>
                                <li>Verifique que su nombre de usuario y contraseña sean correctos.</li>
                                <li>Asegúrese de que no esté bloqueada su cuenta.</li>
                                <li>Si el problema persiste, puede restablecer su contraseña utilizando la opción de "Olvidé mi contraseña".</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Servicio 2 - Nivel 2 */}
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(2)}
                                aria-expanded={openQ2}
                                aria-controls="collapseTwo"
                            >
                                ¿Cómo solucionar problemas de conectividad a la red? (Nivel 2)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className={`collapse ${openQ2 ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Si está experimentando problemas con la red, siga estos pasos:
                            <ul>
                                <li>Verifique que el cable de red o la conexión Wi-Fi esté activa.</li>
                                <li>Reinicie su enrutador o módem.</li>
                                <li>Si el problema persiste, consulte con el departamento de soporte de red.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Servicio 3 - Nivel 3 */}
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(3)}
                                aria-expanded={openQ3}
                                aria-controls="collapseThree"
                            >
                                ¿Cómo solucionar problemas de software avanzado? (Nivel 3)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className={`collapse ${openQ3 ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Para problemas avanzados de software, siga estos pasos:
                            <ul>
                                <li>Revise los registros del sistema para identificar cualquier error.</li>
                                <li>Intente reinstalar o reparar el software afectado.</li>
                                <li>Si no se resuelve, contacte al soporte de nivel 3 para asistencia avanzada.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pregunta adicional para Nivel 1 */}
                <div className="card">
                    <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(4)}
                                aria-expanded={openQ4}
                                aria-controls="collapseFour"
                            >
                                ¿Cómo puedo recuperar mi cuenta después de un bloqueo? (Nivel 1)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFour"
                        className={`collapse ${openQ4 ? 'show' : ''}`}
                        aria-labelledby="headingFour"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Si su cuenta está bloqueada, siga estos pasos:
                            <ul>
                                <li>Recupere el acceso utilizando la opción "Olvidé mi contraseña".</li>
                                <li>Si su cuenta fue bloqueada por seguridad, contacte al soporte técnico.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pregunta adicional para Nivel 2 */}
                <div className="card">
                    <div className="card-header" id="headingFive">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(5)}
                                aria-expanded={openQ5}
                                aria-controls="collapseFive"
                            >
                                ¿Cómo solucionar un error de red? (Nivel 2)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFive"
                        className={`collapse ${openQ5 ? 'show' : ''}`}
                        aria-labelledby="headingFive"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Para solucionar un error de red, siga estos pasos:
                            <ul>
                                <li>Verifique si el dispositivo tiene conexión a Internet.</li>
                                <li>Verifique que el servidor de red esté en funcionamiento.</li>
                                <li>Reinicie el servicio de red o comuníquese con el administrador del sistema si el problema persiste.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pregunta adicional para Nivel 3 */}
                <div className="card">
                    <div className="card-header" id="headingSix">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => toggleAnswer(6)}
                                aria-expanded={openQ6}
                                aria-controls="collapseSix"
                            >
                                ¿Qué hacer si el sistema de software está dañado permanentemente? (Nivel 3)
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseSix"
                        className={`collapse ${openQ6 ? 'show' : ''}`}
                        aria-labelledby="headingSix"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            Si el sistema de software está dañado permanentemente, siga estos pasos:
                            <ul>
                                <li>Realice un análisis de errores avanzados para identificar los problemas subyacentes.</li>
                                <li>Considere reinstalar el sistema operativo o el software afectado.</li>
                                <li>Si el problema no se soluciona, contacte con soporte de nivel 3 para recibir una solución especializada.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Preguntas;
