// import logo from "../assets/25e874b07f064263ab53a757338e8522-removebg-preview 1.png";
// import houseIcon from "../assets/transparent-house-icon-5 1.png";
import profileImg from "../assets/Ellipse 2.png";
import shopImg from "../assets/Rectangle 9.png";
import starImg from "../assets/Star 1.png";
import arrowImg from "../assets/Arrow 1.png";
import productImg from "../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (13).png";
import productImg2 from "../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (11).png"
import productImg3 from "../assets/bourbon"
import productImg4 from "../assets/oil"
import first_img from "../assets/downloasdd.jpg";
import Inventory_card from "./Inventory_card";

function Seller() {
  const products =  [
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
      description: ' Bourbon Cream Biscuits',
    },
    {
      image: productImg4,
      description: 'Sunfeast oils B',
    }
    // add more products as needed
  ];



  return (
    <div className="bg-green-50">
      <div className="container mx-auto">
        <div className="shop_details w-full flex mt-16 ml-24 mb-16 text-3xl font-bold">
          <span className="">
            <img src={first_img} className="w-12 m-6 " alt="" />
          </span>
          <span className="w-42 font-medium text-5xl mt-4">Shop Details</span>
        </div>

        <div className="shop_card flex gap-14 my-8 mx-14">
          <div>
            <img
              src={profileImg}
              className="mt-16 ml-12 w-64 h-76"
              alt="Profile"
            />
          </div>
          <div>
            <img src={shopImg} className=" rounded-xl" alt="Shop" />
          </div>
        </div>

        <div className=" profile flex ml-28">
          <div className="profile_name">
            <h1 className="text-6xl font-medium">Arjun General Store</h1>
            <p className="text-lg mt-4">
              shop ID-HOP14XX80 <br /> Ganesh Chowk, Baurari{" "}
            </p>
          </div>
          <div className="flex justify-end ml-96">
            <div className="rating flex bg-green-700 text-white w-24 h-12 rounded-lg items-center justify-center gap-2">
              <h2 className="text-xl">4.0</h2>
              <img src={starImg} alt="Star" className="w-7 h-7" />
            </div>
            <p className="rat text-xl font-medium mt-3 ml-1">Ratings</p>
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="deals_section mt-44 mb-12 ml-28 text-3xl font-bold">
            <span>Inventory</span>
            <img src={arrowImg} alt="Arrow" className="inline-block ml-2" />
          </div>

          <div className="flex mr-8 text-right mt-40 items-end h-10 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M17.707 16.293l4 4-1.414 1.414-4-4a8 8 0 1 1 1.414-1.414zm-6.41-2.872a6 6 0 1 0-8.485-8.485 6 6 0 0 0 8.485 8.485z"
                />
              </svg>
            </button>
          </div>
        </div>

      
        <div className="card-container grid grid-cols-5 m-16 gap-8">
          {products.map((product, index) => (
            <Inventory_card
              key={index}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>

        <footer className="footer bg-green-700 h-52 w-full mt-36">
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
}

export default Seller;
