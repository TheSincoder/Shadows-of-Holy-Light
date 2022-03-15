import React from 'react';
import RegisterForm from '../forms/RegisterForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {Navigate} from "react-router-dom";

export default function Register() {
  const theme=useTheme()

  return (
      <>
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Register</Typography>
        <RegisterForm/>
    </Paper>
    <Navigate to="/login"/>
    </>
  )
}