import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Main3 = () => {
  return (
    <div className="container-politicas my-5 p-4 bg-dark text-light rounded shadow">
      <h1 className="text-center text-primary mb-4">Políticas de la Empresa Help Desk</h1>

      <section className="mb-4">
        <h2 className="text-info">1. Introducción</h2>
        <p>
          En [Nombre de la Empresa], nos comprometemos a proporcionar soporte técnico de alta calidad a nuestros
          clientes. Estas políticas establecen los lineamientos para garantizar un servicio eficiente, profesional
          y seguro.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-info">2. Política de Soporte Técnico</h2>
        <ul className="list-unstyled">
          <li>
            <strong>Horario de atención:</strong> Nuestro horario de soporte es de lunes a viernes, de 8:00 AM a
            8:00 PM. Fuera de este horario, solo se atenderán emergencias críticas.
          </li>
          <li>
            <strong>Tiempo de respuesta:</strong> Nos esforzamos por responder a las solicitudes de soporte dentro
            de las 2 horas hábiles desde su recepción.
          </li>
          <li>
            <strong>Prioridades:</strong> Las solicitudes se gestionan según su nivel de prioridad:
            <ul>
              <li><strong>Alta:</strong> Problemas críticos que afectan a múltiples usuarios o servicios.</li>
              <li><strong>Media:</strong> Problemas que afectan a un único usuario o una funcionalidad específica.</li>
              <li><strong>Baja:</strong> Consultas generales o solicitudes de mejora.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-info">3. Política de Seguridad</h2>
        <ul className="list-unstyled">
          <li>Todo acceso a los sistemas debe ser autorizado previamente y realizado utilizando credenciales únicas.</li>
          <li>
            Los técnicos no están autorizados a compartir información confidencial de los clientes con terceros bajo
            ninguna circunstancia.
          </li>
          <li>
            Se requiere el uso de conexiones seguras (VPN o HTTPS) para cualquier acceso remoto a los sistemas.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-info">4. Uso de Herramientas y Software</h2>
        <p>
          Los técnicos deben utilizar únicamente herramientas y software aprobados por la empresa para garantizar
          la seguridad y la calidad del servicio. Cualquier instalación de software adicional debe ser autorizada
          por el departamento de TI.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-info">5. Resolución de Conflictos</h2>
        <p>
          En caso de discrepancias entre un técnico y un cliente, se deberá informar al supervisor inmediato.
          La empresa prioriza la comunicación clara y respetuosa en todas las interacciones.
        </p>
      </section>

      <section>
        <h2 className="text-info">6. Revisión y Actualización de Políticas</h2>
        <p>
          Estas políticas serán revisadas y actualizadas periódicamente para garantizar su relevancia y efectividad.
          La última revisión se realizó el [Fecha de la última revisión].
        </p>
      </section>

      <footer className="text-center text-secondary mt-4">
        &copy; {new Date().getFullYear()} [Nombre de la Empresa]. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Main3 ;
