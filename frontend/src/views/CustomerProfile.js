import {Component} from 'react';
import CustomerNavbar from '../components/CustomerNavbar'

class CustomerProfile extends Component{
    render(){
        return(
            <>
                <CustomerNavbar/>

                <div className='bg-gray-100 m-5 p-3 rounded-lg flex justify-around gap-5'>
                    <div className='bg-zinc-800 p-3 rounded-lg flex flex-col items-center w-1/4 shadow-md text-white'>
                        <p className='font-medium'>You can spend up to</p>
                        <p className='font-bold text-4xl'>Rs.15,000</p>
                    </div>
                    <div className='bg-zinc-800 p-3 rounded-lg flex flex-col items-center w-1/4 shadow-md text-white'>
                        <p className='font-medium'>Total Spending Amount</p>
                        <p className='font-bold text-4xl'>Rs.8,000</p>
                    </div>
                    <div className='bg-zinc-800 p-3 rounded-lg flex flex-col items-center w-1/4 shadow-md text-white'>
                        <p className='font-medium'>Last Purchase amount</p>
                        <p className='font-bold text-4xl'>Rs.15,000</p>
                    </div>
                </div>
            </>
        );
    }
}

export default CustomerProfile;