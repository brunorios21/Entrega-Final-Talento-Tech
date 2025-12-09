/* =========================================
   BASE DE DATOS - VERSIÓN CORREGIDA (.jpg)
   Rutas de imagen actualizadas según captura de pantalla.
   ========================================= */
const productos = [
  // --- PROCESADORES ---
  {
    id: 1,
    nombre: "Intel Core i9-13900K",
    precio: 650000,
    imagen: "assets/images/i9-13900k.jpg", 
    categoria: "procesador",
    descripcion: "El rey del rendimiento gaming y multitarea. Arquitectura híbrida para un desempeño sin precedentes.",
    specs_detalladas: [
        "Núcleos: 24 (8 Performance + 16 Efficient)",
        "Hilos: 32 Threads",
        "Frecuencia Turbo Máx: 5.80 GHz",
        "Caché: 36 MB Intel Smart Cache",
        "Socket: LGA1700",
        "Gráficos Integrados: Intel UHD 770"
    ]
  },
  {
    id: 2,
    nombre: "AMD Ryzen 9 7950X",
    precio: 620000,
    imagen: "assets/images/ryzen9-7950x.jpg",
    categoria: "procesador",
    descripcion: "Potencia bruta para creadores y gamers. La plataforma AM5 está lista para el futuro.",
    specs_detalladas: [
        "Núcleos: 16",
        "Hilos: 32",
        "Frecuencia Boost: Hasta 5.7 GHz",
        "Caché L3: 64 MB",
        "Socket: AM5",
        "Tecnología: TSMC 5nm FinFET"
    ]
  },
  {
    id: 3,
    nombre: "Intel Core i7-13700K",
    precio: 480000,
    imagen: "assets/images/i7-13700k.jpg",
    categoria: "procesador",
    descripcion: "El equilibrio ideal. Rendimiento de gama alta a un precio competitivo.",
    specs_detalladas: [
        "Núcleos: 16 (8P + 8E)",
        "Hilos: 24",
        "Frecuencia Turbo: 5.40 GHz",
        "Potencia Base: 125W",
        "Socket: LGA1700"
    ]
  },
  // --- TARJETAS GRÁFICAS ---
  {
    id: 4,
    nombre: "NVIDIA RTX 4090 OC",
    precio: 2500000,
    imagen: "assets/images/rtx-4090.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "La GPU definitiva. Juega en 4K Ultra y renderiza escenas complejas en tiempo récord.",
    specs_detalladas: [
        "Memoria: 24 GB GDDR6X",
        "Núcleos CUDA: 16384",
        "Bus de Memoria: 384-bit",
        "DLSS: Versión 3.5 con Frame Gen",
        "Ray Tracing: 3ra Generación"
    ]
  },
  {
    id: 5,
    nombre: "AMD Radeon RX 7900 XTX",
    precio: 1800000,
    imagen: "assets/images/rx-7900-xtx.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "La mejor experiencia de AMD. Arquitectura RDNA 3 para un rendimiento visual asombroso.",
    specs_detalladas: [
        "Memoria: 24 GB GDDR6",
        "Interfaz: 384-bit",
        "Unidades de Cómputo: 96",
        "Infinity Cache: 96 MB",
        "Conectividad: DisplayPort 2.1"
    ]
  },
  {
    id: 6,
    nombre: "NVIDIA RTX 4070 Ti",
    precio: 1100000,
    imagen: "assets/images/rtx-4070ti.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "Rendimiento estelar en 1440p con todas las ventajas de la serie 40.",
    specs_detalladas: [
        "Memoria: 12 GB GDDR6X",
        "Núcleos CUDA: 7680",
        "Bus: 192-bit",
        "Consumo: Altamente eficiente",
        "Soporte: DLSS 3"
    ]
  },
  // --- MOTHERBOARDS ---
  {
    id: 7,
    nombre: "ASUS ROG Maximus Z790",
    precio: 850000,
    imagen: "assets/images/rog-z790.jpg",
    categoria: "motherboard",
    descripcion: "Placa base premium diseñada para overclocking extremo y máxima conectividad.",
    specs_detalladas: [
        "Chipset: Intel Z790",
        "Memoria: DDR5 Dual Channel",
        "Fases de Poder: 24+1",
        "Red: WiFi 6E + Ethernet 10Gb",
        "PCIe: 5.0 x16 Slot"
    ]
  },
  {
    id: 8,
    nombre: "MSI MPG X670E Carbon",
    precio: 680000,
    imagen: "assets/images/msi-x670e.jpg",
    categoria: "motherboard",
    descripcion: "Estilo Carbon con iluminación RGB Mystic Light y soporte total para Ryzen 7000.",
    specs_detalladas: [
        "Socket: AM5",
        "Formato: ATX",
        "Almacenamiento: 4x M.2 Slots",
        "PCIe Gen 5: Ready",
        "Audio: Audio Boost 5"
    ]
  },
  {
    id: 9,
    nombre: "Gigabyte B650 Aorus Elite",
    precio: 350000,
    imagen: "assets/images/aorus-b650.jpg",
    categoria: "motherboard",
    descripcion: "Rendimiento sólido y durabilidad AORUS para tu build Ryzen.",
    specs_detalladas: [
        "Socket: AM5",
        "VRM: Diseño Digital 14+2+1",
        "Térmico: M.2 Thermal Guard",
        "Conectividad: 2.5GbE LAN",
        "Q-Flash Plus: Actualiza BIOS sin CPU"
    ]
  },
  // --- MEMORIAS ---
  {
    id: 10,
    nombre: "Corsair Dominator Platinum",
    precio: 280000,
    imagen: "assets/images/corsair-dominator.jpg",
    categoria: "memoria",
    descripcion: "La memoria más avanzada del mundo con iluminación CAPELLIX RGB.",
    specs_detalladas: [
        "Capacidad: 64GB (2x32GB)",
        "Tipo: DDR5",
        "Velocidad: 6000 MHz",
        "Latencia: CL36",
        "Perfil: XMP 3.0 Ready"
    ]
  },
  {
    id: 11,
    nombre: "G.Skill Trident Z5 Neo",
    precio: 210000,
    imagen: "assets/images/trident-z5.jpg",
    categoria: "memoria",
    descripcion: "Diseñada específicamente para maximizar el rendimiento en plataformas AMD.",
    specs_detalladas: [
        "Capacidad: 32GB (2x16GB)",
        "Tipo: DDR5",
        "Velocidad: 6000 MHz",
        "Tecnología: AMD EXPO",
        "Disipador: Aluminio cepillado"
    ]
  },
  {
    id: 12,
    nombre: "Kingston Fury Beast",
    precio: 150000,
    // RUTA CORREGIDA SEGÚN CAPTURA:
    imagen: "assets/images/Kingston Fury Beast.jpg", 
    categoria: "memoria",
    descripcion: "Rendimiento plug N play. La opción confiable para saltar a DDR5.",
    specs_detalladas: [
        "Capacidad: 16GB (2x8GB)",
        "Velocidad: 5200 MHz",
        "Diseño: Low Profile",
        "Compatibilidad: Intel XMP Certificado"
    ]
  },
  // --- ALMACENAMIENTO ---
  {
    id: 13,
    nombre: "Samsung 990 PRO 2TB",
    precio: 220000,
    imagen: "assets/images/samsung-990pro.jpg",
    categoria: "almacenamiento",
    descripcion: "Alcanza el rendimiento máximo de PCIe 4.0. Velocidad vertiginosa.",
    specs_detalladas: [
        "Capacidad: 2 TB",
        "Velocidad Lectura: 7450 MB/s",
        "Velocidad Escritura: 6900 MB/s",
        "Tecnología: V-NAND 3-bit MLC",
        "Durabilidad: 1200 TBW"
    ]
  },
  {
    id: 14,
    nombre: "WD Black SN850X 1TB",
    precio: 140000,
    imagen: "assets/images/wd-black-sn850x.jpg",
    categoria: "almacenamiento",
    descripcion: "Diseñado para gaming. Reduce tiempos de carga y stuttering.",
    specs_detalladas: [
        "Capacidad: 1 TB",
        "Velocidad Lectura: 7300 MB/s",
        "Game Mode 2.0: Sí",
        "Interfaz: PCIe Gen4 x4"
    ]
  },
  {
    id: 15,
    nombre: "Kingston NV2 1TB",
    precio: 75000,
    // RUTA CORREGIDA SEGÚN CAPTURA:
    imagen: "assets/images/Kingston NV2 1TB.jpg",
    categoria: "almacenamiento",
    descripcion: "Solución de almacenamiento sustancial de próxima generación.",
    specs_detalladas: [
        "Capacidad: 1 TB",
        "Velocidad Lectura: 3500 MB/s",
        "Velocidad Escritura: 2100 MB/s",
        "Formato: M.2 2280"
    ]
  },
  // --- GABINETES ---
  {
    id: 16,
    nombre: "NZXT H9 Elite",
    precio: 320000,
    imagen: "assets/images/nzxt-h9.jpg",
    categoria: "gabinete",
    descripcion: "Muestra tu build con estilo. Diseño de doble cámara y cristal continuo.",
    specs_detalladas: [
        "Formato: Mid-Tower",
        "Material: Acero SGCC y Vidrio Templado",
        "Ventiladores: 3x F120 RGB Duo incluidos",
        "Gestión de cables: Canales dedicados",
        "Soporte Radiador: Hasta 360mm"
    ]
  },
  {
    id: 17,
    nombre: "Corsair 5000D Airflow",
    precio: 210000,
    imagen: "assets/images/corsair-5000d.jpg",
    categoria: "gabinete",
    descripcion: "Panel frontal de rejilla optimizado para un flujo de aire masivo.",
    specs_detalladas: [
        "Formato: ATX Mid-Tower",
        "Sistema RapidRoute: Sí",
        "Ventiladores: 2x Corsair AirGuide",
        "Panel Lateral: Vidrio Templado",
        "Color: Negro Mate"
    ]
  },
  // --- FUENTES ---
  {
    id: 18,
    nombre: "ASUS ROG Thor 1000W",
    precio: 450000,
    // RUTA CORREGIDA SEGÚN CAPTURA:
    imagen: "assets/images/ASUS ROG Thor 1000W.jpg",
    categoria: "fuente",
    descripcion: "La fuente de poder más silenciosa de su clase con pantalla OLED integrada.",
    specs_detalladas: [
        "Potencia: 1000 Watts",
        "Certificación: 80 Plus Platinum",
        "Pantalla: OLED Power Display",
        "Refrigeración: Disipadores ROG",
        "Modular: Full Modular"
    ]
  },
  {
    id: 19,
    nombre: "Corsair RM850x",
    precio: 190000,
    // RUTA CORREGIDA SEGÚN CAPTURA:
    imagen: "assets/images/Corsair RM850x.jpg",
    categoria: "fuente",
    descripcion: "Energía eficiente y operación extremadamente silenciosa.",
    specs_detalladas: [
        "Potencia: 850 Watts",
        "Certificación: 80 Plus Gold",
        "Ventilador: Levitation magnética",
        "Modo Zero RPM: Sí",
        "Capacitores: 100% Japoneses"
    ]
  }
];

