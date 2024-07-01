
import React from 'react';

const ProductReviews = () => {
  return (
    <div className="my-10 p-5 bg-green-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5">Rating and Reviews</h2>
      <p className="text-gray-600 mb-5">Want to rate this product? You can rate or review this product only after purchasing from bigbasket</p>
      <div className="flex flex-wrap md:flex-nowrap gap-10 mb-5">
        <div className="flex-1">
          <div className="flex items-center text-2xl text-green-700">
            4.2 <span className="text-yellow-500 ml-2">★</span>
          </div>
          <div className="text-gray-600 my-2">7445 ratings & 64 reviews</div>
          <div>
            {[
              { stars: 5, width: '70%', count: 4157 },
              { stars: 4, width: '24%', count: 1434 },
              { stars: 3, width: '13%', count: 998 },
              { stars: 2, width: '7%', count: 570 },
              { stars: 1, width: '4%', count: 296 }
            ].map((item, index) => (
              <div className="flex items-center my-2" key={index}>
                <span>{item.stars} ★</span>
                <div className="flex-1 h-2 bg-gray-200 mx-2 rounded">
                  <div className="h-full bg-green-700 rounded" style={{ width: item.width }}></div>
                </div>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          {[
            { score: 4.6, label: 'Crispness', width: '92%' },
            { score: 4.6, label: 'Flavor', width: '92%' },
            { score: 4.3, label: 'Value for Money', width: '86%' },
            { score: 4.3, label: 'Quality', width: '86%' }
          ].map((item, index) => (
            <div className="my-2" key={index}>
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-bold">{item.score}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded my-2">
                <div className="h-full bg-green-700 rounded" style={{ width: item.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;