import React from 'react';
import profileImg from "../assets/Ellipse 2.png";
import shopImg from "../assets/Rectangle 9.png";
import starImg from "../assets/Star 1.png";
import arrowImg from "../assets/Arrow 1.png";
import productImg from "../assets/8badab49-5be9-4547-bd2a-d36244b0f97c-13.png"; // Corrected import statement
import productImg2 from "../assets/8badab49-5be9-4547-bd2a-d36244b0f97c-11.png"; // Corrected import statement
import productImg3 from "../assets/bourbon.png"; // Corrected import statement
import productImg4 from "../assets/oil.png";
import first_img from "../assets/downloasdd.jpg";
import Inventory_card from "./Inventory_card";

function Seller() {
  const products = [
    {
      image: productImg,
      description: 'Britannia Bourbon Cream Biscuits',
    },
    {
      image: productImg2,
      description: 'Parle-G Biscuits',
    },
    {
      image: productImg3,
      description: 'Bourbon Cream Biscuits',
    },
    {
      image: productImg4,
      description: 'Sunfeast oils B',
    }
    // add more products as needed
  ];

  return (
    <div className="bg-green-50 min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={first_img} alt="Pahadi Haat Logo" className="w-12 h-12" />
          <span className="ml-4 text-2xl font-bold">Pahadi Haat</span>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search for" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <div className="ml-4">
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
            <a href="/register" className="ml-4 text-blue-600 hover:underline">Sign up</a>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Seller Profile</h1>
            <a href="#" className="text-blue-600 hover:underline">Edit Profile</a>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3">
              <img src={profileImg} alt="Profile Image" className="w-full rounded-lg" />
            </div>
            <div className="w-2/3">
              <img src={shopImg} alt="Shop Image" className="w-full rounded-lg" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Arjun General Store</h2>
            <p className="text-lg">Shop ID-HOP14XX80<br />Ganesh Chowk, Baurari</p>
            <div className="flex items-center mt-2">
              <span className="text-xl font-bold">4.0</span>
              <img src={starImg} alt="Star" className="w-6 h-6 ml-2" />
              <span className="ml-2 text-lg">Ratings</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Inventory</h2>
            <img src={arrowImg} alt="Arrow" className="w-6 h-6" />
          </div>
          <div className="flex items-center mb-4">
            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6">
                <path fill="currentColor" d="M17.707 16.293l4 4-1.414 1.414-4-4a8 8 0 1 1 1.414-1.414zm-6.41-2.872a6 6 0 1 0-8.485-8.485 6 6 0 0 0 8.485 8.485z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <Inventory_card
                key={index}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-green-700 text-white text-center py-4">
        {/* Footer content */}
        <p>&copy; 2023 Pahadi Haat. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Seller;