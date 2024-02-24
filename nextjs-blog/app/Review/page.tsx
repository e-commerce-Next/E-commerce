"use client"
import ReactStars from "react-rating-stars-component";
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
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext,useState, useEffect, useRef } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from 'next/navigation';
import Nav from '../Navbar/page';
import Footer from '../footer/page';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InventoryIcon from '@mui/icons-material/Inventory';
import Rating from '@mui/material/Rating';

const Review=()=>{

  const [reviews,setReview]=useState(null)


  const [data, setData] = useState([])
  const router=useRouter()
  const navigate=(path:string)=>{
  router.push(path)
  }
  
  useEffect(() => {
      fetch('http://localhost:8080/product/getall')
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err)=>console.log(err))

  }, [])

  
//   const ratingChanged = ( newrate) => {
//       setReview(newrate)
//       setreview(e.userIduser,e.idproducts)
    
//   };

   const setreview=(id:number,id2:number)=>{

        fetch(`http://localhost:8080/review/add/${id}/${id2}`, {method:'PUT', headers: {
            'Content-type': 'application/json'}
             ,body:JSON.stringify({review:reviews} )})
        
          .then((response) => response.json())
          .then((result)=>{
          console.log("added")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
 
    return (
        <div>
        <Nav/>
        <Box >
        </Box>
    <Box sx={{paddingLeft:"280px", paddingRight:'120px',gap:"10px", paddingTop:"100px", width:'100%'}}>
      {data.map((e) => {
        
        return (
          <Box
          display={"inline-flex"}
          sx={{ marginRight: "30px" }}
          >
            
            <Card
              sx={{
                width: 500,
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
                  src={e.images[0].image}
                  alt="product"
                />
              </AspectRatio>
              <Typography sx={{marginLeft:"300px",marginTop:"-50px",width:"100Px"}}>{e.description}</Typography>
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
                onClick={()=>navigate('/oneview')}
              >
                <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                Add to Cart
              </Button> 

              <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                <Typography level="title-lg">{e.productName}</Typography>
                <CardContent orientation="horizontal">
                  <Typography
                    fontSize="s"
                    fontWeight="lg"
                    sx={{ color: "red" }}
                  >
                    ${e.price}
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                     <Rating name="read-only" value={parseInt(e?.reviews[0]?.review)} 
                   
                     onChange={(event, newValue) => {
                        setReview(newValue);
                        setreview(e.userIduser,e.idproducts)

                    }}
                   />
                
                    <span style={{ marginTop: "0px" }}>
                      ({e.reviews.length}){console.log(reviews)}
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
    )
    

}

export default Review