// VARIABLES DE ESTADO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let seleccionArmador = []; 

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema iniciado...");
    renderizarCatalogoPorCategorias();
    actualizarContador();
    verificarUsuario();
    renderizarCarrito();
});

/* =========================================
   LÓGICA DEL CATÁLOGO POR CATEGORÍAS
   ========================================= */
function renderizarCatalogoPorCategorias() {
    const contenedorPrincipal = document.getElementById('catalogoContainer');
    if(!contenedorPrincipal) return;
    
    contenedorPrincipal.innerHTML = '';

    // 1. Obtener categorías únicas
    const categorias = [...new Set(productos.map(p => p.categoria))];

    // 2. Iterar por cada categoría y crear su sección
    categorias.forEach(cat => {
        // Crear título de categoría
        const separador = document.createElement('div');
        separador.className = 'category-separator';
        separador.innerHTML = `
            <h3>${cat.toUpperCase()}</h3>
            <div style="flex:1; height:1px; background: linear-gradient(90deg, var(--secondary), transparent);"></div>
        `;
        contenedorPrincipal.appendChild(separador);

        // Crear grid para esta categoría
        const grid = document.createElement('div');
        grid.className = 'grid-productos';

        // Filtrar productos de esta categoría
        const productosDeCategoria = productos.filter(p => p.categoria === cat);

        productosDeCategoria.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card-glass';
            
            // NOTA: El onclick en la imagen abre el modal de detalle
            card.innerHTML = `
                <div class="card-image-container" onclick="abrirDetalleProducto(${prod.id})" title="Ver ficha técnica">
                    <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/300x300?text=Sin+Imagen'">
                </div>
                <div class="card-content">
                    <h3>${prod.nombre}</h3>
                    <div class="card-footer">
                        <div class="price-box">$${prod.precio.toLocaleString()}</div>
                        <button class="btn-add" onclick="agregarAlCarrito(${prod.id})">AGREGAR</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        contenedorPrincipal.appendChild(grid);
    });
}

/* =========================================
   DETALLE DE PRODUCTO (MODAL)
   ========================================= */
function abrirDetalleProducto(id) {
    const prod = productos.find(p => p.id === id);
    if(!prod) return;

    const modal = document.getElementById('productoModal');
    const contenido = document.getElementById('detalleProductoContenido');

    // Generar lista de specs HTML
    let specsHTML = '';
    if(prod.specs_detalladas && prod.specs_detalladas.length > 0) {
        specsHTML = '<ul class="detalle-specs-list">';
        prod.specs_detalladas.forEach(spec => {
            specsHTML += `<li>${spec}</li>`;
        });
        specsHTML += '</ul>';
    } else {
        specsHTML = '<p style="color:#888;">Especificaciones no disponibles.</p>';
    }

    // Inyectar HTML en el modal
    contenido.innerHTML = `
        <div class="detalle-img-container">
             <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/400?text=Sin+Imagen'">
        </div>
        <div class="detalle-info-container">
            <span class="detalle-categoria">${prod.categoria}</span>
            <h2 class="detalle-titulo">${prod.nombre}</h2>
            <p class="detalle-descripcion">${prod.descripcion || 'Sin descripción detallada.'}</p>
            
            <div class="detalle-specs-title">Especificaciones Técnicas</div>
            ${specsHTML}
            
            <div style="margin-top:auto;">
                <div class="detalle-precio">$${prod.precio.toLocaleString()}</div>
                <button class="btn-add full" onclick="agregarAlCarrito(${prod.id}); cerrarModal('productoModal')">
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    `;

    abrirModal('productoModal');
}

/* =========================================
   LÓGICA DEL ARMADOR
   ========================================= */
function abrirConfigurador(categoria) {
    const contenedor = document.getElementById('categoriaProductos');
    const titulo = document.getElementById('categoriaTitulo');
    
    abrirModal('categoriaModal');
    titulo.innerText = `Elegir ${categoria}`;
    contenedor.innerHTML = '';

    const filtrados = productos.filter(p => p.categoria === categoria);

    if(filtrados.length === 0) {
        contenedor.innerHTML = `<p style="color:white; grid-column:1/-1; text-align:center;">No hay stock disponible para esta categoría.</p>`;
    } else {
        filtrados.forEach(prod => {
            const div = document.createElement('div');
            div.className = 'producto-config-item';
            div.onclick = () => seleccionarComponenteArmador(prod.id); 
            
            div.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/100?text=IMG'">
                <h4>${prod.nombre}</h4>
                <p style="color:var(--secondary); font-weight:bold;">$${prod.precio.toLocaleString()}</p>
            `;
            contenedor.appendChild(div);
        });
    }
}

