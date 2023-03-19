import { useState } from "react";
import axios from 'axios';

export default function NewUser(){
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
        dateOfBirth:""
    });

    const handleInputChange = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/new/user',inputs)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

        return(
            <>
            <div className="w-full h-screen bg-fuchsia-400 flex justify-center items-center">
                <div className="w-1/2 h-5/6 bg-white rounded-lg shadow-md flex">
                    <div className="w-1/2 h-full p-4 flex flex-col justify-around bg-fuchsia-800 rounded-tl-lg rounded-bl-lg">
                        <h1 className="font-semibold text-4xl text-center text-white">BumbleBee</h1>
                        <img src="register.svg"/>
                        <h1 className="font-semibold text-md text-center text-white">Buy now, Pay Later</h1>
                        <h1 className="text-sm text-center text-white">Join with us</h1>
                    </div>
                    <div className=" w-1/2 h-full flex flex-col justify-center items-center">
                        <div className="w-full p-2">
                            <h1 className="font-medium text-xl text-center">Create Account</h1>
                        </div>
                        <div className="w-3/4 h-3/4 flex items-center">
                            <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
                                <label className="font-medium text-sm">Username</label>
                                <input type="text" value={inputs.username} onChange={handleInputChange} name="username" className="border p-2 rounded"/>
                                
                                <label className="font-medium text-sm">Password</label>
                                <input type="password" value={inputs.password} onChange={handleInputChange} name="password" className="border p-2 rounded"/>
                                
                                <label className="font-medium text-sm">Date of Birth</label>
                                <input type="date" value={inputs.dateOfBirth} onChange={handleInputChange} name="dateOfBirth" className="border p-2 rounded"/>
                                <button type="submit" className="bg-fuchsia-700 p-2 rounded mt-3 font-medium hover:bg-fuchsia-800">REGISTER</button>
                            </form>
                        </div>
                        <div className="w-full p-2">
                            <h1 className="text-sm text-center">Already have an account? <a href="#" className="font-medium text-blue-400 hover:text-blue-600">Login</a></h1>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    