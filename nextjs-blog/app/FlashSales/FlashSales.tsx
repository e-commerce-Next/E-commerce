"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import Time from '../Time/Time'
import { useRouter } from "next/navigation";
import Popup from '../Popup/Popup'
export default function AllFlashsale() {
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

  const AllPromoProduct = data.filter((oneData) => {
    return oneData.promotion !== 0
  });
  const topFourPromoProducts = AllPromoProduct
  .sort((a, b) => b.promotion - a.promotion) 
  .slice(0, 4); 

  console.log('filter', AllPromoProduct);
  console.log('data', data);
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


  const userId =  localStorage.getItem("id")
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

      const like= async (obj)=>{
        try {
      fetch(`http://localhost:8080/favorit/like`,{method:'POST', headers: {
         'Content-type': 'application/json'},
          body:JSON.stringify(obj)
       })
       .then((response) => {response.json()})
      
     }
         
     catch (error) {console.log("error")}
         }



      
    return(
        <div
      style={{ display: "flex", marginTop: "1.25rem", justifyContent: "center" }}
    >
      <div className=" flex-col justify-center items-center  gap-10 inline-flex"> 
        <div className="justify-center items-end gap-[470px] inline-flex">
          <div className="justify-start items-end gap-[87px] flex">
            <div className="h-[103px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                  <div className="w-5 h-10 bg-red-500 rounded"></div>
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight ml-auto">
                  Today's
                </div>
              </div>
              <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
                Flash Sales
              </div>
            </div>
            {/* timer down */}
            <Time />
          </div>
          {/* arrow left and right */}
          <div className="justify-start items-start gap-2 flex">


          </div>
        </div>
        <div className="w-[1308px] justify-center items-start gap-[30px] inline-flex">
          {/* the card of item */}
          {/* {AllPromoProduct.map((e, i) => {
            // eslint-disable-next-line react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={i} className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                  <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                      -{e.promotion}%
                    </div>
                  </div>
                  <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
                  <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal cursor-pointer" 
                  onClick={()=>{addtoCart({product:e,userIduser:7})}}>
                    Add To Cart 
                  </div>
                  <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center"
                      >
                        <button >
                          <FiHeart className= "text-black w-28 h-8" />
                        </button>
                      </div>
                      <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex"></div>
                    </div>
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <FaEye />
                        </IconContext.Provider>
                      </div>
                      <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                        <div className="w-[19.23px] h-3.5 relative"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center
                   items-center inline-flex">
                    <img
                      className="w-[191px] h-[101px]"
                      src={e.images[0] &&  e.images[0].image}
                      
                    />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    {e.productName}
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    {e.price-(e.price*e.promotion/100)}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
        
                      {e.price}
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex">
                      <CiStar /> <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                      ({e.reviews.length})
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
          {topFourPromoProducts.map((e, i) => (
            <div key={i} className="flex-col justify-start items-start gap-4 inline-flex relative">
              {/* Product Card */}
              <div className="w-[270px] h-[250px] bg-neutral-100 rounded relative">
                {/* Discount Badge */}
                <div className="px-3 py-1 absolute left-[12px] top-[12px] bg-red-500 rounded justify-center items-center gap-2.5 inline-flex z-10">
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                    -{e.promotion}%
                  </div>
                </div>
                {/* Add To Cart Button */}
                <div className="absolute left-0 bottom-0 w-full h-[41px] bg-black rounded-bl rounded-br z-10 flex justify-center items-center cursor-pointer">
                  <div className="text-white font-medium font-['Poppins'] leading-normal" onClick={()=>{addtoCart({product:e,userIduser:userId})}}>
                  <Popup/>
                  </div>
                </div>
                {/* Heart and Eye Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10" onClick={()=>{like({product:e,userIduser:userId})}}>
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
                  { (e.reviews.reduce((total, ele) => (total + ele.review), 0) / e.reviews.length).toFixed(1) }
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