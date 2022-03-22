import React from 'react';
import {Paper, Typography} from '@mui/material';



export default function riftbourgIntro() {
  

  return (
    <>
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
        <Typography color='primary' variant="h4"><strong>Riftbourg</strong></Typography>
        <br/>
        <Typography color='text.secondary'>
            The hooded figure who gave you the letter seems to have disappeared. As your focus shifts away from the letter, the noise of bar
            patrons trying to be heard comes back to full volume. No one seems to have noticed the hooded figure, the letter or even you.
            Your glass is empty and as you motion to the bar maid to pay your tab she says
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            "All paid hun"
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            You look around the pub one more time looking for...something. Any answers to your questions. Who gave you the letter,
            who paid your tab and what are you going to do about the letter?
        </Typography>

        
    </Paper>  
      
      
      </>
    )
  
}