import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Play from './views/Play';
import CrowvusLetter from './views/chapterOne/CrowvusLetterOne';
import RiftbourgIntro from './views/chapterOne/RiftbourgIntro';
import Races from './views/Races';
import Classes from './views/Classes';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import CharacterCreation from './views/CharacterCreation';
import { ThemeProvider } from '@mui/material/styles';
import shadowTheme from './themes/shadowTheme';
import NavBar from './components/NavBar';


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

function App() {
  return (
    <>
    <ThemeProvider theme={shadowTheme}>
    <NavBar/> 
  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/play" element={<Play/>}/>
        {/* Chapter One */}
        <Route path="/chapter-1" element={<CrowvusLetter/>}/>
        <Route path="/c1a" element={<RiftbourgIntro/>}/>
        <Route path="/races" element={<Races/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/create_character" element={<CharacterCreation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
