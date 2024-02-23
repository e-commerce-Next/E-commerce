"use client"
import React, { useState } from "react";
import Nav from '../Navbar/page';
import SellerNav from '../SellerNavBar/page';
import axios from "axios";

const SellerProductEdit = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [pName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productDescription, setProductDescription] = useState<string>("");
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [productPromotion, setProductPromotion] = useState<number>(0);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const add = () => {
        axios.post('http://localhost:8080/product/addpro/1', {
            productName: pName,
            description: productDescription,
            Quantity: productQuantity,
            price: productPrice,
            promotion: productPromotion
        }).then(() => {
            
        }).catch((err) => { 
            console.log('err', err)
            
        });
    };

    return (
        <div>
            <Nav/>
            <SellerNav/>
            <section className='p-14 shadow-md '>
                <form className="max-w-md mx-auto">
                    <p className="text-red-500"> Add Your Product </p>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="relative z-0 w-96 mb-5 group">
                            <input className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setProductName(e.target.value)}} />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="relative z-0 w-96 mb-5 group">
                            <input className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setProductPrice(Number(e.target.value))}}/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-96 mb-5 group">
                        <input className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setProductDescription(e.target.value)}}/>
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="relative z-0 w-96 mb-5 group">
                            <input className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setProductPromotion(Number(e.target.value))}}/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Promotion</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-96 mb-10 group">
                        <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Quantity</label>
                    </div>
                    <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                        <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">
                                <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" value={quantity} readOnly onChange={(e)=>{setProductQuantity(Number(e.target.value))}}/>
                            </div>
                            <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                <button type="button" onClick={decrementQuantity} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    -
                                </button>
                                <button type="button" onClick={incrementQuantity} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{"display":"flex","justifyContent":"flex-end"}}>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">                       
                            Cancel
                        </button>
                        <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={add}>
                            Add Product
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SellerProductEdit;
