import {Component} from 'react';
import CustomerNavbar from '../components/CustomerNavbar'

class Customer extends Component{
    render(){
        return(
            <>
                <CustomerNavbar/>

                <div className='m-3 flex flex-col items-center'>
                    <div className='bg-gray-100 w-3/4 p-3 rounded-full'>
                        <form className='flex gap-2'>
                            <input type="text" placeholder='Search here...' className='w-3/4 p-2 rounded-bl-full rounded-tl-full'/>
                            <button type='submit' className='flex bg-zinc-800 w-1/4 rounded-tr-full rounded-br-full justify-center items-center font-medium text-zinc-50'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                                </svg>
                                <span>SEARCH</span>
                            </button>
                        </form>
                    </div>

                    {/* Categories Section */}

                    <section className='bg-gray-100 w-full mt-5 rounded-lg p-3'>
                        <p className='text-xl font-medium'>Category</p>
                        <hr/>
                        <div className='flex justify-around items-center text-zinc-100 mt-5'>
                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='men.svg' className='w-10 h-10'/>
                                <span>Men</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='women.svg' className='w-10 h-10'/>
                                <span>Women</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='home.svg' className='w-10 h-10'/>
                                <span>Home Appliances</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='travel.svg' className='w-10 h-10'/>
                                <span>Travel</span>
                            </a>
                        </div>

                        <div className='flex justify-around items-center text-zinc-100 mt-5'>
                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='men.svg' className='w-10 h-10'/>
                                <span>Electrices</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='women.svg' className='w-10 h-10'/>
                                <span>Electronics</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='home.svg' className='w-10 h-10'/>
                                <span>Home Appliances</span>
                            </a>

                            <a href='#' className='bg-zinc-800 p-3 w-1/5 rounded-lg flex items-center gap-2'>
                                <img src='travel.svg' className='w-10 h-10'/>
                                <span>Travel</span>
                            </a>
                        </div>

                        
                        

                    </section>


                </div>
            </>
        );
    }
}

export default Customer;