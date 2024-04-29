"use client"
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import Container from '@mui/material/Container';

 

const SlideCategories = () => {

  return (
    <Container sx={{display:'flex'}}>
  

      <Box>
        <div style={{float:'right'}}>
            <Carousel>
            <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-screen w-40vh"
                    src='https://images.unsplash.com/photo-1612478120679-5b7412e15f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29ueSUyMFdIfGVufDB8MHwwfHx8MA%3D%3D' 
                    alt="First slide"
                />
                   </Carousel.Item> 
                {/* <Carousel.Item>
                </Carousel.Item> */}
                <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-screen"
                    src='https://materialdistrict.com/wp-content/uploads/2019/07/infinitely-recyclable-biodegradable-clothing-slider-960x384.jpg'
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-screen"
                    src='https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg'
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
      </Box>
    </Container>
  );
};

export default SlideCategories;
