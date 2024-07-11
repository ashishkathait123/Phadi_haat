import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: ["buyer", "seller", "taxi driver"],
  },
  isFirstTime: { type: Boolean, default: true } // Added isFirstTime field
});

const User = mongoose.model("User", userSchema);

export { User };