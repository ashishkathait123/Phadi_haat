import { asyncHandler } from "../utils/asyncHandler.js";
import { Seller } from "../models/seller.models.js";
import { User } from "../models/user.models.js"; // Ensure User model is imported
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from 'bcryptjs';

const registerSeller = asyncHandler(async (req, res) => {
    const { fullName, phoneNumber, email, password, shopName, shopAddress } = req.body;

    if ([fullName, phoneNumber, email, password, shopName, shopAddress].some(field => !field)) {
        throw new ApiError(400, "All fields are required");
    }

    const existingSeller = await Seller.findOne({ email });

    if (existingSeller) {
        throw new ApiError(409, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const seller = await Seller.create({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        shopName,
        shopAddress,
        profileImage: "default.jpg" // Assuming a default image for now
    });

    // Update the user's isRegistered flag
    const user = await User.findOneAndUpdate({ email }, { isRegistered: true });
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(201).json(new ApiResponse(201, seller, "Seller registered successfully"));
});

const getSellerProfile = asyncHandler(async (req, res) => {
    const sellerId = req.params.id;
    const seller = await Seller.findById(sellerId);

    if (!seller) {
        throw new ApiError(404, "Seller not found");
    }

    return res.status(200).json(new ApiResponse(200, seller, "Seller profile fetched successfully"));
});

export { registerSeller, getSellerProfile };