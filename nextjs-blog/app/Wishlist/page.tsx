"use client"
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Favorite from "@mui/icons-material/Favorite";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext,useState, useEffect, useRef } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from 'next/navigation';
import Nav from '../Navbar/page';
import Footer from '../footer/page';
import "./wishlist.css"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InventoryIcon from '@mui/icons-material/Inventory';

const Wishlist = () => {

    const router=useRouter()
    const navigate=(path:string)=>{
    router.push(path)
    }
    const [data, setData] = useState([])
    const [refresh, setrefresh] =useState(true)

    useEffect(()=>{
        const id = localStorage.getItem("id")
         fetch(`http://localhost:8080/favorit/getall/${id}`,{method:'GET', headers: {
            'Content-type': 'application/json'}})
          .then((response) => response.json())
          .then((result)=>{
           setData(result)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [refresh])

    const hundledislike = (id) => {
        fetch(`http://localhost:8080/favorit/dislike/${id}`,{method:'DELETE', headers: {
            'Content-type': 'application/json'}})
          .then((response) => response.json())
          .then((result)=>{
            // navigate('/wishlist')
            setrefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
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
    <div>
        <Nav/>
        <Box >
    
      {/* <Button sx={{marginTop:"30px",backgroundColor:"rgb(171, 171, 171)",color:"rgb(91, 144, 218)"}}>Home</Button>
      <Button sx={{marginTop:"35px",backgroundColor:"#DB4444",color:"rgb(91, 144, 218)"}}>Confirm Purshase</Button>
      <Button sx={{marginTop:"35px",backgroundColor:"#DB4444",color:"rgb(91, 144, 218)"}}>Add to Cart</Button>
      <Button sx={{marginTop:"35px",backgroundColor:"#DB4444",color:"rgb(91, 144, 218)"}}>Contact Us</Button>
     */}
      <div className="main" style={{marginTop:"200px",marginLeft:"170px",marginBottom:"70px"}}>
  <div className="up">
    <button className="card1" onClick={()=>{navigate("/")}}>
    
      <HomeIcon sx={{marginTop:"40px",marginLeft:"20px"}}/>
      <svg
       
        viewBox="0,0,256,256"
        width="30px"
        height="30px"
        fillRule="nonzero"
        className="instagram"
     
      >
        <g
          fillRule="nonzero"
          stroke="none"
          strokeWidth={1}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          strokeDasharray=""
          strokeDashoffset={0}
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8,8)">
           
          </g>
        </g>
      </svg>
    </button>
    <button className="card2" onClick={()=>{navigate("/Cart")}}>
      <ShoppingCartIcon sx={{marginTop:"40px",color:"rgb(232, 78, 78)"}}/>
      <svg
       
        viewBox="0 0 48 48"
        width="30px"
        height="30px"
        className="twitter"
      >
      </svg>
    </button>
  </div>
  <div className="down">
    <button className="card3" onClick={()=>{navigate("/Contact")}}>
    <AddIcCallIcon sx={{marginTop:"8px",color:"rgb(232, 78, 78)"}}/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
        className="github"
      >
        {" "}
        
      </svg>
    </button>
    <button className="card4" onClick={()=>{navigate("/")}}>
    <InventoryIcon sx={{marginTop:"8px",marginRight:"10px"}} />
      <svg
        height="30px"
        width="30px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className="discord"
      >
       
      </svg>
    </button>
  </div>
</div>


    
        </Box>
    <Box sx={{paddingLeft:"600px", paddingRight:'120px',gap:"10px", paddingTop:"-200px", width:'80px',marginTop:"-360px"}}>
      {data.map((e) => {
        return (
          <Box
            display={"inline-flex"}
            sx={{ marginRight: "30px" }}
          >
            
            <Card
              sx={{
                width: 600,
                marginTop: "30px",
                backgroundColor: "rgba(245, 245, 245, 1)",
              }}
            >
              <div>
              <IconButton
                      aria-label="bookmark Bahamas Islands"
                      variant="plain"
                      color="neutral"
                      size="md"
                      sx={{
                        position: "absolute",
                        top: "0.3rem",
                        right: "0.5rem",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        zIndex: 1,
                      }}
                      onClick={()=>hundledislike(e.idfavorit)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
               
              </div>
              <AspectRatio
                sx={{ maxWidth: "40%", marginLeft: "40px" }}
                minHeight="120px"
                maxHeight="200px"
              >
                <img
                  style={{ width: "500px", height: "150px" ,borderRadius:"10px"}}
                  src={e.product.images[0].image}
                  alt="product"
                />
              </AspectRatio>
              <Typography sx={{marginLeft:"400px",marginTop:"-50px",width:"100Px"}}>{e.product.description}</Typography>
              <Button
                disabled={false}
                
                fullWidth
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{
                   
                  alignSelf: "center",
                  fontWeight: 600,
                  backgroundColor: "black",
                  borderRadius: "none",
                }}
                onClick={()=>{addtoCart({product:product,userIduser:userId})}}
              >
                <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                Add to Cart
              </Button> 

              <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                <Typography level="title-lg">{e.product.productName}</Typography>
                <CardContent orientation="horizontal">
                  <Typography
                    fontSize="s"
                    fontWeight="lg"
                    sx={{ color: "red" }}
                  >
                    ${e.product.price}
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                    <Rating
                      name="half-rating"
                      defaultValue={e.product.reviews.length}
                      precision={0.5}
                      readOnly
                    />
                    <span style={{ marginTop: "0px" }}>
                      ({e.product.reviews.length})
                    </span>
                  </Stack>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
    <Footer/>
    </div>
  );
}

export default Wishlist