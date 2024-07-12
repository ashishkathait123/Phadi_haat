import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    shopName: {
        type: String,
        required: true,
        trim: true
    },
    shopAddress: {
        type: String,
        required: true,
        trim: true
    },
    profileImage: {
        type: String,
        default: "default.jpg" // Default image
    }
}, {
    timestamps: true
});

const Seller = mongoose.model("Seller", sellerSchema);

export { Seller };