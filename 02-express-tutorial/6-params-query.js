const express = require('express');
const app = express();
const { products } = require('./data');


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="api/products">product</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    // res.json(products);
    res.json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    console.log(req.params);
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist!');
    }
    // console.log(singleProduct);
    return res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('Hello World');
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    let sortedProducts = [...products];
    const { search, limit } = req.query;
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products matched your Search!');
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
    // res.send('Hello World');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});