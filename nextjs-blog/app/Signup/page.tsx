
"use client"
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormControl, FormLabel, RadioGroup, Radio, setRef } from '@mui/material';
import { useRouter } from 'next/navigation';
import Nav from '../Navbar/page';
import Footer from '../footer/page';

const SignUp = () => {
    
      const router=useRouter()
      const navigate=(path:string)=>{
      router.push(path)
      }

    const [firstN, setFirstN] = useState('')
    const [lastN, setLastN] = useState('')
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')
    const [role, setRole] = useState('client')
    const [wrong, setWrong] = useState(true)
    const [refresh, setRefresh] = useState(true)
   
    const defaultTheme = createTheme()

    const handleSubmit = (data) => {
        fetch('http://localhost:8080/user/signup',{method:'POST', headers: {
          'Content-type': 'application/json',}
          ,body: JSON.stringify(data)})
        .then((response) => response.json())
        .then((result)=>{
            console.log(result)
            navigate('/Signin')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetch('http://localhost:8080/user/getuser',{method:'POST', headers: {
            'Content-type': 'application/json',}
            ,body:JSON.stringify({email: email})})
          .then((response) => response.json())
          .then((result)=>{
            if(result.data){
                setWrong(false)
            }
            else setWrong(true)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [refresh])

  return (
   <div>
    <Nav/>
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false} sx={{display:'flex', gap:'100px', marginTop:'15px', maxHeight:'100%', alignItems:'center'}}>
        <img src="https://res.cloudinary.com/dwcxnfihp/image/upload/v1708597717/a1c7dc5b68a42239311e510f54d8cd59_lgvq81.jpg" alt="image-signup" style={{"width":'780px', height: "600px"}}/>
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <p>Enter your details below</p>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={e=> setFirstN(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={e=> setLastN(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {wrong ? 
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address or Phone number"
                  name="email"
                  autoComplete="email"
                  onChange={e => {setEmail(e.target.value); setRefresh(!refresh)}}
                />
                : <TextField
                error
                required
                fullWidth
                id="email"
                label="Already exist, choose another"
                name="email"
                autoComplete="email"
                onChange={e => {setEmail(e.target.value); setRefresh(!refresh)}}
              />}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e => setPsw(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Sign up as</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="client"
                    name="radio-buttons-group"
                    onChange={e => setRole(e.target.value)}
                >
                    <FormControlLabel value="client" control={<Radio />} label="Client" />
                    <FormControlLabel value="seller" control={<Radio />} label="Seller" />
                </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              onClick={()=>handleSubmit({
                firstName: firstN,
                lastName: lastN,
                emailPhone: email,
                password: psw,
                role: role
            })}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:'rgba(219, 68, 68, 1)' }}
            >
              Create Account
            </Button>
         
            <Grid container justifyContent="center">
              <Grid item>Already have an account?
                <Link href="/Signin" variant="body2">
                   log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      </Container>
    </ThemeProvider>
    <Footer/>
    </div>
  )
}

export default SignUp