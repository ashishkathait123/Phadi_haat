import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/login/Register';
import Profile from './component/profile/Profile';
import Item from './component/shop/Item';
import Shop from './component/shop/Shop';
import ItemForm from './component/insert/ItemForm';
import ShopForm from './component/insert/ShopForm';
import About from './component/about/About';
import Navbar from './component/navbar/Navbar';
import ProductPage from "./shop_1/ProductPage";
<<<<<<< HEAD
import Seler from './seller/Seler';
import ProductCard from './component/productCard/ProductCard';
import ItemCard from './component/shop/ItemCard';
import ProductList from './component/productCard/ProductList';
function App() {
 
=======
import SellerRegister from './component/Registation/SellerRegister';
import DriverRegister from './component/Registation/DriverRegister';
import DriverProfile from './component/profile/DriverProfile';
>>>>>>> 33950b69766c65d4b47a40825588b3582d3bdaa1

function App() {
  console.log("Rendering App component");
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/profile' element= {<Profile />}/>
        <Route path='/item' element= {<ItemCard />}/>
        {/* <Route path='/shop' element= {<Shop />} /> */}
        <Route path='/itemform' element= {<ItemForm />} />
        <Route path='/shopForm' element= {<ShopForm />} />
        <Route path='/about' element= {<About />} />    
        <Route path='/product' element= {<ProductPage />} /> 
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
          
      </Routes>
=======
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/item' element={<Item />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/itemform' element={<ItemForm />} />
          <Route path='/shopForm' element={<ShopForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/registration/Seller' element={<SellerRegister />} />
          <Route path='/registration/Driver' element={<DriverRegister />} />
          <Route path='/driver-profile/:id' element={<DriverProfile />} /> {/* Ensure this route is correct */}
        </Routes>
>>>>>>> 33950b69766c65d4b47a40825588b3582d3bdaa1
      </BrowserRouter>
    </>
  )
}

export default App