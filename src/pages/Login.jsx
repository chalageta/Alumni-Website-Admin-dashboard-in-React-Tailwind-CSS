import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("http://localhost:8080/api/user/login", {
                username,
                password
            });
            if (response.status === 200) {
                navigate("/dashboard");
            }
        } catch (err) {
            toast.error("Invalid username or password");
            setError("Invalid username or password. Please retry.");
        }
    };

    return (
      <div>
       
     
        <div className="font-[sans-serif] bg-white dark:bg-gray-900 flex items-center justify-center md:h-screen p-4">
          
            <ToastContainer />

            <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div className="max-md:order-1 lg:min-w-[450px]">
                        <img src="https://readymadeui.com/signin-image.webp" className="lg:w-11/12 w-full object-cover" alt="login" />
                    </div>
                    <form className="md:max-w-md w-full mx-auto" onSubmit={handleLogin}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="mb-12">
                            <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">Sign in</h3>
                        </div>
                        <div>
                            <div className="relative flex items-center">
                                <input
                                    name="email"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 px-2 py-3 outline-none bg-transparent"
                                    placeholder="Enter email"
                                />
                                <AiOutlineMail className="text-[#bbb] dark:text-gray-400 w-[18px] h-[18px] absolute right-2" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 px-2 py-3 outline-none bg-transparent"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                />
                                <div
                                    className="absolute right-2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <AiFillEyeInvisible className="w-[18px] h-[18px] text-gray-500 dark:text-gray-400" />
                                    ) : (
                                        <AiFillEye className="w-[18px] h-[18px] text-gray-500 dark:text-gray-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="text-gray-800 dark:text-gray-200 ml-3 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="javascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline dark:text-blue-400">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-12">
                            <button type="submit" className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600">
                                Sign in
                            </button>
                            <p className="text-gray-800 dark:text-gray-300 text-sm text-center mt-6">
                                Don't have an account? <a href="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap dark:text-blue-400">Register here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
