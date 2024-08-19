// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let foundItem = cart.find(item => item.name === product.name);
    if (foundItem) {
        foundItem.quantity += 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

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

        addToCart(product);
        alert(`${product.name} added to cart!`);
    });
});

// Filtering Functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const category = this.textContent.toLowerCase();
        const products = document.querySelectorAll('.product');

        if (category === 'home') {
            products.forEach(product => product.style.display = 'block');
        } else {
            products.forEach(product => {
                product.style.display = product.getAttribute('data-category') === category ? 'block' : 'none';
            });
        }
    });
});
