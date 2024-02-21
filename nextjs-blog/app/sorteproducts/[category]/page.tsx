"use client";
import { useState, useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

import { MdSportsBaseball, MdHome } from 'react-icons/md';
import { RiComputerLine, RiBook3Line, RiBriefcaseLine, RiCameraLine } from 'react-icons/ri';
export default function sortedProducts(props) {
  const [products, setProducts] = useState([]);

  //   console.log(categories)

  useEffect(() => {
    fetch("http://localhost:8080/product/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "products");
        const category = data.filter((e) => {
          return (
            e.categories.length > 0 &&
            e.categories[0].categoryname === props.params.category
          );
        });
        console.log(category);
        setProducts(category);
      });
  }, []);


 const helperPricePromotion=(product)=>{
        if(product.promotion!==0){
            return (<div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                {product.price - (product.price * product.promotion / 100)}
            </div>
            <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
    
                {product.price}
            </div>
        </div>)
        
        }
        else {
            return (
                <div className="opacity-50 text-black text-base font-medium font-['Poppins'] ">
    
                {product.price}
            </div>
            )
        }
    }
    
    const helperTagPromotion=(product)=>{
        if(product.promotion!==0){
            return( <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                -{product.promotion}%
            </div>
        </div>)
        }
    }






  return (
   
        <div className="text-center p-10 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <div className="flex justify-center">
                    <div className="flex flex-col items-center mr-8 ">
                        <MdSportsBaseball className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Sports</span>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <MdHome className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Home & Garden</span>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiComputerLine className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Computers</span>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiBook3Line className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Books</span>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <RiBriefcaseLine className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Office & Stationery</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <RiCameraLine className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Cameras</span>
                    </div>
                </div>
    
    <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
      {/* <h1>{props.params.category}</h1> */}

      {products.map((e,index)=>{
        return (
            <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src={e.images[0] &&  e.images[0].image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                {helperTagPromotion(e)}
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{e.category}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{e.productName}</p>
                    <div className="flex items-center">
                        {helperPricePromotion(e)}
                        <div className="ml-auto flex">
                            <button><LuShoppingCart className="text-black w-28  h-8" /></button>
                            <button><FiHeart className="text-black w-28  h-8" /></button>
                        </div>
                    </div>
                </div>
            </a>
        </div>  

        
        )
    })}
    </section>
    </div>
  );
}

{/* <div>
<svg className="w-6 h-6 text-gray-800 dark:text-white absolute" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
</svg>
<svg className="w-6 h-6 text-gray-800 dark:text-white relative ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
</svg>
</div> */}