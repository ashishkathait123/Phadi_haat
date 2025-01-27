import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, type } = req.body;

  if ([name, email, password, phoneNumber, type].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    type,
    isFirstTime: true // Set first-time login flag
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(new ApiResponse(201, createdUser, "User created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = jwt.sign({ id: user._id, type: user.type }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  // Include isFirstTime flag in the response
  const responseData = {
    token,
    type: user.type,
    isFirstTime: user.isFirstTime
  };

  // Reset the isFirstTime flag after the first login
  if (user.isFirstTime) {
    user.isFirstTime = false;
    await user.save();
  }

  return res.status(200).json(new ApiResponse(200, responseData, "Login successful"));
});

export { registerUser, loginUser };