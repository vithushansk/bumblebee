import { Component } from "react";

class RegisterCustomer extends Component{
    render(){
        return(
            <>
            <div className="w-full h-screen bg-fuchsia-400 flex justify-center items-center">
                <div className="w-3/5 h-5/6 bg-white rounded-lg shadow-md flex">
                    <div className="w-1/3 h-full p-4 flex flex-col justify-around bg-fuchsia-800 rounded-tl-lg rounded-bl-lg">
                        <h1 className="font-semibold text-4xl text-center text-white">BumbleBee</h1>
                        <img src="register.svg"/>
                        <h1 className="font-semibold text-md text-center text-white">Buy now, Pay Later</h1>
                        <h1 className="text-sm text-center text-white">Ideal Choice</h1>
                    </div>

                    <div className=" w-2/3 p-5 h-full flex flex-col justify-evenly items-center">
                        <div className="w-full h-1/6 flex flex-col justify-evenly">
                            <h1 className="font-medium text-xl text-center">CUSTOMER REGISTRATION</h1>
                            <hr/>
                        </div>

                        <div className="flex w-full justify-center">
                            <form>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2">
                                        <div className="flex flex-col">
                                            <label className="font-medium text-sm">Firstname</label>
                                            <input type="text" name="firstname" className="border p-2 rounded"/>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-medium text-sm">Lastname</label>
                                            <input type="text" name="lastname" className="border p-2 rounded"/>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm">Address</label>
                                        <input type="text" name="address"  className="border p-2 rounded"/>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm">District</label>
                                        <select className="border p-2 rounded">
                                            <option>Select district</option>
                                            <option>Batticaloa</option>
                                            <option>Trincomalee</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm">Mobile</label>
                                        <input type="text" name="mobile"  className="border p-2 rounded placeholder:italic"/>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                    <button type="submit" className="bg-fuchsia-700 p-2 rounded mt-3 font-medium hover:bg-fuchsia-800">REGISTER</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default RegisterCustomer;