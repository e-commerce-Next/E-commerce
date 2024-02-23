"use client"
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import "bootstrap/dist/css/bootstrap.min.css"
// import Slider from "react-slick";
// import { useLocation, useNavigate } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import  redirect  from 'next/navigation'

import Carousel from 'react-bootstrap/Carousel';
import Container from '@mui/material/Container';

 

const SlideCategories = () => {

  return (
    <Container sx={{display:'flex', justifySelf:'auto'}}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          bgcolor: "background.paper",
          maxHeight: 400,
        }}
      >
        <List aria-label="Categories">
          {/* <ListItemButton sx={{ maxHeight: "24px" }} onClick={()=>{navigate("/womanfashion")}}> */}
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Woman's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }}>
          {/* <ListItemButton sx={{ maxHeight: "24px" }} onClick={()=>{}}> */}
            Men's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }}>
          {/* <ListItemButton sx={{ maxHeight: "24px" }} onClick={}> */}
            Electronics
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Home & Lifestyle
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Medicine
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Sports & Outdoor
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Baby's & Toys
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Groceries & Pets
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "24px" }} >
            Health & Beauty
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <div style={{float:'right'}}>
            <Carousel>
            <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-100"
                    src={'https://res.cloudinary.com/hzxyensd5/image/upload/v1708036896/v1bkuxkrxe25w9xy2a5b.png'}
                    alt="First slide"
                />
                   </Carousel.Item> 
                {/* <Carousel.Item>
                </Carousel.Item> */}
                <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'40vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'}
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