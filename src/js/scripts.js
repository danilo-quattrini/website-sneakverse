// scripts.js

const productos = [
    { nombre: "Zapatilla Street 1", precio: "120€" },
    { nombre: "Zapatilla Street 2", precio: "130€" },
    { nombre: "Zapatilla Street 3", precio: "110€" },
    { nombre: "Zapatilla Street 4", precio: "90€" },
    { nombre: "Zapatilla Street 5", precio: "105€" },
    { nombre: "Zapatilla Street 6", precio: "115€" },
    { nombre: "Zapatilla Street 7", precio: "95€" },
    { nombre: "Zapatilla Street 8", precio: "125€" },
    { nombre: "Zapatilla Street 9", precio: "140€" },
    { nombre: "Zapatilla Street 10", precio: "100€" }
];

const productosContainer = document.getElementById("productos");

function renderizarProductos() {
    productosContainer.innerHTML = productos.map(producto => `
        <div class="producto-card">
            <h2>${producto.nombre}</h2>
            <p>${producto.precio}</p>
        </div>
    `).join("");
}

function scrollToProducts() {
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderizarProductos);
