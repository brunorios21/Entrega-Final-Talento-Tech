/* =========================================
   BASE DE DATOS DE PRODUCTOS
   ========================================= */
const productos = [
  // --- PROCESADORES ---
  {
    id: 1,
    nombre: "Intel Core i9-13900K",
    precio: 650000,
    imagen: "assets/images/i9-13900k.jpg", 
    categoria: "procesador",
    descripcion: "El rey del rendimiento gaming y multitarea.",
    specs_detalladas: ["Núcleos: 24", "Hilos: 32", "5.80 GHz", "Socket: LGA1700"]
  },
  {
    id: 2,
    nombre: "AMD Ryzen 9 7950X",
    precio: 620000,
    imagen: "assets/images/ryzen9-7950x.jpg",
    categoria: "procesador",
    descripcion: "Potencia bruta para creadores y gamers.",
    specs_detalladas: ["Núcleos: 16", "Hilos: 32", "Socket: AM5"]
  },
  {
    id: 3,
    nombre: "Intel Core i7-13700K",
    precio: 480000,
    imagen: "assets/images/i7-13700k.jpg",
    categoria: "procesador",
    descripcion: "Equilibrio ideal rendimiento/precio.",
    specs_detalladas: ["Núcleos: 16", "Hilos: 24", "Socket: LGA1700"]
  },
  // --- TARJETAS GRÁFICAS ---
  {
    id: 4,
    nombre: "NVIDIA RTX 4090 OC",
    precio: 2500000,
    imagen: "assets/images/rtx-4090.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "La GPU definitiva para 4K.",
    specs_detalladas: ["VRAM: 24GB", "CUDA: 16384", "DLSS 3.5"]
  },
  {
    id: 5,
    nombre: "AMD Radeon RX 7900 XTX",
    precio: 1800000,
    imagen: "assets/images/rx-7900-xtx.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "La mejor experiencia de AMD.",
    specs_detalladas: ["VRAM: 24GB", "RDNA 3", "DisplayPort 2.1"]
  },
  {
    id: 6,
    nombre: "NVIDIA RTX 4070 Ti",
    precio: 1100000,
    imagen: "assets/images/rtx-4070ti.jpg",
    categoria: "tarjetaGrafica",
    descripcion: "Rendimiento estelar en 1440p.",
    specs_detalladas: ["VRAM: 12GB", "DLSS 3", "Eficiencia alta"]
  },
  // --- MOTHERBOARDS ---
  {
    id: 7,
    nombre: "ASUS ROG Maximus Z790",
    precio: 850000,
    imagen: "assets/images/rog-z790.jpg",
    categoria: "motherboard",
    descripcion: "Placa base premium para overclocking.",
    specs_detalladas: ["Chipset Z790", "DDR5", "WiFi 6E"]
  },
  {
    id: 8,
    nombre: "MSI MPG X670E Carbon",
    precio: 680000,
    imagen: "assets/images/msi-x670e.jpg",
    categoria: "motherboard",
    descripcion: "Estilo Carbon con RGB Mystic Light.",
    specs_detalladas: ["Socket AM5", "PCIe 5.0", "4x M.2"]
  },
  {
    id: 9,
    nombre: "Gigabyte B650 Aorus",
    precio: 350000,
    imagen: "assets/images/aorus-b650.jpg",
    categoria: "motherboard",
    descripcion: "Rendimiento sólido AORUS.",
    specs_detalladas: ["Socket AM5", "DDR5", "2.5GbE LAN"]
  },
  // --- MEMORIAS ---
  {
    id: 10,
    nombre: "Corsair Dominator Plat",
    precio: 280000,
    imagen: "assets/images/corsair-dominator.jpg",
    categoria: "memoria",
    descripcion: "Memoria avanzada con RGB.",
    specs_detalladas: ["64GB (2x32)", "DDR5", "6000 MHz"]
  },
  {
    id: 11,
    nombre: "G.Skill Trident Z5 Neo",
    precio: 210000,
    imagen: "assets/images/trident-z5.jpg",
    categoria: "memoria",
    descripcion: "Optimizada para AMD.",
    specs_detalladas: ["32GB (2x16)", "DDR5", "AMD EXPO"]
  },
  {
    id: 12,
    nombre: "Kingston Fury Beast",
    precio: 150000,
    imagen: "assets/images/Kingston Fury Beast.jpg",
    categoria: "memoria",
    descripcion: "Opción confiable plug N play.",
    specs_detalladas: ["16GB (2x8)", "5200 MHz", "Intel XMP"]
  },
  // --- ALMACENAMIENTO ---
  {
    id: 13,
    nombre: "Samsung 990 PRO 2TB",
    precio: 220000,
    imagen: "assets/images/samsung-990pro.jpg",
    categoria: "almacenamiento",
    descripcion: "Máxima velocidad PCIe 4.0.",
    specs_detalladas: ["2TB", "7450 MB/s Lectura", "V-NAND"]
  },
  {
    id: 14,
    nombre: "WD Black SN850X 1TB",
    precio: 140000,
    imagen: "assets/images/wd-black-sn850x.jpg",
    categoria: "almacenamiento",
    descripcion: "Diseñado para gaming.",
    specs_detalladas: ["1TB", "7300 MB/s", "Game Mode"]
  },
  {
    id: 15,
    nombre: "Kingston NV2 1TB",
    precio: 75000,
    imagen: "assets/images/Kingston NV2 1TB.jpg",
    categoria: "almacenamiento",
    descripcion: "Almacenamiento económico Gen4.",
    specs_detalladas: ["1TB", "3500 MB/s", "M.2 2280"]
  },
  // --- GABINETES ---
  {
    id: 16,
    nombre: "NZXT H9 Elite",
    precio: 320000,
    imagen: "assets/images/nzxt-h9.jpg",
    categoria: "gabinete",
    descripcion: "Diseño de doble cámara y cristal.",
    specs_detalladas: ["Mid-Tower", "Vidrio Templado", "3 Fans RGB"]
  },
  {
    id: 17,
    nombre: "Corsair 5000D Airflow",
    precio: 210000,
    imagen: "assets/images/corsair-5000d.jpg",
    categoria: "gabinete",
    descripcion: "Flujo de aire masivo.",
    specs_detalladas: ["ATX Mid-Tower", "Panel Rejilla", "Gestión cables"]
  },
  // --- FUENTES ---
  {
    id: 18,
    nombre: "ASUS ROG Thor 1000W",
    precio: 450000,
    imagen: "assets/images/ASUS ROG Thor 1000W.jpg",
    categoria: "fuente",
    descripcion: "Fuente silenciosa con OLED.",
    specs_detalladas: ["1000W", "80 Plus Platinum", "Full Modular"]
  },
  {
    id: 19,
    nombre: "Corsair RM850x",
    precio: 190000,
    imagen: "assets/images/Corsair RM850x.jpg",
    categoria: "fuente",
    descripcion: "Eficiencia Gold confiable.",
    specs_detalladas: ["850W", "80 Plus Gold", "Modo Zero RPM"]
  }
];

