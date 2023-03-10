
import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const NotificationBell = ({iconColor, badgeContent}) => {
    const newNotification=`you have ${badgeContent} new notification!`
    const noNotification ='no notification'
  return (
    <Tooltip title={badgeContent ? newNotification : noNotification} >
   <IconButton
    color={iconColor}
   >
       <Badge
        badgeContent={badgeContent} 
        color="error">
  <NotificationsIcon  />
</Badge>
</IconButton>
</Tooltip>
  )
}

export default NotificationBell
