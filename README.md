# PC Tech Store — Proyecto Frontend

Este repositorio contiene un proyecto de maqueta de tienda de hardware llamada "PC Tech Store". El objetivo del proyecto es practicar la construcción de una interfaz web estática que simula un catálogo de productos, un armador de PC y un carrito de compras con persistencia simple en `localStorage`.

Este README está escrito en un tono de estudiante y documenta la estructura, las fuentes de código y las instrucciones para ejecutar y personalizar el proyecto. Está pensado para mostrarse correctamente en la vista principal de un repositorio GitHub.

<!-- Badges / Botones de lenguajes -->

[![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)](./index.html) [![CSS](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white)](styles/estilo.css) [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](js/script.js)

**Enlace directo al proyecto (archivo principal):** [Abrir `index.html` en repositorio](./index.html)


---

## Tabla de contenido

- **Descripción**: Resumen del propósito del proyecto.
- **Estructura**: Lista de archivos y carpetas principales.
- **Tecnologías**: Herramientas y librerías usadas.
- **Cómo ejecutar**: Instrucciones para correr localmente.
- **Fuentes**: Archivos donde se utiliza el código (referencias internas).
- **Personalización visual para GitHub**: Recomendaciones para que el README aparezca bien en el repo.
- **Contribuir**: Reglas básicas para colaborar.
- **Licencia**: Indicación del archivo de licencia incluido.

---

## Descripción

Proyecto de práctica que simula una tienda de hardware con las siguientes funcionalidades principales:

- Catálogo de productos mostrado por categorías.
- Modal de detalle con ficha técnica de cada producto.
- Armador de PC (selección de componentes y cálculo de total).
- Carrito de compras con persistencia en `localStorage`.
- Modales para login simple y finalización de compra (simulada).

El objetivo es mostrar capacidades de HTML/CSS/JavaScript para crear una UI interactiva sin backend real.

---

## Estructura del proyecto

Listado de archivos y carpetas más relevantes en la raíz del repositorio:

- `index.html` : Página principal con catálogo, armador y carrito.
- `ayuda.html`, `defensa.html`, `garantias.html`, `paradigmas.html`, `privacidad.html`, `seguimiento.html`, `terminos.html` : Páginas informativas / legales.
- `assets/` : Carpeta con `images/` y `icons/` (recursos visuales usados por las vistas).
- `data/productos.json` : JSON con listado y especificaciones de productos (ejemplo de datos).
- `js/script.js` : Lógica principal en JavaScript (catálogo, carrito, armador, modales y persistencia local).
- `styles/estilo.css` : Estilos globales y diseño principal del sitio.
- `styles/paradigmas.css` : Estilos adicionales (posible hoja específica para la página `paradigmas.html`).
- `LICENSE` : Archivo de licencia adjunto al repo.

---

## Tecnologías

- HTML5
- CSS3 (variables CSS y media queries)
- JavaScript (ES5/ES6, DOM API)
- `localStorage` para persistencia en el navegador

No hay dependencias externas instaladas (es un proyecto estático). Se usa la fuente desde Google Fonts (`Outfit`) declarada en `index.html`.

---

## Cómo ejecutar localmente

El proyecto es estático. Opciones recomendadas para ver el sitio localmente:

- Abrir `index.html` directamente en el navegador (doble clic): funciona en la mayoría de casos.
- Usar un servidor HTTP simple (recomendado para evitar problemas con rutas relativas o CORS). En PowerShell:

```powershell
# Desde la raíz del proyecto
cd "c:\Users\bruns\OneDrive\Desktop\Entrega-Final-Talento-Tech-main\Entrega-Final-Talento-Tech-main"
python -m http.server 5500
# Luego abrir http://localhost:5500 en el navegador
```

- Usar la extensión Live Server de Visual Studio Code: clic derecho en `index.html` -> "Open with Live Server".

Notas:

- No se requiere instalación de paquetes adicionales.
- Si las imágenes no se cargan, el código contempla un `onerror` que muestra un placeholder remoto.

---

## Descargar el proyecto

Aquí explico varias formas prácticas y claras para descargar la carpeta del proyecto según el entorno:

- Descargar ZIP desde GitHub (interfaz web):

	1. Ir al repositorio en GitHub.
	2. Pulsar el botón `Code` (verde) y elegir `Download ZIP`.
	3. Descomprimir el ZIP en tu equipo y abrir `index.html` o servirlo con un servidor local.

- Clonar con `git` (recomendado si piensas contribuir):

```powershell
git clone https://github.com/USUARIO/REPO.git
cd REPO
```

Reemplazá `https://github.com/USUARIO/REPO.git` por la URL real del repo.

