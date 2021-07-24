const express = require('express');
const app = express();
const PORT = 5000;
const data = require('./data/data');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} at http://localhost:${PORT}`);
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})