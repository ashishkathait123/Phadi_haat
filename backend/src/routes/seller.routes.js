import { Router } from "express";
import { registerSeller, getSellerProfile } from "../controller/seller.controller.js";

const router = Router();

router.post("/register", registerSeller);
router.get("/:id", getSellerProfile); // Added this route

export default router;