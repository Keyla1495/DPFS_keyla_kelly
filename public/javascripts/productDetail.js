document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const btnsContador = document.querySelectorAll(".contador-btn");
    const cantidadSpan = document.querySelector(".contador-cantidad");
    const cartIcon = document.getElementById("cartIcon");
    const cartCount = document.getElementById("cartCount");
    const cartNotification = document.getElementById("cart-notification");
    const addToCartButton = document.querySelector(".añadirAlCarrito");

    let cantidad = 1;
    let carrito = [];

    if (btnsContador.length === 2 && cantidadSpan) {
        const [btnMenos, btnMas] = btnsContador;

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
    }

    if (addToCartButton && cartCount) {
        addToCartButton.addEventListener("click", () => {
            // Obtener información del producto
            const titulo = document.querySelector(".titulo")?.textContent || "Producto sin título";
            const precio = document.querySelector(".precio")?.textContent || "Precio no disponible";
            const imagen = document.querySelector(".imagenDetalle img")?.src || "";

            // Buscar si el producto ya está en el carrito
            const productoExistente = carrito.find(p => p.titulo === titulo);

            if (productoExistente) {
                // Si el producto ya está en el carrito, solo aumentar la cantidad
                productoExistente.cantidad += cantidad;
            } else {
                // Si no está en el carrito, agregarlo con la cantidad actual
                carrito.push({ titulo, precio, imagen, cantidad });
            }

            // Calcular la cantidad total en el carrito
            const totalCantidad = carrito.reduce((sum, p) => sum + p.cantidad, 0);
            cartCount.textContent = totalCantidad;

            // Mostrar notificación (si existe)
            if (cartNotification) {
                cartNotification.classList.add("show");
                setTimeout(() => {
                    cartNotification.classList.remove("show");
                }, 2000);
            }
        });
    }

    if (cartIcon) {
        cartIcon.addEventListener("click", () => {
            if (carrito.length === 0) {
                alert("El carrito está vacío.");
            } else {
                alert(`Carrito:\n${carrito.map(p => `📖 ${p.titulo} - ${p.precio} x${p.cantidad}`).join("\n")}`);
            }
        });
    }

    // Carrusel de recomendados
    const track = document.getElementById("track");
    const prevButton = document.getElementById("button-prev");
    const nextButton = document.getElementById("button-next");
    const slides = document.querySelectorAll(".slick");
    const slideWidth = slides[0].offsetWidth; // Obtener el ancho de una imagen

    let currentIndex = 0;

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Regresa al inicio cuando llega al final
        }
        moveCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Regresa al final cuando está en la primera imagen
        }
        moveCarousel();
    });

    function moveCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
   
});
