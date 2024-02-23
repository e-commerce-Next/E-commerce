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
 
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>



    return (
      <div className="grid grid-cols-4 w-4/5  mt-10  ml-auto mr-auto">
        {data?.map((e,index) => {
          return (
            <div key={index} className="w-56  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <div>
                <img className="rounded-t-lg w-sm" src={e.images[0] &&  e.images[0].image} alt="" />
  <svg className="w-6 h-6 text-gray-800 dark:text-white absolute" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        






         
    //         <Box key={index}
    //           display={"inline-flex"}
    //           sx={{ marginRight: "30px" }}
    //           ref={sliderRef}
    //         >
    //           <Card
    //             sx={{
    //               width: 250,
    //               marginTop: "30px",
    //               backgroundColor: "rgba(245, 245, 245, 1)",
    //             }}
    //           >
    //             <div>
    //               {e.new ? (
    //                 <Typography
    //                   sx={{
    //                     height: "25px",
    //                     width: "55px",
    //                     textAlign: "center",
    //                     fontFamily: "cursive",
    //                     borderRadius: "4px",
    //                     color: "white",
    //                     backgroundColor: "rgba(0, 255, 102, 1)",
    //                   }}
    //                 >
    //                   new
    //                 </Typography>
    //               ) : (
    //                 <Typography
    //                   sx={{
    //                     height: "25px",
    //                     width: "55px",
    //                     textAlign: "center",
    //                     fontFamily: "cursive",
    //                     borderRadius: "4px",
    //                     color: "transparent",
    //                     backgroundColor: "transparent",
    //                   }}
    //                 >
    //                   new
    //                 </Typography>
    //               )}
    //               <IconButton
    //                 aria-label="bookmark Bahamas Islands"
    //                 variant="plain"
    //                 color="neutral"
    //                 size="md"
    //                 sx={{
    //                   position: "absolute",
    //                   top: "0.3rem",
    //                   right: "0.5rem",
    //                   backgroundColor: "white",
    //                   borderRadius: "20px",
    //                   zIndex: 1,
    //                 }}
    //                 // onClick={()=>hundleLike({product:e, userIduser:localStorage.getItem("id")})}
    //               >
    //                 <FavoriteBorderIcon />
    //               </IconButton>
    //               <IconButton
    //                 aria-label="bookmark Bahamas Islands"
    //                 variant="plain"
    //                 color="neutral"
    //                 size="md"
    //                 sx={{
    //                   position: "absolute",
    //                   top: "2.8rem",
    //                   right: "0.5rem",
    //                   backgroundColor: "white",
    //                   borderRadius: "20px",
    //                   zIndex: "1",
    //                 }}
    //               >
    //                 <VisibilityIcon />
    //               </IconButton>
    //             </div>
    //             <AspectRatio
    //               sx={{ maxWidth: "90%", marginLeft: "50px" }}
    //               minHeight="120px"
    //               maxHeight="120px"
    //             >
    //               <img
    //                 style={{ width: "120px", height: "120px" }}
    //                 src={e.images[0] &&  e.images[0].image}
    //                 alt="product"
    //               />
    //             </AspectRatio>
    //             <Button
    //             //   onClick={() => navigate("/oneview", { state: e })}
    //               disabled={false}
    //               fullWidth
    //               variant="solid"
    //               size="md"
    //               color="primary"
    //               aria-label="Explore Bahamas Islands"
    //               sx={{
    //                 alignSelf: "center",
    //                 fontWeight: 600,
    //                 backgroundColor: "black",
    //                 borderRadius: "none",
    //               }}
    //             >
    //               <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
    //               Add to Cart
    //             </Button>

    //             <CardContent orientation="vertical" sx={{ gap: "5px" }}>
    //               <Typography level="title-lg">{e.productName}</Typography>
    //               <CardContent orientation="horizontal">
    //                 <Typography
    //                   fontSize="s"
    //                   fontWeight="lg"
    //                   sx={{ color: "red" }}
    //                 >
    //                   ${e.price}
    //                 </Typography>
    //                 <Stack
    //                   spacing={1}
    //                   sx={{
    //                     display: "flex",
    //                     flexDirection: "row",
    //                     gap: "5px",
    //                   }}
    //                 >
    //                   <Rating
    //                     name="half-rating"
    //                     defaultValue={e.reviews.length}
    //                     precision={0.5}
    //                     readOnly
    //                   />
    //                   <span style={{ marginTop: "0px" }}>
    //                     ({e.reviews.length})
    //                   </span>
    //                 </Stack>
    //               </CardContent>
    //             </CardContent>
    //           </Card>
    //         </Box>
    //        );
    //     })} 
    //   </Box>
    //   <Box
    //     sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    //   >
    //     <Button
    //     //   onClick={() => navigate("/allproduct")}
    //       color="neutral"
    //       sx={{
    //         mt: 3,
    //         mb: 2,
    //         width: "250px",
    //         height: "50px",
    //         bgcolor: "rgba(219, 68, 68, 1)",
    //       }}
    //     >
    //       View All Products
    //     </Button>
    //   </Box>
    // </Container>
  
};

export default AllProducts;
