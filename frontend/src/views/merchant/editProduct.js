import TopBar from '../../components/compMerchant/topBar'
import SideBar from '../../components/compMerchant/sideBar'

import {useState,useEffect} from 'react';
import axios from 'axios';

export default function EditProduct(){
    
    //SHOWING PRODUCTS ON PRODUCT TABLE
    const [allProduct,setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get("http://localhost:5000/product/view");
        setProduct(response.data);
        console.log(response.data);
    };

    //GET PRODUCT BY ID & SHOW THE VALUES IN TEXTBOX
    const [name,setName] = useState('');
    const [category,setCategory] = useState('');
    const [brand,setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [qty,setQty] = useState('');

    useEffect(()=>{
        getProductById();
    },[]);
   
    const getProductById = async (id) =>{
        const response = await axios.get(`http://localhost:5000/product/${id}}`);
        setName(response.data.name);
        setCategory(response.data.category);
        setBrand(response.data.brand);
        setPrice(response.data.price);
        setQty(response.data.qty);
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
                            <p className="text-xl font-medium">Manage Products</p>
                        <div className="bg-zinc-200 w-full p-2 rounded-md flex gap-5">
                            {/* Model Contant section */}
                            <div className="p-2 flex justify-center border">
                                    <form className="flex flex-col itwms-center gap-2">
                                        <label htmlFor="name" className="font-medium text-sm">Product Name</label>
                                        <input type="text" 
                                            value={name}
                                            name="name" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <label htmlFor="category" className="font-medium text-sm">Product Category</label>
                                        <select name="category" className="border p-2 rounded" 
                                            value={category}
                                            required>

                                            <option>Choose Category</option>
                                            <option>Mobiles</option>
                                        </select>

                                        <label htmlFor="brand" className="font-medium text-sm">Product Brand</label>
                                        <select name="brand" className="border p-2 rounded" 
                                            value={brand}
                                            required>

                                            <option>Choose Brand</option>
                                            <option>Apple</option>
                                            <option>Samsung</option>
                                        </select>

                                        <label htmlFor="price" className="font-medium text-sm">Selling Price</label>
                                        <input type="text" 
                                            value={price}
                                            name="price" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <label htmlFor="qty" className="font-medium text-sm">Quantity</label>
                                        <input type="number" 
                                            value={qty}
                                            name="qty" 
                                            className="border p-2 rounded" 
                                            required/>

                                        <button type="submit" className="bg-zinc-900 text-white p-2 rounded mt-3 font-medium hover:bg-zinc-800">CREATE PRODUCT</button>
                                    </form>
                            </div>
                           
                            <div className="flex flex-col w-full gap-3">
                                <div className="flex justify-between">
                                    <form>
                                        <input type="text" name="search" className="p-2 rounded w-80"/>
                                        <input type="submit" name="search" value="Search" className="p-2 rounded bg-blue-500 mx-2 w-36 font-medium shadow-md"/>
                                    </form>
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
                                                <th className="border border-slate-300">QUANTITY</th>
                                                <th className="border border-slate-300">ACTION</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {allProduct.map((product,index) =>(
                                            
                                            <tr className="even:bg-white odd:bg-gray-100 h-8"> 
                                                <td className='text-center'>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.category}</td>
                                                <td>{product.brand}</td>
                                                <td className='text-center'>{product.price}</td>
                                                <td className='text-center'>{product.qty}</td>
                                                <td className="flex justify-center gap-2 p-3">
                                                    <button href="#" onClick={()=>getProductById(product.id)} className="bg-blue-400 w-20 px-3 py-1 rounded text-sm hover:bg-blue-600">Edit</button>
                                                    <a href="#" className="bg-red-400 w-20 px-3 py-1 rounded text-sm hover:bg-red-600">Delete</a>
                                                </td>
                                            </tr>
                                            
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}