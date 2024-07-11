import { asyncHandler } from "../utils/asyncHandler.js";
import { Driver } from "../models/driver.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const getDriverProfile = asyncHandler(async (req, res) => {
    const driverId = req.params.id;
    const driver = await Driver.findById(driverId);

    if (!driver) {
        throw new ApiError(404, "Driver not found");
    }

    return res.status(200).json(new ApiResponse(200, driver, "Driver profile fetched successfully"));
});

const registerDriver = asyncHandler(async (req, res) => {
    const { fullName, phoneNumber, email, password, vehicleNumber, vehicleType } = req.body;

    if ([fullName, phoneNumber, email, password, vehicleNumber, vehicleType].some(field => !field)) {
        throw new ApiError(400, "All fields are required");
    }

    const existingDriver = await Driver.findOne({ email });

    if (existingDriver) {
        throw new ApiError(409, "Email already exists");
    }

    const driver = await Driver.create({
        name: fullName,
        contact: phoneNumber,
        email,
        password,
        vehicleNumber,
        vehicleType,
        profileImage: "default.jpg" // Assuming a default image for now
    });

    return res.status(201).json(new ApiResponse(201, driver, "Driver registered successfully"));
});

export { getDriverProfile, registerDriver };