// routes/product.routes.js

import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

router.route('/products')
    .get(getProducts)
    .post(createProduct);

router.route('/products/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

export default router;