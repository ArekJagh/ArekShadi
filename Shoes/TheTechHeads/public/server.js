const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/cart', (req, res, next) => {
    console.log('API Cart route hit');
    next();
}, require('./routes/cart'));

app.use('/api/checkout', (req, res, next) => {
    console.log('API Checkout route hit');
    next();
}, require('./routes/checkout'));

// Serve product.html on the root URL
app.get('/', (req, res) => {
    console.log('Root URL hit');
    res.sendFile(path.join(__dirname, '../public/product.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
