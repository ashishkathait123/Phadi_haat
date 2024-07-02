import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inventory_card({ image, description }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/product');
  };

  return (
    <div className="card bg-white p-5 text-center rounded-lg w-64 shadow-lg mb-12">
      <img src={image} alt="Product" className="h-52 rounded-lg mb-5" />
      <div className="flex flex-col">
        <p className="font-semibold text-start">{description}</p>
        <p className="gram text-left mt-2">100 g</p>
      </div>
      <div className="lst mt-10 flex flex-col text-left">
        <span className="font-semibold text-lg">₹25</span>
        <button 
          className="border-2 border-red-500 text-red-500 py-2 mt-2"
          onClick={handleAddToCart}
        >
         View the Product
        </button>
      </div>
    </div>
  );
}

export default Inventory_card;
