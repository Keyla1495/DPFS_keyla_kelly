document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const cartIcon = document.getElementById("cartIcon");
    const cartCount = document.getElementById("cartCount");

    //Toggle del menú hamburguesa
    menuToggle.addEventListener("click", () =>{
        menu.classList.toggle("active");
    });

    //Incremento del contador del carrito
    let cartItems = 0;
    cartIcon.addEventListener("click", () =>{
        cartItems++;
        cartCount.textContent = cartItems;
    });


    // Contador de cantidad
    const decrementButton = document.querySelector('.contador-btn:first-child');
    const incrementButton = document.querySelector('.contador-btn:last-child');
    const quantitySpan = document.querySelector('.contador-cantidad');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantitySpan.textContent, 10);
        if (currentValue > 1) {
            quantitySpan.textContent = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantitySpan.textContent, 10);
        quantitySpan.textContent = currentValue + 1;
    });

    // Añadir al carrito
    const addToCartButton = document.querySelector('.añadirAlCarrito');
    addToCartButton.addEventListener('click', () => {
        const title = document.querySelector('.titulo').textContent;
        const price = document.querySelector('.precio').textContent.replace('Precio: $', '');
        const quantity = parseInt(quantitySpan.textContent, 10);

        const product = {
            title,
            price: parseFloat(price),
            quantity,
        };

        // Guardar en localStorage (puedes integrarlo con tu backend en lugar de esto)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Producto añadido al carrito');
    });

    // Carrusel funcional
    const track = document.getElementById('track');
    const buttonPrev = document.getElementById('button-prev');
    const buttonNext = document.getElementById('button-next');

    let currentIndex = 0;

    const updateCarrusel = () => {
        const slides = track.children;
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    buttonPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    });

    buttonNext.addEventListener('click', () => {
        const slides = track.children;
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarrusel();
        }
    });
});
