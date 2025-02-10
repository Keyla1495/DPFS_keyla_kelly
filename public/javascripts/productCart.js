// Menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Variables globales
let cart = [
    { 
        name: "The Great Gatsby", 
        price: 10.99, 
        quantity: 1, 
        image: "../public/images/Libro The Great Gatsby.jpg" 
    },
    { 
        name: "A traves de mi ventana", 
        price: 10.99, 
        quantity: 1, 
        image: "../public/images/Libro A traves de mi ventana.jpeg" 
    },
    { 
        name: "After", 
        price: 10.99, 
        quantity: 1, 
        image: "../public/images/Libro After.jpg" 
    },
    { 
        name: "The Book of Stolen Dreams", 
        price: 10.99, 
        quantity: 1, 
        image: "../public/images/Libro The Book of Stolen Dreams.jpg" 
    }
];

// Función para renderizar el carrito
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar el contenedor

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Precio: $${item.price}</p>
                <p>Cantidad: <span class="quantity">${item.quantity}</span></p>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Actualizar el total
    document.querySelector('.cart-summary h3').innerText = `Total: $${total.toFixed(2)}`;
    document.querySelector('.cart-count').innerText = cart.length;
}

// Función para eliminar un producto del carrito
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

// Función para inicializar eventos de eliminación
function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeItem(index);
        });
    });
}

// Función para agregar un producto al carrito (esto lo puedes activar en otras partes del sitio)
function addItemToCart(item) {
    cart.push(item);
    renderCart();
    showNotification();
}

// Función para mostrar notificación de producto agregado
function showNotification() {
    const notification = document.getElementById('cart-notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Llamada inicial para renderizar el carrito cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    setupRemoveButtons();
});