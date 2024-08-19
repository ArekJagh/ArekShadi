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
                <button class="remove-item-btn btn btn-danger" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Update the total after displaying items
    updateTotal();
}

// Function to update the total price
function updateTotal() {
    const totalElement = document.getElementById('total-amount'); // Correct the ID
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Function to remove item from the cart
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

// Proceed to checkout or payment
document.getElementById('checkout-button').addEventListener('click', function () {
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }

    // Here you can add payment processing logic if needed
    // Clear the cart and redirect to a thank you page
    localStorage.removeItem('cart');
    window.location.href = 'thankyou.html';
});

// Initialize cart display when the page loads
window.onload = function () {
    updateCartDisplay();
};
