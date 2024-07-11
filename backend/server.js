require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const User = require('./model/User'); // Adjust the path based on your project structure
const Shop = require('./model/Shop'); // Adjust the path based on your project structure
const Item = require('./model/Item'); // Adjust the path based on your project structure

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(cors());

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Specify the directory where images will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Utility function to generate Shop ID
function generateShopId() {
    const randomString = Math.random().toString(36).substring(2);
    const hash = crypto.createHash('sha256').update(randomString).digest('hex');
    return hash.substring(0, 6);
}

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    const authToken = tokenParts[1];

    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
};

// Routes

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phoneNumber, type } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password, phoneNumber, type });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user data (protected route)
app.get('/data', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new shop (with image upload)
app.post('/shop', verifyToken, upload.single('shopImage'), async (req, res) => {
    try {
      const { shopName, shopkeeperName, address } = req.body;
      console.log('Request body:', req.body);
      console.log('Uploaded file:', req.file);
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image upload failed' });
      }
  
      const shopId = generateShopId();
      const shopImagePath = req.file.path;
  
      const newShop = new Shop({ shopName, shopkeeperName, address, shopId, img_path: shopImagePath });
      await newShop.save();
      res.status(201).json({ message: 'Shop created successfully', shop: newShop });
    } catch (error) {
      console.error('Error creating shop:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  });
  

// Create a new item (with image upload)
app.post('/item', verifyToken, upload.single('itemImage'), async (req, res) => {
    try {
        const { shopId, itemName, itemType, rate, brand, description } = req.body;
        const itemImagePath = req.file.path;

        const newItem = new Item({ shopId, itemName, itemType, rate, brand, description, img_path: itemImagePath });
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all items
app.get('/allItems', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all shops
app.get('/allShops', async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Serve uploaded images
app.get('/uploads/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'image/jpeg',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'image/jpeg',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
    }
});

// Wishlist routes - example routes, adjust as per your application needs
let wishlist = [
    { id: 1, name: 'Product 1', price: '$20', rating: 4.5 },
    { id: 2, name: 'Product 2', price: '$25', rating: 4.2 },
    { id: 3, name: 'Product 3', price: '$30', rating: 4.8 }
];

app.get('/wishlist', (req, res) => {
    res.json(wishlist);
});

app.post('/wishlist', (req, res) => {
    const newItem = req.body;
    wishlist.push(newItem);
    res.status(201).json(newItem);
});

app.delete('/wishlist/:id', (req, res) => {
    const { id } = req.params;
    wishlist = wishlist.filter(item => item.id !== parseInt(id));
    res.json({ message: 'Item deleted' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
