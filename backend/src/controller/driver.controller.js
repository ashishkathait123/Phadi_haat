import { asyncHandler } from "../utils/asyncHandler.js";
import { Driver } from "../models/driver.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const getDriverProfile = asyncHandler(async (req, res) => {
    const driverId = req.params.id;
    console.log("Fetching profile for driver ID:", driverId);
    const driver = await Driver.findById(driverId);

    if (!driver) {
        throw new ApiError(404, "Driver not found");
    }

    console.log("Driver profile fetched successfully:", driver);
    return res.status(200).json(new ApiResponse(200, driver, "Driver profile fetched successfully"));
});

const registerDriver = asyncHandler(async (req, res) => {
    const { fullName, phoneNumber, email, password, vehicleNumber, vehicleType } = req.body;
    console.log("Registering driver with data:", { fullName, phoneNumber, email, password, vehicleNumber, vehicleType });

    try {
        const driver = await Driver.create({
            name: fullName,
            contact: phoneNumber,
            email,
            password,
            vehicleNumber,
            vehicleType,
            profileImage: "" // Set an empty string or default value for profileImage
        });
        console.log("Driver registered successfully:", driver);
        return res.status(201).json(new ApiResponse(201, driver, "Driver registered successfully"));
    } catch (error) {
        console.error("Error during driver registration:", error);
        throw new ApiError(500, "Failed to register driver", [], error.stack);
    }
});

export { getDriverProfile, registerDriver };