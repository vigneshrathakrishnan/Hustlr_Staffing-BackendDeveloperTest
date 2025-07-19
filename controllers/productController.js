const { getProducts, saveProducts } = require('../services/productService');

// GET /products
function getAllProducts(req, res) {
  const category = req.query.category;
  const products = getProducts();

  if (category) {
    const filtered = products.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(products);
}

// GET /products/:id
function getProductById(req, res) {
  const products = getProducts();
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
}

// POST /products
function addProduct(req, res) {
  const products = getProducts();
  const { title, price, description, category, image } = req.body;

  if (!title || !price || !description || !category || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newProduct = {
    id: products.length + 1,
    title,
    price,
    description,
    category,
    image,
  };

  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory: getAllProducts, // alias
  addProduct,
};
