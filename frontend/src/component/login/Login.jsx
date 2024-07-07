import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            setLoading(false);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setMessage('Login successful');
                setRedirect(true);
            } else {
                setMessage('Token not found in response');
            }
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Login failed');
            } else {
                setMessage('Login failed');
            }
            console.error(error);
        }
    };

    if (redirect) return <Navigate to={'/'} />;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3">
                <div className="md:w-1/3 bg-green-200 bg-cover bg-center" style={{ backgroundImage: "url('')" }}></div>
                <div className="md:w-2/3 p-8">
                    <img className="w-32 mx-auto mb-4" src="asset/pahadi haat logo 2.svg" alt="Pahadi Haat Logo" />
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-semibold text-gray-700">Login</h2>
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
                        <button
                            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login Account'}
                        </button>
                        {message && <p className="text-red-500 mt-4">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
