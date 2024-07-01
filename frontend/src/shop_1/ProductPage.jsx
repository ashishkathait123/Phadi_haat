import React from 'react';

// import ProductImages from './ProductImages';
// import ProductMain from './ProductMain';
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';

const ProductPage = () => {
  const changeImage = (src) => {
    document.getElementById('mainImage').src = src;
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap md:flex-nowrap bg-green-50 rounded-lg shadow-lg p-5">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <img src="path/to/image1.jpg" alt="Product Image 1" className="w-full border border-gray-300 rounded-md cursor-pointer" onClick={() => changeImage('path/to/image1.jpg')} />
            <img src="path/to/image2.jpg" alt="Product Image 2" className="w-full border border-gray-300 rounded-md cursor-pointer" onClick={() => changeImage('path/to/image2.jpg')} />
            <img src="path/to/image3.jpg" alt="Product Image 3" className="w-full border border-gray-300 rounded-md cursor-pointer" onClick={() => changeImage('path/to/image3.jpg')} />
            <img src="path/to/image4.jpg" alt="Product Image 4" className="w-full border border-gray-300 rounded-md cursor-pointer" onClick={() => changeImage('path/to/image4.jpg')} />
          </div>
          <div className="flex justify-center">
            <img id="mainImage" src="path/to/image1.jpg" alt="Main Product Image" className="w-full border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="flex-2 ml-5">
          <h1 className="text-2xl font-bold"> Haldirams Namkeen - Aloo Bhujia (Dal), 200 g Pouch</h1>
          <div className="flex items-center my-2">
            <span className="text-yellow-500 mr-2">★★★★☆</span>
            <span className="text-sm mr-2">4.2</span>
            <a href="#" className="text-blue-500 text-sm">7445 Ratings & 64 Reviews</a>
          </div>
          <div className="text-lg font-bold my-2">
            Price: ₹52 (₹26.0 / g)
          </div>
          <div className="flex gap-2 my-5">
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Add to cart</button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Save for later</button>
          </div>
          <div className="my-5">
            <h3 className="font-bold mb-2">Pack sizes</h3>
            <div className="flex items-center mb-2">
              <input type="radio" id="pack1" name="pack-size" className="mr-2" defaultChecked />
              <label htmlFor="pack1">200 g - ₹52 (₹26.0 / g)</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="pack2" name="pack-size" className="mr-2" />
              <label htmlFor="pack2">3X42 g - ₹30 (₹23.8 / g)</label>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails />
      <ProductReviews />
    </div>
  );
};
export default ProductPage;
