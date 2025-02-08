import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-semibold">{currState}</h2>
                    <img 
                        src={assets.cross_icon} 
                        alt="close" 
                        className="w-5 cursor-pointer" 
                        onClick={() => setShowLogin(false)} 
                    />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {currState === "Sign Up" && (
                        <input type="text" placeholder="Your name" required className="border p-2 rounded-md outline-none" />
                    )}
                    <input type="email" placeholder="Email" required className="border p-2 rounded-md outline-none" />
                    <input type="password" placeholder="Password" required className="border p-2 rounded-md outline-none" />
                </div>
                <button className="w-full bg-[#FF6347] text-white py-2 mt-4 rounded-md hover:bg-[#FF4C3A] transition">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="flex items-start gap-2 mt-2">
                    <input type="checkbox" required className="mt-1" />
                    <p className="text-sm">By continuing, I agree to the <span className="text-[#FF6347] font-medium cursor-pointer">Terms of Use & Privacy Policy</span></p>
                </div>
                <p className="text-center mt-4 text-sm">
                    {currState === "Login" ? (
                        <>Create a new account? <span onClick={() => setCurrState("Sign Up")} className="text-[#FF6347] font-medium cursor-pointer">Click here</span></>
                    ) : (
                        <>Already have an account? <span onClick={() => setCurrState("Login")} className="text-[#FF6347] font-medium cursor-pointer">Login here</span></>
                    )}
                </p>
            </div>
        </div>
    );
};

export default LoginPopUp;
