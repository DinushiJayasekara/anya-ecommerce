const express = require('express');
const app = express();
const PORT = 5000;
const data = require('./data/data');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} at http://localhost:${PORT}`);
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(product => product.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ msg: 'Product Not Found' });
    }
})