// Function to add item to cart
function addToCart(product) {
    // Retrieve cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart, if so, increase the quantity
    let foundItem = cart.find(item => item.name === product.name);
    if (foundItem) {
        foundItem.quantity += 1;
    } else {
        // If not found, add it to the cart with quantity of 1
        cart.push({
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const productElement = this.closest('.product');
        const product = {
            name: productElement.querySelector('h2').textContent,
            price: parseFloat(productElement.querySelector('.price').textContent.replace('$', ''))
        };

        // Add the selected product to the cart
        addToCart(product);

        // Optionally, give feedback that the item has been added
        alert(`${product.name} added to cart!`);
    });
});
