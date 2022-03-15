import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import { ThemeProvider } from '@mui/material/styles';
import shadowTheme from './themes/shadowTheme';
import NavBar from './components/NavBar';

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

const HomePage=()=>{return(<h1>Welcome to Shadows of Holy Light!</h1>)}

function App() {
  return (
    <>
    <ThemeProvider theme={shadowTheme}>
    <NavBar/> 
  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
