// Initialize cart to keep track of products
let cart = [];

// Function to add product to cart
function addToCart(productName, productPrice, quantity) {
  const product = {
    name: productName,
    price: productPrice,
    quantity: quantity
  };

  // Add product to the cart array
  cart.push(product);
  updateCartDisplay();
}

// Update cart display to show the number of items
function updateCartDisplay() {
  const cartIcon = document.querySelector('.cart-icon');
  cartIcon.textContent = `Cart (${cart.length})`; // Update cart with item count
}

// Event listener for the Add to Cart button
document.querySelector('.add-to-cart').addEventListener('click', function() {
  const productName = "Laptop";  // Product name
  const productPrice = 800;  // Product price
  const quantity = 1;  // Quantity of product
  
  addToCart(productName, productPrice, quantity);  // Call function to add to cart
});