import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import WatchIcon from '@mui/icons-material/Watch';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Link from "next/link";

const Categories = () => {
  return (
    <Container sx={{ marginTop: "30px" }}>
      <Box>
        <div
          style={{
            height: "40px",
            width: "20px",
            borderRadius: "4px",
            backgroundColor: "rgba(219, 68, 68, 1)",
          }}
        >
          <Typography
            sx={{
              marginLeft: "30px",
              fontFamily: "Poppins",
              color: "rgba(219, 68, 68, 1)",
              // paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            Categories
          </Typography>
        </div>
        <Typography
          fontSize={36}
          fontFamily={"Inter"}
          letterSpacing={"4%"}
          textColor={"common.black"}
        >
          Browse By Category
          {/* <h1 className="text-blue-500"> hello  </h1> */}
        </Typography>
      </Box>
      <Box marginTop={5} maxWidth={'100%'} sx={{display:'inline-flex', gap:'15px'}}>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <PhoneIphoneIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
          <Link href="/sorteproducts/Phones">  <Typography>Phones</Typography> </Link>
        </Button>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <LaptopIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
          <Link href="/sorteproducts/Computers">  <Typography>Computers</Typography> </Link>
        </Button>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <WatchIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
          <Link href="/sorteproducts/SmartWatch">  <Typography>SmartWatch</Typography> </Link>
        </Button>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <PhotoCameraIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
          <Link href="/sorteproducts/Cameras">  <Typography>Cameras</Typography> </Link>
        </Button>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <HeadphonesIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
          <Link href="/sorteproducts/Headphones">  <Typography>Headphone</Typography> </Link>
        </Button>
        <Button variant="outlined" sx={{color:"black", width: 200, height: 160, display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <VideogameAssetIcon sx={{fontSize:'50px', opacity:'0.8'}}/>
         
          <Link href="/sorteproducts/Gaming">  <Typography>Gaming</Typography> </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Categories;
