// import React, { useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [type, setType] = useState('buyer'); // Default type is 'buyer'
//     const [message, setMessage] = useState('');
//     const [redirect, setRedirect] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/register', { 
//                 name, 
//                 email, 
//                 password, 
//                 phoneNumber,
//                 type // Include type in the request payload
//             });
//             setMessage(response.data.message);
//             setRedirect(true);
//         } catch (error) {
//             setMessage(error.response.data.message);
//         }
//     };

//     if (redirect) return <Navigate to={'/login'} />;
//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-semibold mb-4">Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Existing form inputs */}
//                     {/* Name */}
//                     <div className="mb-4">
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {/* Email */}
//                     <div className="mb-4">
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {/* Password */}
//                     <div className="mb-4">
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {/* Phone Number */}
//                     <div className="mb-4">
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             type="text"
//                             placeholder="Phone Number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {/* Type */}
//                     <div className="mb-4">
//                         <select
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             value={type}
//                             onChange={(e) => setType(e.target.value)}
//                             required
//                         >
//                             <option value="buyer">Buyer</option>
//                             <option value="seller">Seller</option>
//                         </select>
//                     </div>
//                     {/* Register Button */}
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="submit"
//                     >
//                         Register
//                     </button>
//                     {/* Error message */}
//                     {message && <p className="text-red-500 mt-4">{message}</p>}
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;



import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [type, setType] = useState('buyer'); // Default type is 'buyer'
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', { 
                name, 
                email, 
                password, 
                phoneNumber,
                type // Include type in the request payload
            });
            setMessage(response.data.message);
            setRedirect(true);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    if (redirect) return <Navigate to={'/login'} />;
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3">
                <div className="md:w-1/3 bg-green-200 bg-cover bg-center" style={{ backgroundImage: "url('asset/Untitled69_20240428152145 4.png')" }}></div>
                <div className="md:w-2/3 p-8">
                    <img className="w-32 mx-auto mb-4" src="asset/pahadi haat logo 2.svg" alt="Pahadi Haat Logo" />
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-semibold text-gray-700">Create Account</h2>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700" htmlFor="type">Type</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                id="type"
                                name="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            >
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                                <option value="seller">Taxi Driver</option>
                            </select>
                        </div>
                        <button
                            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="submit"
                        >
                            Register
                        </button>
                        {message && <p className="text-red-500 mt-4">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;