# Frontend del Proyecto CUDI UTN

Este proyecto es el frontend de una aplicación que complementa el backend de la gestión de usuarios, productos y carritos de compras. Está construido con **React** y utiliza librerías modernas para una experiencia de usuario fluida e intuitiva.

---

### Funcionalidades

El frontend incluye las siguientes páginas y funcionalidades:

1. **Inicio**:
   - Página principal con información destacada.

2. **Nosotros**:
   - Información sobre la organización.

3. **Políticas**:
   - Detalles sobre las políticas de la empresa.

4. **Productos**:
   - Visualización de productos disponibles.

5. **Login**:
   - Página para iniciar sesión en la aplicación.

6. **Registro**:
   - Formulario para crear una nueva cuenta.

7. **Producto Muestra**:
   - Página de detalles de un producto.

8. **Términos y Condiciones**:
   - Información legal sobre el uso del sitio.

9. **Contacto**:
   - Formulario para enviar mensajes o consultas.

10. **Preguntas Frecuentes**:
    - Respuestas a preguntas comunes de los usuarios.

11. **Mapa**:
    - Página con la ubicación geográfica de la empresa.

12. **Servicios**:
    - Información sobre los servicios ofrecidos.

---

### Tecnologías Utilizadas

El frontend utiliza las siguientes tecnologías y herramientas:

- **React**: Framework principal para la creación de la interfaz.
- **React Router DOM**: Para la navegación entre páginas.
- **Bootstrap**: Framework de CSS para un diseño responsive.
- **React Bootstrap**: Componentes de Bootstrap adaptados para React.
- **React Icons**: Iconos para enriquecer la interfaz de usuario.
- **HTML5**: Estructura del contenido.
- **CSS3**: Estilos personalizados para cada página.
- **JavaScript**: Lógica del frontend.

---

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JulioArturoRodriguez/www.backend-cudi-utn-proyect-julio-rodriguez.git

# Estructura del Proyecto Frontend

Este es el esquema de directorios y archivos del proyecto frontend. Está diseñado para ser modular y escalable, facilitando la organización del código.

```plaintext
/project-root
├── /public
│   └── index.html                  # Punto de entrada del proyecto
│
├── /src
│   ├── /assets                     # Recursos estáticos (imágenes, íconos, etc.)
│   ├── /inicio                     # Página de inicio
│   ├── /contacto                   # Página de contacto
│   │   ├── contacto.css            # Estilos de la página de contacto
│   │   └── contacto.jsx            # Componente de la página de contacto
│   ├── /hacerca-de-nosotros        # Página "Nosotros"
│   │   ├── Main2.css               # Estilos de la página
│   │   └── Main2.jsx               # Componente de la página
│   ├── /maqueta-inicial            # Componentes de la maqueta inicial
│   │   ├── Footer.jsx              # Componente del pie de página
│   │   ├── Header.css              # Estilos del encabezado
│   │   ├── Header.jsx              # Componente del encabezado
│   │   ├── Main.css                # Estilos generales
│   │   └── Main.jsx                # Componente principal
│   ├── /politicas                  # Página de políticas
│   │   ├── Main.css                # Estilos
│   │   └── main.jsx                # Componente
│   ├── /preguntas-frecuentes       # Página de preguntas frecuentes
│   │   ├── preguntas.css           # Estilos
│   │   └── preguntas.jsx           # Componente
│   ├── /productos                  # Página de productos
│   │   ├── main4.css               # Estilos
│   │   └── Main4.jsx               # Componente
│   ├── /productos-muestra          # Página de detalles de productos
│   │   ├── producto.jsx            # Componente del producto
│   │   └── productoMuestra.css     # Estilos
│   ├── /servicios                  # Página de servicios
│   │   ├── servicios.css           # Estilos
│   │   └── servicios.jsx           # Componente
│   ├── /terminos-y-condiciones     # Página de términos y condiciones
│   │   ├── terminos.jsx            # Componente
│   │   └── TermsAndConditions.css  # Estilos
│   ├── /ubicacion                  # Página de ubicación
│   │   ├── ubicacion.css           # Estilos
│   │   └── ubicacion.jsx           # Componente
│   ├── /usuarios                   # Páginas de login y registro
│   │   ├── login.css               # Estilos de login
│   │   ├── login.jsx               # Componente de login
│   │   ├── registro.css            # Estilos de registro
│   │   └── registro.jsx            # Componente de registro
│   ├── Inicio.jsx                  # Página de inicio
│   ├── main.jsx                    # Archivo principal
│   └── Rutas.jsx                   # Configuración de rutas
│
├── .env                            # Variables de entorno
├── .gitignore                      # Archivos ignorados por Git
├── eslint.config.js                # Configuración de ESLint
├── index.html                      # Archivo HTML principal
├── package-lock.json               # Bloqueo de dependencias
├── package.json                    # Configuración de npm
├── README.md                       # Documentación del proyecto
└── vite.config.js                  # Configuración de Vite


#INTEGRANTES
##JULIO ARTURO RODRIGUEZ