// Variables globales
var carrito = [];
// Intento cargar del localStorage si existe
var carritoGuardado = localStorage.getItem('carrito');
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}

var seleccionArmador = [];

// Cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("Cargando sistema...");
    mostrarCatalogo();
    actualizarContador();
    verificarUsuario();
    mostrarCarrito();
});

/* =========================================
   FUNCIONES DEL CATÁLOGO
   ========================================= */
function mostrarCatalogo() {
    var contenedor = document.getElementById('catalogoContainer');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    // Defino las categorías manualmente
    var categorias = ["procesador", "motherboard", "memoria", "tarjetaGrafica", "almacenamiento", "gabinete", "fuente"];

    // Recorro cada categoría
    for (var i = 0; i < categorias.length; i++) {
        var cat = categorias[i];

        // Creo el título visual
        var divTitulo = document.createElement('div');
        divTitulo.className = 'category-separator';
        divTitulo.innerHTML = '<h3>' + cat.toUpperCase() + '</h3>' +
                              '<div style="flex:1; height:1px; background: linear-gradient(90deg, var(--secondary), transparent);"></div>';
        contenedor.appendChild(divTitulo);

        // Creo el contenedor de los productos (grid)
        var grid = document.createElement('div');
        grid.className = 'grid-productos';

        // Busco los productos que coinciden con esta categoría
        for (var j = 0; j < productos.length; j++) {
            if (productos[j].categoria === cat) {
                var prod = productos[j];

                // Creo la tarjeta del producto
                var card = document.createElement('div');
                card.className = 'card-glass';
                
                card.innerHTML = `
                    <div class="card-image-container" onclick="abrirDetalleProducto(${prod.id})">
                        <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/300?text=No+Img'">
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
            }
        }
        contenedor.appendChild(grid);
    }
}

/* =========================================
   DETALLE DEL PRODUCTO
   ========================================= */
function abrirDetalleProducto(id) {
    // Busco el producto con un for loop clásico
    var prodEncontrado = null;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            prodEncontrado = productos[i];
            break;
        }
    }

    if (!prodEncontrado) return;

    var modal = document.getElementById('productoModal');
    var contenido = document.getElementById('detalleProductoContenido');

    // Preparo la lista de specs
    var htmlSpecs = '';
    if (prodEncontrado.specs_detalladas) {
        htmlSpecs = '<ul class="detalle-specs-list">';
        for (var k = 0; k < prodEncontrado.specs_detalladas.length; k++) {
            htmlSpecs += '<li>' + prodEncontrado.specs_detalladas[k] + '</li>';
        }
        htmlSpecs += '</ul>';
    }

    contenido.innerHTML = `
        <div class="detalle-img-container">
             <img src="${prodEncontrado.imagen}" alt="${prodEncontrado.nombre}">
        </div>
        <div class="detalle-info-container">
            <span class="detalle-categoria">${prodEncontrado.categoria}</span>
            <h2 class="detalle-titulo">${prodEncontrado.nombre}</h2>
            <p class="detalle-descripcion">${prodEncontrado.descripcion}</p>
            
            <div class="detalle-specs-title">Especificaciones</div>
            ${htmlSpecs}
            
            <div style="margin-top:auto;">
                <div class="detalle-precio">$${prodEncontrado.precio.toLocaleString()}</div>
                <button class="btn-add full" onclick="agregarAlCarrito(${prodEncontrado.id}); cerrarModal('productoModal')">
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

/* =========================================
   ARMADOR DE PC
   ========================================= */
function abrirConfigurador(categoria) {
    var contenedor = document.getElementById('categoriaProductos');
    var titulo = document.getElementById('categoriaTitulo');
    
    document.getElementById('categoriaModal').style.display = 'flex';
    titulo.innerText = 'Elegir ' + categoria;
    contenedor.innerHTML = '';

    // Filtro manual con for loop
    var hayProductos = false;

    for (var i = 0; i < productos.length; i++) {
        if (productos[i].categoria === categoria) {
            hayProductos = true;
            var prod = productos[i];

            var div = document.createElement('div');
            div.className = 'producto-config-item';
            div.onclick = function() { seleccionarComponenteArmador(prod.id); }; 
            
            div.innerHTML = `
                <img src="${prod.imagen}" width="80">
                <h4>${prod.nombre}</h4>
                <p style="color:var(--secondary); font-weight:bold;">$${prod.precio.toLocaleString()}</p>
            `;
            contenedor.appendChild(div);
        }
    }

    if (!hayProductos) {
        contenedor.innerHTML = '<p style="color:white;">No hay stock.</p>';
    }
}

function seleccionarComponenteArmador(id) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            seleccionArmador.push(productos[i]);
            break;
        }
    }
    actualizarResumenArmador();
    cerrarModal('categoriaModal');
}

function actualizarResumenArmador() {
    var listaDiv = document.getElementById('listaComponentes');
    var totalSpan = document.getElementById('totalPresupuesto');
    
    listaDiv.innerHTML = '';
    var total = 0;

    if (seleccionArmador.length === 0) {
        listaDiv.innerHTML = '<p style="text-align:center; color:#888;">Selecciona componentes.</p>';
    } else {
        for (var i = 0; i < seleccionArmador.length; i++) {
            var p = seleccionArmador[i];
            total += p.precio;
            
            var row = document.createElement('div');
            row.className = 'item-seleccionado';
            row.innerHTML = '<span>' + p.nombre + '</span><span>$' + p.precio.toLocaleString() + '</span>';
            listaDiv.appendChild(row);
        }
    }
    totalSpan.innerText = '$' + total.toLocaleString();
}

function limpiarArmador() {
    seleccionArmador = [];
    actualizarResumenArmador();
}

function agregarPresupuestoAlCarrito() {
    if (seleccionArmador.length === 0) {
        mostrarNotificacion("Primero selecciona componentes");
        return;
    }
    // Paso los items del armador al carrito global
    for (var i = 0; i < seleccionArmador.length; i++) {
        carrito.push(seleccionArmador[i]);
    }
    
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
    limpiarArmador();
    mostrarNotificacion("Componentes agregados al carrito");
    irA('carrito');
}

/* =========================================
   CARRITO DE COMPRAS
   ========================================= */
function agregarAlCarrito(id) {
    var prod = null;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            prod = productos[i];
            break;
        }
    }

    if (prod) {
        carrito.push(prod);
        guardarCarrito();
        actualizarContador();
        mostrarCarrito();
        mostrarNotificacion("Agregado: " + prod.nombre);
    }
}

