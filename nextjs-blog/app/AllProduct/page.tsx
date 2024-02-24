"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import NavBar from "../Navbar/page"
import Footer from "../footer/page";
import { MdSportsBaseball, MdHome } from 'react-icons/md';
import { RiComputerLine, RiBook3Line, RiBriefcaseLine, RiCameraLine } from 'react-icons/ri';
import { useRouter } from "next/navigation";
import Popup from '../Popup/Popup'
export default function AllProduct() {
    const router = useRouter()
    const navigate = (path: string) => {
        router.push(path)
    }
    const [data, setData] = useState([]);
    const [refresh,setRefresh]=useState(false)
   
    console.log('product', data)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;



    useEffect(() => {
        fetch('http://localhost:8080/product/getall')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);



    const userId =  localStorage.getItem("id")
const addtoCart= async (obj)=>{
   try {
 fetch(`http://localhost:8080/cart/add`,{method:'POST', headers: {
    'Content-type': 'application/json'},
     body:JSON.stringify(obj)
  })
  .then((response) => response.json())
  .then((result)=>{
  console.log(result,"added")})
 setRefresh(!refresh)
  
}
    
catch (error) {console.log("error")}
    }

  

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const helperPricePromotion = (product) => {
        if (product.promotion !== 0) {
            return (<div className="justify-start items-start gap-3 inline-flex">
                <div className="text-red-500 text-base font-bold font-['Poppins'] leading-normal ">
                    {product.price - (product.price * product.promotion / 100)}$
                </div>
                <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">

                    {product.price}$
                </div>
            </div>)

        }
        else {
            return (
                <div className="opacity-50 text-black text-base font-bold font-['Poppins'] ">

                    {product.price}$
                </div>
            )
        }
    }

    const helperTagPromotion = (product) => {
        if (product.promotion !== 0) {
            return (<div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-xs font-bold font-['Poppins'] leading-[18px]">
                    -{product.promotion}%
                </div>
            </div>)
        }
    }

    return (
        <div>
            <div><NavBar></NavBar></div>
            <div className="text-center p-10">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center mr-8">
                        <MdSportsBaseball className="text-gray-500 w-28 h-8" />

                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <MdHome className="text-gray-500 w-28 h-8" />

                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiComputerLine className="text-gray-500 w-28 h-8" />

                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiBook3Line className="text-gray-500 w-28 h-8" />

                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiBriefcaseLine className="text-gray-500 w-28 h-8" />
                    </div>
                    <div className="flex flex-col items-center">
                        <RiCameraLine className="text-gray-500 w-28 h-8" />

                    </div>
                </div>
            </div>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {/* {currentProducts.map((product, index) => (
                    <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                   
                            <img src={product.images[0] && product.images[0].image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" onClick={()=>{navigate(`/Product/${product.idproducts}`)}} />
                            {helperTagPromotion(product)}
                            <div className="px-4 py-3 w-72" >
                                <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{product.productName}</p>
                                <div className="flex items-center">
                                    {helperPricePromotion(product)}
                                    <div className="ml-auto flex">
                                        <button><LuShoppingCart className="text-black w-28  h-8"/></button>
                                        <button onClick={()=>{addtoCart({product:product,userIduser:7})}}><FiHeart className="text-black w-28  h-8" /></button>
                                    </div>
                                </div>
                            </div>
                  
                    </div> 
                ))} */}
                {currentProducts.map((product, index) => (
                    <div key={index} className="group my-10 max-w-md flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md" style={{ width: "300px", height: "400px" }}>
                        <a className="relative flex h-60 overflow-hidden" >
                            <img className="absolute top-0 right-0 h-full w-full object-cover" src={product.images[0] && product.images[0].image} alt="product image" onClick={()=>{navigate(`/Product/${product.idproducts}`)}} />
                            {helperTagPromotion(product)}
                            {/* <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                                <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                            </div> */}
                            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0"
                          >
                                <button className="flex h-10 w-10 items-center justify-center bg-black-900 text-white transition hover:bg-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" onClick={()=>{addtoCart({product:product,userIduser:userId})}}>
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900">{product.productName} -{product.color} </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    {/* <span className="text-3xl font-bold text-slate-900">$79</span>
                                    <span className="text-sm text-slate-900 line-through">$99</span> */}
                                    {helperPricePromotion(product)}
                                </p>
                            </div>
                            <button className="flex items-center justify-center bg-red-500 px-2 py-1 text-sm text-white transition hover:bg-red-500"
                            onClick={()=>{addtoCart({product:product,userIduser:userId})}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}

            </section>

            <div className="mt-4 flex justify-center">
                {Array.from({ length: Math.ceil(data.length / productsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    )
}
