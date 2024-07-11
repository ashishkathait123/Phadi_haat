const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace `mongodb://localhost/products` with your MongoDB connection string)
mongoose.connect('mongodb://localhost/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Product Model
const Product = mongoose.model('Product', {
  imgSrc: String,
  altText: String,
  name: String,
  description: String,
  weight: String,
  price: String,
  originalPrice: String,
  discount: Boolean,
  discountLabel: String
});

// Routes
// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST new product
app.post('/api/products', async (req, res) => {
  const { imgSrc, altText, name, description, weight, price, originalPrice, discount, discountLabel } = req.body;

  const newProduct = new Product({
    imgSrc,
    altText,
    name,
    description,
    weight,
    price,
    originalPrice,
    discount,
    discountLabel
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save product'});
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
