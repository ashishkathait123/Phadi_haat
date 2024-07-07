import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

function DriverRegistration() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', { 
                fullName, 
                phoneNumber, 
                email, 
                password, 
                vehicleNumber, 
                vehicleType 
            });
            setMessage(response.data.message);
            setRedirect(true);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    if (redirect) {
        // Handle redirection logic here
    }

    return (
        <div className="bg-custom flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 flex">
                <div className="w-1/3 p-8 flex flex-col items-center">
                    <img className="w-32 mb-4" src="asset/pahadi haat logo 2.svg" alt="Pahadi Haat Logo" />
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <span className="text-gray-500">Add Photo</span>
                    </div>
                    <button className="bg-custom-button text-white py-2 px-4 rounded">Add Photo</button>
                </div>
                <div className="w-2/3 p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Driver Registration</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700" htmlFor="fullName">Full Name</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="vehicleNumber">Vehicle Number</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="vehicleNumber"
                                name="vehicleNumber"
                                value={vehicleNumber}
                                onChange={(e) => setVehicleNumber(e.target.value)}
                                placeholder="Vehicle Number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="vehicleType">Type of Vehicle</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="vehicleType"
                                name="vehicleType"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                placeholder="Type of Vehicle"
                                required
                            />
                        </div>
                        <button
                            className="w-full py-2 bg-custom-button text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="submit"
                        >
                            Register
                        </button>
                        {message && <p className="text-red-500 mt-4">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DriverRegistration;