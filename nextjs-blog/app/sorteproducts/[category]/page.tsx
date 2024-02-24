"use client";
import { useState, useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { IoPhonePortraitSharp } from "react-icons/io5"
import { MdSportsBaseball, MdHome } from 'react-icons/md';
import { RiComputerLine, RiBook3Line, RiBriefcaseLine, RiCameraLine } from 'react-icons/ri';
import { LiaGamepadSolid } from "react-icons/lia";
import Link from "next/link";
import Nav from "../../Navbar/page";
import { useRouter } from 'next/navigation';




export default function sortedProducts(props) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;


  const router=useRouter()
  const navigate=(path:string)=>{
  router.push(path)
  }



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

  
const addtoCart=(obj)=>{
    fetch(`http://localhost:8080/cart/add`,{method:'POST', headers: {
       'Content-type': 'application/json'},
        body:JSON.stringify(obj)
     })
     .then((response) => response.json())
     .then((result)=>{
     console.log(result,"added")
        })
      .catch((err)=>{
       console.log(err);
        })
    }


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
   <>
   <Nav/>
        <div className="text-center p-10" >
    
                <div className="flex justify-center">
                    <div className="flex flex-col items-center mr-8  shadow-md rounded-xl duration-500  hover:shadow-xl cursor-pointer" onClick={() => navigate("/sorteproducts/Sports")}>
                        <MdSportsBaseball className="text-gray-500 w-28 h-8" />
                       <span className="block text-center  text-black-500">Sports</span>
                    </div>
                    <div className="flex flex-col items-center mr-8  shadow-md rounded-xl duration-500  hover:shadow-xl cursor-pointer"  onClick={() => navigate("/sorteproducts/Phones")}>
                        <IoPhonePortraitSharp className="text-gray-500 w-28 h-8" />
                           <span className="block text-center ">Phones</span> 
                    </div>
                    <div className="flex flex-col items-center mr-8  shadow-md rounded-xl duration-500  hover:shadow-xl cursor-pointer"  onClick={() => navigate("/sorteproducts/Gaming")}>
                        <LiaGamepadSolid className="text-gray-500 w-28 h-8" />
                          <span className="block text-center">Gaming</span> 
                    </div>
                 
                    <div className="flex flex-col items-center mr-8  shadow-md rounded-xl duration-500  hover:shadow-xl cursor-pointer"  onClick={() => navigate("/sorteproducts/Computers")}>
                        <RiComputerLine className="text-gray-500 w-28 h-8" />
                       <span className="block text-center">Computers</span>
                    </div>
            
                    <div className="flex flex-col items-center  shadow-md rounded-xl duration-500  hover:shadow-xl cursor-pointer" onClick={() => navigate("/sorteproducts/Cameras")}>
                        <RiCameraLine className="text-gray-500 w-28 h-8" />
                        <span className="block text-center">Cameras</span>
                    </div>
                </div>
    
    <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
  

      {currentProducts.map((product,index)=>{
        return (
            <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a>
                <img src={product.images[0] &&  product.images[0].image} alt="Product" className="h-72 w-72 object-cover rounded-t-xl" />
             
                        <div className="flex justify-between">
                            <button onClick={()=>{addtoCart({product:product,userIduser:7})}}><LuShoppingCart className="text-black w-28  h-8" /></button>
                            <button><FiHeart className="text-black w-28  h-8" /></button>
                        </div>
                <div className="px-4 py-3 w-72">
              <div> {helperTagPromotion(product)}</div>
                    <span className="text-gray-400 mr-3 uppercase text-xs">{product.categories[0].categoryname}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize text-left">{product.productName}</p> <br />
                    <span className="text-gray-400 mr-3 uppercase text-sm">{product.description}</span>
                   
                    <div className="flex items-center">
                      
                    </div>
                </div>
            </a>
        </div>  

        
        )
    })}
    </section>
    <div className="mt-4 flex justify-center">
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${
                            currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
    </div>
    </>
  );
}

