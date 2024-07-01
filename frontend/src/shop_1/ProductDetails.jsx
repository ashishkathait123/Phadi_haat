import React from 'react';
// import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    return (
      <div className="my-10 p-5 bg-green-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Haldiram’s Namkeen – Aloo Bhujia (Del)</h2>
        <div className="mb-5">
          <h3 className="font-bold bg-green-200 p-2 rounded-md">About the Product</h3>
          <p className="bg-white p-3 rounded-md mt-2">
            Haldirams Aloo Bhujia is an authentic namkeen. This classic snack is made with chickpea flour, potato and some spices. This is a popular Indian snack that is originated from Rajasthan. It is a great accompaniment to savoury snacks that adds texture to classic Indian snacks. These are delicious and flavourful snacks. It is crispy, flavourful and textured. This delightful snack can be eaten as it is. It’s a healthy alternative to potato chips.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="font-bold bg-green-200 p-2 rounded-md">Ingredients</h3>
          <p className="bg-white p-3 rounded-md mt-2">
            Potato (44%), Edible Vegetable Oil (Cotton Seed, Corn & Palmolein Oil), Gram Pulse Flour, Tepary Beans Flour, Rice Flour, Edible Starch, Iodized Salt, *Spices & Condiments (Coriander Powder, Cumin Powder, Mango Powder, Garlic Powder, Onion Powder, Lemon Powder, Ginger Powder, Red Chilli Powder, Mace Powder, Nutmeg Powder, Timmore Powder, Mint Leaves Powder)
          </p>
        </div>
        <div className="mb-5">
          <h3 className="font-bold bg-green-200 p-2 rounded-md">Storage</h3>
          <p className="bg-white p-3 rounded-md mt-2">
            1. Store in a cool & dry place. 2. Once opened keep the material in air tight container.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="font-bold bg-green-200 p-2 rounded-md">Nutritional Facts</h3>
          <p className="bg-white p-3 rounded-md mt-2">
            Energy 684.3 kcal | Protein 10.3 g | Total Carbohydrate 42.4 g | Sugars 3.8 g | Total Fat 41.5 g | Saturated Fat 14.5 g | Trans Fat 0.1 g | Dietary Fibre 4.8 g
          </p>
        </div>
        <div>
          <h3 className="font-bold bg-green-200 p-2 rounded-md">Other Product Info</h3>
          <p className="bg-white p-3 rounded-md mt-2">
            EAN Code: 8904063203755<br />
            Country of Origin: India
          </p>
        </div>
      </div>
    );
}

export default ProductDetails;
