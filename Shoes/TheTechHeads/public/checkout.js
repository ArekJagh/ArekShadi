// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <button class="remove-item-btn" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Update total
    updateTotal();
}

// Function to update the total price
function updateTotal() {
    const totalElement = document.getElementById('cart-total');
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
    cartItems.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
    updateCartDisplay(); // Update cart display
}

// Add event listener for removing items
document.getElementById('cart-items').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-item-btn')) {
        const index = e.target.getAttribute('data-index');
        removeItem(index);
    }
});

// Add event listener for the "Pay Now" button
document.getElementById('pay-now-button').addEventListener('click', function () {
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }

    // Clear the cart and redirect to the thank you page
    localStorage.removeItem('cart');
    window.location.href = 'thankyou.html';
});

// Initialize cart display when the page loads
window.onload = function () {
    updateCartDisplay();
};
