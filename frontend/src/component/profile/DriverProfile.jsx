import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DriverProfile = () => {
    const { id: driverId } = useParams();
    const [driverDetails, setDriverDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDriverDetails = async () => {
            try {
                console.log('Fetching driver profile for ID:', driverId); // Add logging
                const response = await axios.get(`http://localhost:4000/api/v1/driver/${driverId}`);
                console.log('Driver profile fetched successfully:', response.data.data); // Add logging
                setDriverDetails(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching driver profile:', err); // Add logging
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDriverDetails();
    }, [driverId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const { name, contact, email, vehicleNumber, vehicleType, profileImage } = driverDetails;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 p-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Driver's Profile</h2>
                    <img src="path/to/pahadi-haat-logo.png" alt="Pahadi Haat Logo" className="w-16" />
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="w-32 h-32 rounded-full mb-4"
                        src={profileImage}
                        alt={`${name}'s profile`}
                    />
                    <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                    <p className="text-gray-600">Contact No-{contact}</p>
                    <p className="text-gray-600">{email}</p>
                    <hr className="my-4 w-full" />
                    <p className="text-gray-600">Vehicle Number-{vehicleNumber}</p>
                    <p className="text-gray-600">Vehicle Type-{vehicleType}</p>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;