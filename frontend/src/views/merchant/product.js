import TopBar from '../../components/compMerchant/topBar'
import SideBar from '../../components/compMerchant/sideBar'

import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Product(){
   
   //CREEATE NEW PRODUCT OPERATION
   const [inputs,setInputs] = useState({
        name:"",
        category:"",
        brand:"",
        price:"",
        qty:""
    });

    const handleInputChange = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/product/add',inputs)
        .then((response) => {
            alert(response.data)
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //GET ALL PRODUCT & SHOW INTO TABLE
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get("http://localhost:5000/product/view");
        setProduct(response.data);
        console.log(response.data);
    };

     //View & Hide new Product add form
     function ModelViewer()
     {
      const model = document.getElementById("model");
      model.classList.toggle('flex');
      model.classList.toggle('hidden');
     }

    return(
        <>
            <div className="flex flex-col">
                <div>
                    <TopBar/>
                </div>

                <div className="flex">
                    <div>
                        <SideBar/>
                    </div>

                    <div className="p-5 w-full">
                            <p className="text-xl font-medium">ADD PRODUCT</p>
                        <div className="bg-zinc-200 w-full p-5 rounded-md flex gap-5">
                            <div className="flex flex-col w-full gap-3">
                                <div className="flex justify-end">
                                    <button onClick={ModelViewer} className="bg-blue-600 p-2 text-md font-medium text-zinc-100 rounded-md hover:bg-blue-900 drop-shadow-lg">+ Add Product</button>
                                </div>

                                <div className="w-full">
                                    <table className="w-full text-left table-auto">
                                        <thead className="bg-zinc-800 text-zinc-100 rounded text-center">
                                            <tr className="h-10  border-white">
                                                <th className="border border-slate-300">ID</th>
                                                <th className="border border-slate-300">Name</th>
                                                <th className="border border-slate-300">CATEGORY</th>
                                                <th className="border border-slate-300">BRAND</th>
                                                <th className="border border-slate-300">SELL PRICE</th>
                                                <th className="border border-slate-300">STOCK IN HAND</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {product.map((product,index) =>(
                                            
                                            <tr className="even:bg-white odd:bg-gray-100 h-8"> 
                                                <td className='text-center'>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.category}</td>
                                                <td>{product.brand}</td>
                                                <td className='text-center'>{product.price}</td>
                                                <td className='text-center'>{product.qty}</td>
                                                
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div id="model" className="h-screen w-full fixed left-0 top-0 justify-center items-center bg-black bg-opacity-60 hidden">
                            <div className="bg-white rounded shadow-lg w-1/2">
                                <div className="text-2xl font-bold text-zinc-800 p-2 flex justify-between">
                                    <h1>ADD NEW PRODUCT</h1>
                                    <button className="btn-close" onClick={ModelViewer} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <hr/>

                                {/* Model Contant section */}
                                <div className="p-5 flex justify-center border">
                                    <form className="flex flex-col itwms-center w-3/4 gap-2" onSubmit={handleSubmit}>
                                        <label htmlFor="name" className="font-medium text-sm">Product Name</label>
                                        <input type="text" 
                                            value={inputs.name} 
                                            onChange={handleInputChange} 
                                            name="name" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <label htmlFor="category" className="font-medium text-sm">Product Category</label>
                                        <select name="category" className="border p-2 rounded" 
                                            value={inputs.category} 
                                            onChange={handleInputChange} 
                                            required>

                                            <option>Choose Category</option>
                                            <option>Mobiles</option>
                                        </select>

                                        <label htmlFor="brand" className="font-medium text-sm">Product Brand</label>
                                        <select name="brand" className="border p-2 rounded" 
                                            value={inputs.brand} 
                                            onChange={handleInputChange} 
                                            required>

                                            <option>Choose Brand</option>
                                            <option>Apple</option>
                                            <option>Samsung</option>
                                        </select>

                                        <label htmlFor="price" className="font-medium text-sm">Selling Price</label>
                                        <input type="text" 
                                            value={inputs.price} 
                                            onChange={handleInputChange} 
                                            name="price" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <label htmlFor="qty" className="font-medium text-sm">Quantity</label>
                                        <input type="number" 
                                            value={inputs.qty} 
                                            onChange={handleInputChange} 
                                            name="qty" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <button type="submit" className="bg-zinc-900 text-white p-2 rounded mt-3 font-medium hover:bg-zinc-800">CREATE PRODUCT</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        






                    </div>
                </div>
            </div>
        </>
    )
}