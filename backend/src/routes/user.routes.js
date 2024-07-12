import { Router } from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";

const router = Router();

router.post("/register", registerUser); // Ensure this route is defined
router.post("/login", loginUser);

export default router;