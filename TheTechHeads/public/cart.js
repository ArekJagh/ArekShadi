let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    // Check if product is already in cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex > -1) {
        // If product exists in the cart, increase its quantity
        cart[existingProductIndex].quantity++;
    } else {
        // If product doesn't exist, add it to the cart with a quantity of 1
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemHTML = `
            <div class="cart-item">
                <p>${item.name} (${item.quantity}) - $${itemTotal.toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        cartItems.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    totalElement.innerText = `$${total.toFixed(2)}`; // Update the total price with a dollar sign
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay(); // Display cart items when page loads
});

// Checkout button handling
document.getElementById('checkout-button').addEventListener('click', () => {
    window.location.href = 'payment.html'; // Redirect to payment page
});
