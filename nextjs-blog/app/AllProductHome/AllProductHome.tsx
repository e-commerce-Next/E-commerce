"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
export default function AllProduct() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/product/getall')
            .then((res) => res.json())
            .then((data) => setData(data));

    }, [])
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
          <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
            <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All</div>
          </div>
        </div>
        <div style ={{ width:"80%",display:"flex" , justifyContent:"center" ,gap:"20px" ,flexWrap:"wrap", }}>
        {data.map((e, i )=>{
          return(
          
        // eslint-disable-next-line react/jsx-key
        <div  className="justify-center items-center gap-[30px] inline-flex">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
              <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                -{e.promotion}%
                </div>
              </div>
              <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
              <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
                Add To Cart
              </div>
              <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[34px] h-[34px] relative">
                  <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                    <IconContext.Provider value={{ size: "1.5em" }}>
                      <IoMdHeartEmpty />
                    </IconContext.Provider>
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
              <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                <img
                  className="w-[191px] h-[101px]"
                  src={e.images[0] &&  e.images[0].image}
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
              {e.name}
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
                <div className="justify-start items-start flex"><CiStar /> <CiStar /><CiStar /><CiStar /></div>
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                  ({e.ratingp})
                </div>
              </div>
            </div>
          </div>
        </div>)

        })}</div>
      </div>
    </div>
)
}