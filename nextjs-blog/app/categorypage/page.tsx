"use client"
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState, useEffect, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const AllProducts = () => {
const [refresh,setRefresh]=useState(false)
const [carts,setCarts]=useState([])
  const sliderRef = useRef(0);
  const scrollAmount = 100;
;
  const time = Date();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 console.log(data)
  useEffect(() => {
    fetch('http://localhost:8080/product/getall')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
       
      })
  }, [])
 

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


    return (
      <div className="grid grid-cols-4 w-4/5  mt-10  ml-auto mr-auto">
        {data?.map((e,index) => {
          return (
            <div key={index} className="w-56  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <div>
                <img className="rounded-t-lg w-sm" src={e.images[0] &&  e.images[0].image} alt="" />
  <svg className="w-6 h-6 cursor-pointer text-gray-800 dark:text-white absolute" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
  onClick={()=>{addtoCart({product:e,userIduser:7})}}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
  </svg>
  <svg className="w-6 h-6 text-gray-800 dark:text-white relative ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
  </svg>
              </div>
            
            </a>
            <div >
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{e.productName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.description}</p>
                
            </div>
        </div>)
      })}
      </div>
    )    
};

export default AllProducts;
