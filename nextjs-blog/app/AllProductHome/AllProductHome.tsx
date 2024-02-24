"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function AllProduct() {
  const router = useRouter()
  const navigate = (path: string) => {
      router.push(path)
  }
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/product/getall')
            .then((res) => res.json())
            .then((data) => setData(data));

    }, [])

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
              <div className="text-red-500 text-base font-bold font-['Poppins'] leading-normal ">

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
return(
    <div style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>

      <div className=" flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="justify-start items-end gap-[611px] inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
              </div>
              <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
            </div>
            <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Explore Our Products</div>
          </div>
          <button onClick={()=>{navigate('/AllProduct')}}><div className="px-10 py-3 bg-red-500 rounded justify-center items-center gap-2.5 flex">
            <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All</div>
          </div></button>
          
        </div>
        <div style ={{ width:"80%",display:"flex" , justifyContent:"center" ,gap:"20px" ,flexWrap:"wrap", }}>
        {data.map((e, i) => (
  <div key={i} className="flex-col justify-start items-start gap-4 inline-flex relative">
    {/* Product Card */}
    <div className="w-[270px] h-[250px] bg-neutral-100 rounded relative">
      {/* Discount Badge */}
      
     {helperTagPromotion(e)}
      
      {/* Add To Cart Button */}
      <div className="absolute left-0 bottom-0 w-full h-[41px] bg-black rounded-bl rounded-br z-10 flex justify-center items-center">
        <div className="text-white font-medium font-['Poppins'] leading-normal">
          Add To Cart
        </div>
      </div>
      {/* Heart and Eye Icons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
        <button><FiHeart className="text-black w-6 h-6" /></button>
        <button onClick={()=>navigate(`/Product/${e.idproducts}`)}><FaEye className="text-black w-6 h-6" /></button>
      </div>
      {/* Image */}
      <img
        className="w-full h-full object-cover rounded-t-lg"
        src={e.images[0] && e.images[0].image}
        alt={e.productName}
      />
    </div>
    {/* Product Description */}
    <div className="flex-col justify-start items-start gap-2 w-[270px]">
      <div className="text-black text-base font-bold font-['Poppins'] leading-normal"> {/* Bold and black name */}
        {e.productName}
      </div>
      <div className="justify-start items-start gap-3 inline-flex">
        {helperPricePromotion(e)}
      </div>
      <div className="justify-start items-start flex gap-1">
        <CiStar /><CiStar /><CiStar /><CiStar />
        <div className="opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
          ({e.reviews.length})
        </div>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
)
}