- Descargar desde línea de comandos (si existe `wget`/`curl`) — alternativa:

```powershell
# Ejemplo con curl para descargar un ZIP público desde GitHub (reemplazar URL)
curl -L -o proyecto.zip "https://github.com/USUARIO/REPO/archive/refs/heads/main.zip"
Expand-Archive .\proyecto.zip -DestinationPath .\proyecto
```

- Comprimir o empaquetar la carpeta local con PowerShell (si querés crear un ZIP desde tu copia local):

```powershell
# Desde el directorio que contiene la carpeta del proyecto
Compress-Archive -Path .\Entrega-Final-Talento-Tech-main -DestinationPath .\Entrega-Final-Talento-Tech-main.zip -Force
# Para extraer
Expand-Archive .\Entrega-Final-Talento-Tech-main.zip -DestinationPath .\Salida
```

Notas:

- GitHub no sirve archivos HTML como sitio público salvo que actives GitHub Pages; si querés que `index.html` se abra como página web desde GitHub necesitas configurar GitHub Pages en la rama `main` o `gh-pages`.
- Para pruebas locales recomiendo usar `python -m http.server` o la extensión Live Server.

---

## Fuentes (dónde se usa el código o los recursos)

Aquí se listan los archivos y la función principal que cumplen dentro del proyecto:

- `index.html` : Estructura base del sitio, nav, hero, secciones de `catalogo`, `arma-tu-pc`, `carrito`, modales y carga de `js/script.js` y `styles/estilo.css`.
- `ayuda.html`, `defensa.html`, `garantias.html`, `paradigmas.html`, `privacidad.html`, `seguimiento.html`, `terminos.html` : Páginas informativas enlazadas desde el footer y nav.
- `js/script.js` : Contiene la lista de `productos` (dataset en memoria), funciones para renderizar el catálogo y los modales, manejo del armador, carrito, persistencia (`localStorage`) y notificaciones. (puntos clave: `mostrarCatalogo()`, `abrirDetalleProducto()`, `agregarAlCarrito()`, `guardarCarrito()`, `mostrarCarrito()`).
- `data/productos.json` : Archivo JSON con la representación de los productos (puede usarse para alimentar `script.js` en lugar de declarar `productos` en el propio `script.js`).
- `styles/estilo.css` : Variables CSS (`:root`), layout principal, componentes (cards, modales, grids) y media queries.
- `styles/paradigmas.css` : Estilos específicos para la página `paradigmas.html`.
- `assets/images/` : Imágenes de los productos referenciadas por `index.html` y `script.js`.

Si quieres migrar la carga de `productos` a una llamada fetch desde `data/productos.json`, puedo ayudarte a modificar `js/script.js` para leer ese archivo JSON dinámicamente.

---

## Personalización visual para GitHub

Consejos para que el README se vea atractivo en GitHub:

- Añadir una captura de pantalla `assets/images/preview.png` y referenciarla al inicio del README con `![Preview](assets/images/preview.png)` para que GitHub muestre la imagen.
- Incluir badges (estado, licencia) en la cabecera. Ejemplo:

```markdown
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
```

- Crear un pequeño GIF o PNG que muestre el armador funcionando y añadirlo como `docs/demo.gif` o en `assets/images/`.
- Usar secciones claras y una tabla de contenido (ya incluida) para navegación rápida.

Estructura visual recomendada en GitHub: título grande, badges, una imagen de preview, resumen, y luego detalles técnicos. El archivo `README.md` que generé ya sigue este orden.

---

## Notas de implementación y recomendaciones (estudiante)

- El archivo `js/script.js` declara un array `productos` dentro del propio script y también existe `data/productos.json`. Para mantener una fuente única de verdad, recomiendo usar `fetch('data/productos.json')` y luego renderizar los productos, así evitarás duplicados de datos.
- Validaciones mínimas: la aplicación asume imágenes y datos correctos; es recomendable añadir comprobaciones al leer datos externos.
- Para producción real se debería reemplazar `localStorage` por un backend y añadir manejo de usuarios autenticados y validación de stock.

---

## Contribuir

Si querés contribuir, sugerencias básicas:

1. Forkear el repo.
2. Crear una branch descriptiva (`feature/armador-fetch`, `fix/carrito-persistencia`).
3. Hacer commits pequeños y descriptivos.
4. Abrir un Pull Request explicando los cambios y el motivo.

Si proponés cambios grandes (por ejemplo integrar un build tool o migrar a un framework), abrir un issue antes para discutir el alcance.

---

## Licencia

Revisar el archivo `LICENSE` incluido en la raíz del proyecto.