function seleccionarComponenteArmador(id) {
    const prod = productos.find(p => p.id === id);
    if(prod) {
        seleccionArmador.push(prod);
        actualizarResumenArmador();
        cerrarModal('categoriaModal'); 
    }
}

function actualizarResumenArmador() {
    const listaDiv = document.getElementById('listaComponentes');
    const totalSpan = document.getElementById('totalPresupuesto');
    
    if(!listaDiv) return;

    listaDiv.innerHTML = '';
    let total = 0;

    if(seleccionArmador.length === 0) {
        listaDiv.innerHTML = '<p style="text-align:center; color:#888; margin-top:10px;">Selecciona componentes.</p>';
    } else {
        seleccionArmador.forEach((prod) => {
            total += prod.precio;
            const row = document.createElement('div');
            row.className = 'item-seleccionado';
            row.innerHTML = `
                <span>${prod.nombre}</span>
                <span>$${prod.precio.toLocaleString()}</span>
            `;
            listaDiv.appendChild(row);
        });
    }
    
    if(totalSpan) totalSpan.innerText = `$${total.toLocaleString()}`;
}

function limpiarArmador() {
    seleccionArmador = [];
    actualizarResumenArmador();
}

function agregarPresupuestoAlCarrito() {
    if(seleccionArmador.length === 0) {
        alert("Primero selecciona componentes.");
        return;
    }
    seleccionArmador.forEach(p => carrito.push(p));
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito(); 
    limpiarArmador();
    alert("¡Componentes agregados al carrito correctamente!");
    irA('carrito');
}

