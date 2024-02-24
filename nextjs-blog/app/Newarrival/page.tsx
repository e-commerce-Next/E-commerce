import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";

const NewArrivals = () => {

  const hundleLike = (data:Object) => {
   fetch("http://localhost:8080/favorit/like", data)
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.error(err)
    })
  }
  
  return (
    <Container sx={{ marginTop: "170px" }}>
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
              paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            Featured
          </Typography>
        </div>
        <Typography
          fontSize={40}
          fontFamily={"Inter"}
          letterSpacing={"4%"}
          textColor={"common.black"}
        >
          New Arrival
        </Typography>
      </Box>

      <Box
      color={"false"}
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px",
          gap: "30px",
          width: "1170px",
          height: "600px",
        }}
      >
        <Box
          color="false"
          sx={{
            backgroundColor: "black",
            borderRadius: "4px",
            width: "570px",
            height: "600px",
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        >
          <Box display={"contents"}>
            <img style={{marginLeft:"-40px",marginTop:"50px"}}
              src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708167914/rohxwwty7eeasaiwazxn.png"
              alt="PS5"
              width={"750px"}
            />
          </Box>
        </Box>
        <Box

          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px",
            gap: "30px",
            width: "570px",
            height: "300px",
            order: 1,
          }}
        >
          <Box
           color={"false"}
            sx={{
              backgroundColor: "black",
              borderRadius: "4px",
              width: "570px",
              height: "284px",
              flex: "none",
              order: 0,
              flexGrow: 1,
            }}
          >
            <Box display={"contents"}>
              <img
                src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708172642/gr4myzl8yjzorwlyffyj.jpg"
                alt="PS5"
                width={"425px"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "0px",
              gap: "30px",
              width: "570px",
              height: "284px",
              order: 1,
            }}
          >
            <Box
            color={"false"}
              sx={{
                backgroundColor: "black",
                borderRadius: "4px",
                width: "270px",
                height: "284px",
                flex: "none",
                order: 0,
              }}
            >
              <Box>
                <img style={{marginTop:"50px"}}
                  src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708172756/bsnj6dnkjpf0n1mjdyh1.png"
                  alt="PS5"
                  width={"330px"}
                />
              </Box>
            </Box>
            <Box
            color={"false"}
              sx={{
                backgroundColor: "black",
                borderRadius: "4px",
                width: "270px",
                height: "284px",
                flex: "none",
                order: 1,
              }}
            >
              <Box>
                <img style={{marginTop:"10px"}}
                  src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708185004/y0w4vzc5wawdw3wjwb4j.png"
                  alt="PS5"
                  width={"250px"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NewArrivals;
