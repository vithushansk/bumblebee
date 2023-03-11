import { Component } from "react";

class Login extends Component{
    render(){
        return(
            <>

            <div className="w-full h-screen bg-fuchsia-400 flex justify-center items-center">
                <div className="w-1/2 h-3/4 bg-white rounded-lg shadow-md flex">
                    <div className="w-1/2 h-full p-4 flex flex-col justify-around bg-fuchsia-800 rounded-tl-lg rounded-bl-lg">
                        <h1 className="font-semibold text-4xl text-center text-white">BumbleBee</h1>
                        <img src="shopping.svg"/>
                        <h1 className="font-semibold text-md text-center text-white">Buy now, Pay Later</h1>
                    </div>
                    <div className=" w-1/2 h-full flex flex-col justify-center items-center">
                        <div className="w-full p-2">
                            <h1 className="font-medium">Login to your account</h1>
                        </div>

                        
                        <div className="w-3/4 h-3/4 flex items-center">
                            <form className="w-full flex flex-col gap-1">
                                <label className="font-medium text-sm">Username</label>
                                <input type="text" name="username" placeholder="enter your email" className="border p-2 rounded placeholder:italic"/>
                                
                                <label className="font-medium text-sm">Password</label>
                                <input type="password" name="password" placeholder="enter your password" className="border p-2 rounded placeholder:italic"/>
                                
                                <button type="submit" className="bg-fuchsia-700 p-2 rounded mt-3">LOGIN</button>
                            </form>
                        </div>

                        <div className="w-full p-2">
                            <h1 className="text-sm text-center">Don't have an account yet? <a href="#" className="font-medium text-blue-400 hover:text-blue-600">Join to BumbleBee</a></h1>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Login;