function mostrarCarrito() {
    var contenedor = document.getElementById('carritoItems');
    var totalSpan = document.getElementById('totalCarrito');

    contenedor.innerHTML = '';
    var total = 0;

    if (carrito.length === 0) {
         contenedor.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">Tu carrito está vacío.</p>';
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var prod = carrito[i];
            total += prod.precio;

            var item = document.createElement('div');
            item.className = 'cart-item-pro';
            // CAMBIO: Aquí reemplacé el emoji del tacho por una X
            item.innerHTML = `
                <div class="cart-info">
                    <img src="${prod.imagen}" width="50">
                    <span>${prod.nombre}</span>
                </div>
                <div class="cart-price">$${prod.precio.toLocaleString()}</div>
                <div>
                    <button onclick="eliminarDelCarrito(${i})" class="btn-delete">X</button>
                </div>
            `;
            contenedor.appendChild(item);
        }
    }
    totalSpan.innerText = '$' + total.toLocaleString();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContador() {
    var el = document.getElementById('carritoContador');
    if (el) el.innerText = carrito.length;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarNotificacion("Tu carrito está vacío");
    } else {
        abrirModal('checkoutModal');
    }
}

/* =========================================
   UTILIDADES
   ========================================= */
function irA(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function cerrarModal(id) { 
    document.getElementById(id).style.display = 'none'; 
}

function abrirModal(id) { 
    document.getElementById(id).style.display = 'flex'; 
}

// Cerrar modal al hacer click afuera
window.onclick = function(event) {
    if (event.target.classList.contains('modal-backdrop')) {
        event.target.style.display = "none";
    }
}

/* LOGIN SIMPLE */
function login(email) {
    if (email) {
        localStorage.setItem('usuario', email);
        verificarUsuario();
        cerrarModal('loginModal');
    }
}

function verificarUsuario() {
    var user = localStorage.getItem('usuario');
    var area = document.getElementById('userInfo');
    var btn = document.getElementById('btnLoginBtn');
    var display = document.getElementById('userNameDisplay');
    
    if (user) {
        btn.style.display = 'none';
        area.style.display = 'flex';
        // Tomo la parte antes del @
        display.innerText = user.split('@')[0];
    } else {
        btn.style.display = 'block';
        area.style.display = 'none';
    }
}

function salir() {
    localStorage.removeItem('usuario');
    verificarUsuario();
}

/* =========================================
   SISTEMA DE NOTIFICACIONES Y PAGO
   ========================================= */

// Función personalizada para mostrar mensajes (Sin emojis)
function mostrarNotificacion(mensaje) {
    var noti = document.getElementById('notificacion');
    var texto = document.getElementById('notificacionTexto');
    
    // Si no encuentra el elemento en el HTML, no hace nada
    if(!noti || !texto) return;

    // Pongo el mensaje
    texto.innerText = mensaje;
    
    // Muestro la caja
    noti.style.display = 'block';

    // La oculto automáticamente después de 3 segundos
    setTimeout(function() {
        noti.style.display = 'none';
    }, 3000);
}

// Función corregida para Finalizar Compra
function confirmarPago() {
    // 1. Cierro el modal
    cerrarModal('checkoutModal');

    // 2. Muestro el mensaje de texto simple
    mostrarNotificacion("¡Pago Exitoso! Enviamos el recibo a tu email.");

    // 3. Vacío el carrito
    vaciarCarrito();
}