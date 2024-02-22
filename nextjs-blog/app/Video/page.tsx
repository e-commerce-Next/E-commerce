"use client"
import {useRef,useEffect,useState} from "react";
import {Cloudinary} from "@cloudinary/url-gen";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";


const CategoriesJBL = () => {
  
  const cld = new Cloudinary({cloud: {cloudName: 'dwcxnfihp'}});
  const cloudinaryref=useRef()

  return (

    <Container 

      sx={{
        backgroundColor: "white",
        marginTop: "100px",
        width: "100%",
        height: "450px",
        zIndex: -1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"50px"}
        gap={"20px"}
        paddingLeft={"30px"}
      >

        <div style={{marginLeft:"-120px",marginTop:"-30px",marginBottom:"20px"}}>
        <video muted={true} loop={true} autoPlay={true} style={{maxHeight:"200%",height:"510px",width:"1170px",marginLeft:"90px",borderRadius:"10px"}} src={"https://res.cloudinary.com/dwcxnfihp/video/upload/v1708529887/final4_-_Made_with_Clipchamp_iunvzp.mp4" }/> 
      </div>
       
        <Box display={"inline-flex"} gap={"20px"}>
         
        </Box>
      </Box>
       <Box zIndex={1}>
        
      </Box> 
     </Container> 

    
  );
};

export default CategoriesJBL;


