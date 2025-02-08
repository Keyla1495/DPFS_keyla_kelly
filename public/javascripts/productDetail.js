document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Contador de cantidad
    const btnMenos = document.querySelector(".contador-btn:first-of-type");
    const btnMas = document.querySelector(".contador-btn:last-of-type");
    const cantidadSpan = document.querySelector(".contador-cantidad");

    let cantidad = 1;

    btnMenos.addEventListener("click", () => {
        if (cantidad > 1) {
            cantidad--;
            cantidadSpan.textContent = cantidad;
        }
    });

    btnMas.addEventListener("click", () => {
        cantidad++;
        cantidadSpan.textContent = cantidad;
    });

    // Agregar al carrito
    const btnCarrito = document.querySelector(".añadirAlCarrito");
    const cartCount = document.getElementById("cartCount");

    btnCarrito.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const producto = {
            titulo: document.querySelector(".titulo").textContent,
            precio: document.querySelector(".precio").textContent,
            cantidad
        };

        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Actualizar el contador del carrito
        cartCount.textContent = carrito.length;
        alert("Producto agregado al carrito");
    });

    // Carrusel de recomendados
    const track = document.getElementById("track");
    const prevBtn = document.getElementById("button-prev");
    const nextBtn = document.getElementById("button-next");

    nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: 200, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -200, behavior: "smooth" });
    });
});
