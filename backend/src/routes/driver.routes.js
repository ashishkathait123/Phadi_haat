import express from 'express';
import { getDriverProfile, registerDriver } from '../controller/driver.controller.js';

const router = express.Router();

router.get('/:id', getDriverProfile); // Route to get driver profile by ID
router.post('/register', registerDriver); // Route to register driver

export default router;