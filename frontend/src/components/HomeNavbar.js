import { Component } from "react";


class HomeNavbar extends Component{
    render(){
        return(
            <>
                <div className="bg-zinc-800 w-full h-16 flex justify-between px-5 items-center">
                    <div>
                        <p className="text-2xl font-semibold text-white">BumbleBee</p>
                    </div>

                    <div className="flex gap-5 font-medium text-white">
                        <a href="#" className="hover:border-b hover:border-white">Home</a>
                        <a href="#" className="hover:border-b hover:border-white">Discover</a>
                        <a href="#" className="hover:border-b hover:border-white">AboutUs</a>
                    </div>

                    <div>
                        <button className="px-6 py-2 border rounded-md font-medium text-white hover:bg-white hover:text-zinc-900">Login</button>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeNavbar;