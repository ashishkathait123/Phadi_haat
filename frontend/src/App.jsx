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
import SellerRegister from './component/Registation/SellerRegister';
import DriverRegister from './component/Registation/DriverRegister';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/profile' element= {<Profile />}/>
        <Route path='/item' element= {<Item />}/>
        <Route path='/shop' element= {<Shop />} />
        <Route path='/itemform' element= {<ItemForm />} />
        <Route path='/shopForm' element= {<ShopForm />} />
        <Route path='/about' element= {<About />} />    
        <Route path='/product' element= {<ProductPage />} />    
        <Route path='/registation/Seller' element=   {<SellerRegister />}  />    
        <Route path='/registation/Driver' element=   {<DriverRegister />}  />    
      </Routes>
      </BrowserRouter>
      
      {/* <div>
    <ProductPage/>
    
   </div> */}
    </>
  )
}

export default App
