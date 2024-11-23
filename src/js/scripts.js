const productos = [
    { nombre: "Nike Air Max Tuned 1", precio: "199,99€", imagen: "shoe1.webp", categoria: "populares" },
    { nombre: "Adidas Campus 00s", precio: "120€", imagen: "shoe2.webp", categoria: "ofertas" },
    { nombre: "Nike Air Force 1 Low", precio: "99,99€", imagen: "shoe3.webp", categoria: "novedades" },
    { nombre: "Adidas Samba OG", precio: "90€", imagen: "shoe4.webp", categoria: "populares" },
    { nombre: "Nike Dunk Low", precio: "95€", imagen: "shoe5.webp", categoria: "novedades" },
    { nombre: "Nike Dunk Low", precio: "120€", imagen: "shoe6.webp", categoria: "ofertas" },
    { nombre: "Nike Air Force 1 Low", precio: "95€", imagen: "shoe9.webp", categoria: "ofertas" },
    { nombre: "Nike Air Max Tuned 1", precio: "179,99€", imagen: "shoe7.webp", categoria: "populares" },
    { nombre: "New Balance 530", precio: "119,99€", imagen: "shoe8.webp", categoria: "novedades" },
    { nombre: "Nike Air Max Tuned 1 Utility", precio: "199,99€", imagen: "shoe10.webp", categoria: "populares" },
];

function mostrarProductos() {
    const contenedorPopulares = document.getElementById('productos-populares');
    const contenedorOfertas = document.getElementById('productos-ofertas');
    const contenedorNovedades = document.getElementById('productos-novedades');

    productos.forEach(producto => {
        const card = `
            <div class="producto-card">
                <img src="assets/img//${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
            </div>
        `;

        if (producto.categoria === "populares") {
            contenedorPopulares.innerHTML += card;
        } else if (producto.categoria === "ofertas") {
            contenedorOfertas.innerHTML += card;
        } else if (producto.categoria === "novedades") {
            contenedorNovedades.innerHTML += card;
        }
    });
}

mostrarProductos();
