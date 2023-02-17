import React, { Component, useState } from 'react'
import { Grid, TextField, Box, Button, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmailIcon from '@mui/icons-material/Email';
import PaidIcon from '@mui/icons-material/Paid';
import { Container, fontSize } from '@mui/system';
import { SEND_POSTS } from '../Api/Mutation';
import { useMutation } from "@apollo/client";
const Contact = () => {
  const [formValue, setFormValue] = useState({})
  const [createPost, { error }] = useMutation(SEND_POSTS);
  //Redbar start here....
  function RedBar() {
    return (
      <Box
        sx={{
          height: 40,
        }}
      />
    );
  }
  //handle Change---
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })

  }
  //handle submit
  const handleSubmit = () => {
    createPost({
      variables: formValue
    })
    console.log("form value--", formValue)
  }
  return (

    <Container className="mt-5">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <h1 className='text-justify fs-1'>Let's chat. <br />Tell me about your <br />project.</h1>
          <p className='fs-5 mt-3'>Let's create something together<PaidIcon color='warning' /></p>
          <div className='mail d-flex gap-2'>
            <p><EmailIcon style={{ color: 'gray' }} /></p>
            <div>
              <p> Mail me at</p>
              <p style={{ color: 'purple', fontSize: '14px' }}>alibhai1010101@gmail.com</p>
            </div>
          </div>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { width: '43ch' },
          }}
        >
          <p>Send us a mesaage<span><RocketLaunchIcon /></span></p>
          <Grid xs={6}>
            <TextField
              label="First Name"
              variant="standard"
              color="secondary"
              name='fName'
              onChange={handleChange}
              focused
            />
            <RedBar />
            <TextField
              label="Last Name"
              variant="standard"
              color="secondary"
              name='lName'
              onChange={handleChange}
              focused
            />
            <RedBar />
            <TextField
              label="Email"
              variant="standard"
              color="secondary"
              name='email'
              onChange={handleChange}
              focused
            />
            <RedBar />
            <TextField
              label="Type anything…"
              variant="standard"
              name='message'
              color="secondary"
              onChange={handleChange}
              focused
            />
            <RedBar />
            <Button variant="contained" color="secondary" endIcon={<SendIcon />} onClick={handleSubmit}>
              Send
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}

export default Contact;