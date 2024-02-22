"use client"
import React, { useEffect, useState } from "react";
import "boxicons";
import { FiHeart } from "react-icons/fi";

export default function OneProduct() {
    const [product, setProdduct] = useState([])
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(product['size']);
    
    const [wish, setWish] = useState(false);

   
    useEffect(() => {
        fetch('http://localhost:8080/product/Oneproduct/3')
            .then((res) => res.json())
            .then((data) => setProdduct(data[0]));
    }, [])
    
    const availibility=(quantity:any)=>{
        if(quantity>0){
            return(<div className="text-green-500 text-sm font-normal font-['Poppins'] leading-[21px]">
            In Stock
        </div>)
        }
        if(quantity===0) {
            return (<div>
                <div className="text-red-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                            Out of stock
                        </div>
            </div>)
        }
    }
    return (
        <div className="w-1/3 h-[450px] ml-4">
            <div className="flex-col">
                <div className=" flex-col text-black text-xl font-semibold font-Inter'] leading-normal-wide">
                    <div>{product['productName']}</div>{" "}
                    <div className="mt-2">${product['price']}.00</div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                <div className="flex flex-col mt-4">
                    <div className="flex justify-between">
                        <div className="text-black text-lg font-normal font-['Poppins'] leading-[21px]">
                            ({product['']} Reviews)
                        </div>
                        {availibility(product['quantity'])}
                    </div>
                    <div className="text-black  text-xl font-normal font-['Poppins'] leading-[21px] mt-2">
                        {product['description']}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                <div className="flex justify-between mt-4">
                    <div className="text-black text-xl font-normal font-['Inter'] leading-tight tracking-wide">
                        Size:
                    </div>
                    <div className="flex">
                        <div
                            className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${size === "XS" ? "bg-red-500" : ""
                                }`}
                            onClick={() => {
                                setSize("XS");
                            }}
                        >
                            <div
                                className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${size === "XS" ? "text-white" : "text-black"
                                    }`}
                            >
                                <button>XS</button>
                            </div>
                        </div>

                        <div
                            className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${size === "XL" ? "bg-red-500" : ""
                                }`}
                            onClick={() => {
                                setSize("XL");
                            }}
                        >
                            <div
                                className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${size === "XL" ? "text-white" : "text-black"
                                    }`}
                            >
                                <button>XL</button>
                            </div>
                        </div>

                        <div
                            className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${size === "S" ? "bg-red-500" : ""
                                }`}
                            onClick={() => {
                                setSize("S");
                            }}
                        >
                            <div
                                className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${size === "S" ? "text-white" : "text-black"
                                    }`}
                            >
                                <button>S</button>
                            </div>
                        </div>

                        <div
                            className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${size === "M" ? "bg-red-500" : ""
                                }`}
                            onClick={() => {
                                setSize("M");
                            }}
                        >
                            <div
                                className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${size === "M" ? "text-white" : "text-black"
                                    }`}
                            >
                                <button>M</button>
                            </div>
                        </div>
                        <div
                            className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${size === "L" ? "bg-red-500" : ""
                                }`}
                            onClick={() => {
                                setSize("L");
                            }}
                        >
                            <div
                                className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${size === "L" ? "text-white" : "text-black"
                                    }`}
                            >
                                <button>L</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                <div className="flex mt-4">
                    <div className="w-15 h-11 relative rounded-tl rounded-bl border border-black border-opacity-50 flex items-center">
                        <div
                            className="w-[41px] h-9 flex justify-center items-center rounded-tr rounded-br"
                            onClick={() => {
                                if (count > 0) {
                                    setCount(count - 1);
                                }
                            }}
                        >
                            <button className=" text-black text-2xl">-</button>
                        </div>
                    </div>
                    <div className="w-[100px] h-11 flex border-t border-b border-black border-opacity-50 justify-center  items-center">
                        <p className="text-center">{count}</p>
                    </div>
                    <div
                        className="w-[41px] h-11 flex justify-center items-center bg-red-500 rounded-tr rounded-br"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <button className=" text-white ">+</button>
                    </div>
                    <div className="w-[165px] h-11 ml-5 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                            <button
                               
                            >
                                Buy Now
                            </button>

                        </div>
                    </div>
                    <button>
                        <FiHeart className={wish ? "text-red-500 w-28  h-8" : "text-black w-28  h-8"} />
                    </button>
                </div>
            </div>
            <div className="w-full rounded border flex-col border-black border-opacity-50 mt-8">
                <div className="p-2">
                    <div className="flex justify-start items-center gap-4">
                        <div className="">
                            <box-icon size="md" name="truck" type="solid"></box-icon>
                        </div>
                        <div className="p-2 flex-col">
                            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                                Free Delivery
                            </div>
                            <div className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
                                Enter your postal code for Delivery Availability
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-black opacity-50"></div>
                <div className="p-2">
                    <div className="flex justify-start items-center gap-4">
                        <div className="">
                            <box-icon size="md" name="refresh" animation="spin"></box-icon>
                        </div>
                        <div className=" p-2 flex-col">
                            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                                Return Delivery
                            </div>
                            <div>
                                <span className="text-black text-xs font-medium font-['Poppins'] leading-none">
                                    Free 30 Days Delivery Returns.
                                </span>
                                <span className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
                                    Details
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}