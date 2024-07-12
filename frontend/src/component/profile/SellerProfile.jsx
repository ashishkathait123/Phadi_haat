import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SellerProfile = () => {
  const { id: sellerId } = useParams();
  const [sellerDetails, setSellerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        console.log('Fetching seller profile for ID:', sellerId); // Add logging
        const response = await axios.get(`http://localhost:4000/api/v1/seller/${sellerId}`);
        console.log('Seller profile fetched successfully:', response.data.data); // Add logging
        setSellerDetails(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching seller profile:', err); // Add logging
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSellerDetails();
  }, [sellerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { fullName, phoneNumber, email, shopName, shopAddress, profileImage } = sellerDetails;

  return (
    <div className="min-h-screen bg-green-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="path/to/logo.png" alt="Pahadi Haat Logo" className="h-10" />
            <h1 className="text-2xl font-bold ml-4">Pahadi Haat</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-gray-900">Sign up</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4">
              <img src={profileImage} alt={`${fullName}'s profile`} className="h-24 w-24 rounded-full" />
              <div>
                <h2 className="text-2xl font-bold">{fullName}</h2>
                <p className="text-gray-600">Contact No-{phoneNumber}</p>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
            <hr className="my-4 w-full" />
            <div>
              <p className="text-gray-600">Shop Name-{shopName}</p>
              <p className="text-gray-600">Shop Address-{shopAddress}</p>
            </div>
            <Link to="/edit-profile" className="text-blue-500 hover:underline mt-4 block">Edit Profile</Link>
          </div>
          <div className="bg-green-50 p-8">
            <h3 className="text-xl font-bold mb-4">Inventory</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-lg p-4">
                <img src="path/to/product.jpg" alt="Product" className="h-40 w-full object-cover rounded-lg" />
                <h4 className="text-lg font-bold mt-4">MAGGI 2-Minute Instant Masala Noodles</h4>
                <p className="text-gray-600">140g</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-700">Price: ₹28</span>
                  <div className="flex items-center space-x-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                    <span>25</span>
                    <button className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                  </div>
                </div>
              </div>
              {/* Add more product cards as needed */}
            </div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center mt-4">
              <FaPlus className="mr-2" /> Add Products
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerProfile;