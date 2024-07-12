import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { FaShop } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartImg from "../../assets/Vector (2).png";
import Logo from "../../assets/pahadi haat logo.png";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Update the UserContext to reflect the logged-out state
    dispatch({ type: "USER", payload: null });
    // Redirect to the login page or home page
    navigate('/login');
  };

  const RenderMenu = () => {
    if (state) {
      const { userType } = state;
      return (
        <>
          {userType === 'buyer' && (
            <>
              <div>
                <Link to={"/item"}>
                  <HiOutlineShoppingBag />
                  <span>Item</span>
                </Link>
              </div>
              <div>
                <Link to={"/shop"}>
                  <FaShop />
                  <span>Shop</span>
                </Link>
              </div>
              <div>
                <Link to={"/product"}>
                  <FaShop />
                  <span>Product</span>
                </Link>
              </div>
              <div>
                <img src={CartImg} alt="Logo" />
                <span>Cart</span>
              </div>
            </>
          )}
          {userType === 'seller' && (
            <>
              <div>
                <Link to={"/item"}>
                  <HiOutlineShoppingBag />
                  <span>Item</span>
                </Link>
              </div>
              <div>
                <Link to={"/shop"}>
                  <FaShop />
                  <span>Shop</span>
                </Link>
              </div>
            </>
          )}
          {userType === 'taxi driver' && (
            <>
              <div>
                <Link to={"/profile"}>
                  <CgProfile className=" size-7" />
                  <span>Profile</span>
                </Link>
              </div>
              <div>
                <Link to={"/about"}>
                  <FcAbout />
                  <span>About</span>
                </Link>
              </div>
            </>
          )}
          <div>
            <button
              onClick={handleLogout} // Handle logout
              className="bg-red-600 p-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to={"/login"}>
            <div className="bg-blue-600 p-2 rounded-2xl px-4">Login</div>
          </Link>
          <Link to={"/register"}>
            <div className="bg-blue-600 p-2 rounded-2xl px-4">Sign Up</div>
          </Link>
        </>
      );
    }
  };

  return (
    <header className="main-header">
      <Link to={'/'} className="logo ">
        <img src={Logo} className="" alt="Logo" />
      </Link>
      <div className="cart-icons">
        <RenderMenu />
      </div>
    </header>
  );
};

export default Navbar;