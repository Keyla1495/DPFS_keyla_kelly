//Menu Hamburguesa
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