/* =========================================
   LÓGICA DEL CARRITO Y PAGO
   ========================================= */
function agregarAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    if(prod) {
        carrito.push(prod);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContador();
        renderizarCarrito();
        // Feedback visual simple
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "¡LISTO!";
        setTimeout(() => btn.innerText = originalText, 1000);
    }
}

function renderizarCarrito() {
    const contenedor = document.getElementById('carritoItems');
    const totalSpan = document.getElementById('totalCarrito');
    if(!contenedor) return;

    contenedor.innerHTML = '';
    let total = 0;

    if(carrito.length === 0) {
         contenedor.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">Tu carrito está vacío.</p>';
    } else {
        carrito.forEach((prod, index) => {
            total += prod.precio;
            const item = document.createElement('div');
            item.className = 'cart-item-pro';
            item.innerHTML = `
                <div class="cart-info">
                    <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/50?text=IMG'">
                    <span>${prod.nombre}</span>
                </div>
                <div class="cart-price">$${prod.precio.toLocaleString()}</div>
                <div style="text-align:right;">
                    <button onclick="eliminarDelCarrito(${index})" class="btn-delete" title="Eliminar">🗑️</button>
                </div>
            `;
            contenedor.appendChild(item);
        });
    }

    if(totalSpan) totalSpan.innerText = `$${total.toLocaleString()}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarContador();
    renderizarCarrito();
}

function actualizarContador() {
    const el = document.getElementById('carritoContador');
    if(el) el.innerText = carrito.length;
}

// Función para abrir el modal de pago
function finalizarCompra() {
    if(carrito.length === 0) return alert("El carrito está vacío. Agrega productos antes de pagar.");
    abrirModal('checkoutModal');
}

// Función para confirmar el pago
function confirmarPago() {
    cerrarModal('checkoutModal');
    alert("¡Muchas gracias por tu compra! Hemos registrado tu pedido. Enviaremos el comprobante a tu email.");
    vaciarCarrito(); 
}

/* =========================================
   UTILIDADES Y MODALES
   ========================================= */
function irA(id) {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}

function cerrarModal(id) { 
    const modal = document.getElementById(id);
    if(modal) modal.style.display = 'none'; 
}

function abrirModal(id) { 
    const modal = document.getElementById(id);
    if(modal) modal.style.display = 'flex'; 
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-backdrop')) {
        event.target.style.display = "none";
    }
}

function login(email) {
    if(email) {
        localStorage.setItem('usuario', email);
        verificarUsuario();
        cerrarModal('loginModal');
    }
}

function verificarUsuario() {
    const user = localStorage.getItem('usuario');
    const area = document.getElementById('userInfo');
    const btn = document.getElementById('btnLoginBtn');
    const display = document.getElementById('userNameDisplay');
    
    if(user && area) {
        btn.style.display = 'none';
        area.style.display = 'flex';
        display.innerText = user.split('@')[0];
    } else if(area) {
        btn.style.display = 'block';
        area.style.display = 'none';
    }
}

function salir() {
    localStorage.removeItem('usuario');
    verificarUsuario();
}