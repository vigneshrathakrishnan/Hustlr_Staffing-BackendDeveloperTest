const express = require('express');
const fs = require('fs');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const { fetchAndSaveProductsIfNeeded } = require('./services/productService');

const app = express();
app.use(express.json());

// Initialize data
fetchAndSaveProductsIfNeeded();

// API routes
app.use('/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
