import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SellerRegister() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/seller/register', { 
                fullName, 
                phoneNumber, 
                email, 
                password, 
                shopName, 
                shopAddress 
            });
            setMessage(response.data.message);
            localStorage.setItem('isSellerRegistered', 'true'); // Store flag in local storage
            setRedirect(true);
            navigate(`/seller-profile/${response.data.data._id}`); // Navigate to seller profile
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed');
        }
    };

    if (redirect) {
        // Handle redirection logic here
        navigate('/seller-profile'); // Redirect to SellerProfile component
    }

    return (
        <div className="bg-custom flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 flex">
                <div className="w-1/3 p-8 flex flex-col items-center">
                    <img className="w-32 mb-4" src="asset/pahadi haat logo 2.svg" alt="Pahadi Haat Logo" />
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <img className="w-16 h-16" src="path/to/default-profile.png" alt="Default Profile" />
                    </div>
                </div>
                <div className="w-2/3 p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-semibold text-gray-700">Register as Seller</h2>
                        <div className="space-y-2">
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
                        <div className="space-y-2">
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
                        <div className="space-y-2">
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
                        <div className="space-y-2">
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
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="shopName">Shop Name</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="shopName"
                                name="shopName"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                                placeholder="Shop Name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="shopAddress">Shop Address</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="shopAddress"
                                name="shopAddress"
                                value={shopAddress}
                                onChange={(e) => setShopAddress(e.target.value)}
                                placeholder="Shop Address"
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

export default SellerRegister;