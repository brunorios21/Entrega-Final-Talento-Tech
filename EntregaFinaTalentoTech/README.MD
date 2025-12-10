# PC Tech Store | E-commerce de Hardware High-End

![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-success?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)

Bienvenido al repositorio de **PC Tech Store**, una simulación completa de un e-commerce dedicado a la venta de hardware de alto rendimiento. Este proyecto destaca por su diseño moderno estilo **Glassmorphism** y una lógica de carrito de compras persistente utilizando JavaScript puro (Vanilla JS).

## Características Principales

* **Catálogo Dinámico:** Renderizado de productos desde un array de objetos (simulación de base de datos) o archivo JSON.
* **Carrito de Compras:**
    * Agregar/Eliminar productos.
    * Cálculo automático de totales.
    * Persistencia de datos usando `localStorage` (no pierdes el carrito al recargar).
* **Diseño UI/UX:**
    * Estética **Glassmorphism** (efectos de vidrio y desenfoque).
    * Paleta de colores "Cyberpunk/Neon" (Cyan y Magenta).
    * Diseño totalmente **Responsive** (adaptable a móviles y tablets).
* **Secciones Informativas:**
    * Armador de PC (Configurador lógico).
    * Gestión de Garantías (RMA) con pasos visuales.
    * Paradigmas de programación (Sección educativa).

## 🛠️ Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Estructura del Proyecto

El proyecto sigue una arquitectura limpia y modular:

```text
PC-TECH-STORE/
├── assets/          # Recursos multimedia
│   ├── icons/       # Iconos SVG/PNG
│   └── images/      # Fotos de productos de alta calidad
├── data/            # Datos estáticos
│   └── productos.json  # Base de datos de productos
├── js/              # Lógica del sitio
│   └── script.js       # Funciones del carrito, renderizado y eventos
├── styles/          # Hojas de estilo
│   ├── estilo.css      # Estilos generales y glassmorphism
│   └── paradigmas.css  # Estilos específicos para la sección educativa
├── index.html          # Página principal (Landing + Catálogo)
├── garantias.html      # Sección de RMA y Soporte
├── ayuda.html          # Centro de ayuda
├── terminos.html       # Términos legales
└── README.md           # Documentación del proyecto