import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Adjust the import path based on your file structure
import img23 from '/imga2.png'; // Adjust the import path based on your file structure

const initialProducts = [
  {
    imgSrc: './Background.png',
    altText: 'Sunfeast Dark Fantasy Choco Fills',
    name: 'Sunfeast Dark Fantasy Choco Fills',
    description: 'Original Filled Cookies with Choco',
    weight: '75 g',
    price: '₹38',
    originalPrice: '₹40',
    discount: true,
    discountLabel: '5% Off'
  },
  {
    imgSrc: 'path/to/nissin.jpg',
    altText: 'MAGGI 2-Minute Instant Masala Noodles',
    name: 'MAGGI 2- Minute Instant Masala Noodles',
    description: '',
    weight: '140g',
    price: '₹28',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: 'path/to/cadbury.jpg',
    altText: 'Cadbury Dairy Milk Chocolate Bar',
    name: 'Cadbury Dairy Milk Chocolate Bar',
    description: '',
    weight: '23g',
    price: '₹20',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: 'path/to/eastern.jpg',
    altText: 'Eastern Kashmiri Chilli',
    name: 'Eastern Kashmiri Chilli',
    description: '',
    weight: '100 g',
    price: '₹77',
    originalPrice: '₹110',
    discount: true,
    discountLabel: '30% Off'
  },
  {
    imgSrc: 'path/to/pristine.jpg',
    altText: 'Prolyte ORS Liquid - Orange Flavour',
    name: 'Prolyte ORS Liquid - Orange Flavour',
    description: '',
    weight: '200 ml',
    price: '₹31.5',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: 'path/to/dairyday.jpg',
    altText: 'Dairy Day Choco Bar',
    name: 'Dairy Day Choco Bar',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: true,
    discountLabel: '1% Off'
  },
  {
    imgSrc: 'path/to/thumbsup.jpg',
    altText: 'Thumb Up Soft Drink',
    name: 'Thumb Up Soft Drink',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: 'path/to/lotte.jpg',
    altText: 'Lotte Choco Pie',
    name: 'Lotte Choco Pie Chocolate Cake',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: 'path/to/bingo.jpg',
    altText: 'Bingo! Chilli Sprinkled Potato Chips',
    name: 'Bingo! Chilli Sprinkled Potato Chips',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: false
  },
  {
    imgSrc: img23,
    altText: 'Dabur Cold Pressed Mustard Oil',
    name: 'Dabur Cold Pressed Mustard Oil',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: false
  }
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    imgSrc: '',
    altText: '',
    name: '',
    description: '',
    weight: '',
    price: '',
    originalPrice: '',
    discount: false,
    discountLabel: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProduct({
      imgSrc: '',
      altText: '',
      name: '',
      description: '',
      weight: '',
      price: '',
      originalPrice: '',
      discount: false,
      discountLabel: ''
    });
  };

  return (
    <div className="overall flex flex-col items-center justify-start h-screen bg-cover bg-center p-10 container mx-auto overflow-x-scroll hide-scrollbar">
      <h1 className="text-3xl font-bold mb-5">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            altText={product.altText}
            name={product.name}
            description={product.description}
            weight={product.weight}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            discountLabel={product.discountLabel}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Add New Product</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="imgSrc"
            value={newProduct.imgSrc}
            onChange={handleChange}
            placeholder="Image Source"
            className="border p-2"
          />
          <input
            type="text"
            name="altText"
            value={newProduct.altText}
            onChange={handleChange}
            placeholder="Alt Text"
            className="border p-2"
          />
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2"
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2"
          />
          <input
            type="text"
            name="weight"
            value={newProduct.weight}
            onChange={handleChange}
            placeholder="Weight"
            className="border p-2"
          />
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2"
          />
          <input
            type="text"
            name="originalPrice"
            value={newProduct.originalPrice}
            onChange={handleChange}
            placeholder="Original Price"
            className="border p-2"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              name="discount"
              checked={newProduct.discount}
              onChange={handleChange}
              className="mr-2"
            />
            Discount
          </label>
          <input
            type="text"
            name="discountLabel"
            value={newProduct.discountLabel}
            onChange={handleChange}
            placeholder="Discount Label"
            className="border p-2"
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductList;
