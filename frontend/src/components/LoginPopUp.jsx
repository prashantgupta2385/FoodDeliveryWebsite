import React, { useState, useEffect,  useContext} from 'react';
import { assets } from '../assets/assets';
import {StoreContext} from '../context/StoreContext';
import axios from "axios"
const LoginPopUp = ({ setShowLogin }) => {
    const {url,setToken}=useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");
    const [data,setdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const  onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setdata(data=>({...data,[name]:value}));
    }
   
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const onlogin= async(event)=>{

        event.preventDefault();
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }
        console.log("API URL:", newUrl); // Debugging line
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message)
        }
    }

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
                        <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder="Your name" required className="border p-2 rounded-md outline-none" />
                    )}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder="Email" required className="border p-2 rounded-md outline-none" />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder="Password" required className="border p-2 rounded-md outline-none" />
                </div>
                <button onClick={onlogin} type="submit" className="w-full bg-[#FF6347] text-white py-2 mt-4 rounded-md hover:bg-[#FF4C3A] transition">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="flex items-start gap-2 mt-2">
                    <input required type="checkbox"  className="mt-1" />
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
