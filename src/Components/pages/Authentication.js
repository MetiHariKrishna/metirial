import React from 'react'


import Buttons from '../commonButtons/Buttons';
import NotificationBell from '../NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';


const Authentication = () => {
  const buttonStyles ={
    fontSize:20,
    fontWeight:700,
    Color:'rgba(255, 255, 255, 0.7)!important',
   
    "&:hover":{
      // backgroundColor:'yellow',
      // color:'black'
    }
  }
  const headerStyles={
    wrapper:{
     
        width: 1200,
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      
    }
  }
  const headerStyle ={
    toprow:{
      width:"100%",
      display:'flex',
      flexDirection:'row',
      justifyContent:'end',
      
    }
  }
  return (
    <Box sx={headerStyles.wrapper}>
      this is Authentication
      <Buttons 
      variant='contained'
      sx={buttonStyles}
      >
        Add user
      </Buttons>

      <div sx={headerStyle.toprow}>
        
      
      <Buttons 
      variant='default'
      sx={buttonStyles}
      >
       Go to Docs
      </Buttons>

     <NotificationBell iconColor='rgba(255, 255, 255, 0.7)!important' badgeContent={3} />
     <Avatar
        sx={{ bgcolor:'Orange'}}
        alt="Remy Sharp"
        src="/broken-image.jpg"
        >
          H
        </Avatar>
        </div>
        <Buttons 
      variant='contained'
      
      sx={buttonStyles}
      >
        Web setup
      </Buttons>
      <HelpIcon iconColor='rgba(255, 255, 255, 0.7)!important'/>
    </Box>
  )
}

export default Authentication
