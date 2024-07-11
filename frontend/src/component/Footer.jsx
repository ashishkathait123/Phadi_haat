// src/Footer.jsx
import React from 'react';
import footer from "/footer1.png";

const Footer = () => {
  return (
    <div className="relative bg-gray-300 py-10 h-64 mt-20">
      <div className="flex flex-col items-center">
        <div className="relative w-full">
          <h1 className="text-3xl font-bold mb-5 text-yellow-600 text-center">Why choose us</h1>
          <div className="relative">
            <img src={footer} alt="Grocery Bag" className="w-full h-64 object-contain bg-gray-300 mt-8" />
            <div className="absolute bottom-0 left-0 w-full">
              {/* Yellow circle centered above the strip */}
              <div className="flex justify-center">
                <div className="w-20 h-10 bg-yellow-600 rounded-t-full"></div>
              </div>
              {/* Yellow strip at the bottom */}
              <div className="h-12 bg-yellow-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
