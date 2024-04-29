"use client"
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/navigation';
import Nav from '../Navbar/page';
import Footer from '../footer/page';
import  "./design.css"
import Seller from '../Seller/[id]/page'


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [wrong, setWrong] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const router=useRouter()
  const navigate=(path:string)=>{
  router.push(path)
  }

  const defaultTheme = createTheme();

  const handleSubmit = async (data) => {
    if (data.emailPhone === "brini@rbk.tn" && data.password === "123456") {
      navigate("/admin");
    } else {
      await fetch("http://localhost:8080/user/signin", {method:'POST', headers: {
        'Content-type': 'application/json'},
         body:JSON.stringify(data)})
        .then((response) => response.json())
        .then((result) => {
          author(result.iduser, result.token, result.role);
        })
        .catch((err) => {
          setWrong(false);
          console.log(err);
        });
    }
  };
 const userId =  localStorage.getItem("id")
 console.log(userId)
  const author = async (id, token, role) => {
   
    const data = { token: token };
    await fetch(`http://localhost:8080/token/add/${id}`, {method:'POST', headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${JSON.stringify(data)}`,}
       })
      .then((response) => response.json())
      .then(() => {
        fetch(`http://localhost:8080/block/check/${id}`)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result) {
              alert(
                "you are blocked by the admin, please contact with him on tel "
              );
            } else {
              localStorage.setItem("id", id)
              if (role === "client") {
                navigate(`/`);
              } else navigate(`/Seller/${userId}`);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Nav/>
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          gap: "100px",
          marginTop: "15px",
          maxHeight: "100%",
          alignItems: "center",
        }}
      >
        <div className="loop cubes" style={{marginLeft:"-280px",marginTop:"90px"}}>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
</div>
        <img
          src="https://res.cloudinary.com/dwcxnfihp/image/upload/v1708597717/a1c7dc5b68a42239311e510f54d8cd59_lgvq81.jpg"
          alt="image-signup"
          style={{ width: "780px", height: "600px" }}
        />
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in to Exclusive
            </Typography>
            <p>Enter your details below</p>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {wrong ? (
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address or Phone number"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setRefresh(!refresh);
                      }}
                    />
                  ) : (
                    <TextField
                      error
                      required
                      fullWidth
                      id="email"
                      label="wrong email or phone number"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setRefresh(!refresh);
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  {wrong ? (
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => setPsw(e.target.value)}
                    />
                  ) : (
                    <TextField
                      error
                      required
                      fullWidth
                      name="password"
                      label="wrong password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => setPsw(e.target.value)}
                    />
                  )}
                </Grid>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Button
                  onClick={() =>
                    handleSubmit({
                      emailPhone: email,
                      password: psw,
                    })
                  }
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: "150px",
                    bgcolor: "rgba(219, 68, 68, 1)",
                  }}
                >
                  Log In
                </Button>
                <Grid
                  item
                  sx={{
                    float: "right",
                    cursor: "pointer",
                    mt: 4,
                    ":hover": { color: "red" },
                  }}
                >
                  Forget Password?
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Container>
    </ThemeProvider>
    <Footer/>
    </div>
  );
};

export default SignIn;
