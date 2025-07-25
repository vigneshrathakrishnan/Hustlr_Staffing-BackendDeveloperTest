const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filePath = path.join(__dirname, '../data/products.json');

async function fetchAndSaveProductsIfNeeded() {
  if (!fs.existsSync(filePath) || isFileEmpty(filePath)) {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      fs.writeFileSync(filePath, JSON.stringify(res.data, null, 2));
      console.log('Fetched and saved product data.');
    } catch (err) {
      console.error('Error fetching products:', err.message);
    }
  } else {
    console.log('Product data already exists and is not empty.');
  }
}

function isFileEmpty(path) {
  try {
    const stats = fs.statSync(path);
    return stats.size === 0;
  } catch (err) {
    return true;
  }
}

function getProducts() {
  return JSON.parse(fs.readFileSync(filePath));
}

function saveProducts(products) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

module.exports = {
  fetchAndSaveProductsIfNeeded,
  getProducts,
  saveProducts,
};
