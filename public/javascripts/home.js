// // Obtener elementos del DOM
// var modal = document.getElementById("cartModal");
// var cartIcon = document.getElementById("cartIcon");
// var closeModal = document.getElementsByClassName("close")[0];
// var cartCount = document.getElementById("cartCount");

// // Variable para contar los productos
// var itemCount = 0;

// // Función para abrir el modal
// cartIcon.onclick = function() {
//   modal.style.display = "block";
// }

// // Función para cerrar el modal
// closeModal.onclick = function() {
//   modal.style.display = "none";
// }

// // Cerrar el modal si se hace clic fuera de él
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Función para actualizar el contador del carrito
// function updateCartCount(newCount) {
//   itemCount = newCount;
//   cartCount.textContent = itemCount;
// }

// // Ejemplo de cómo agregar productos y actualizar el contador
// function addToCart() {
//   // Aumentar el contador y actualizar el display
//   updateCartCount(itemCount + 1);
// }

// // Llama a addToCart() cuando un producto se agrega al carrito

// Supongamos que tienes un archivo de controlador llamado 'homeController.js'
const homeController = {
    index: (req, res) => {
      res.render('index', { title: 'Fantasy World' });
    }
  };
  
  module.exports = homeController;
  