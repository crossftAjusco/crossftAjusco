import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LayersIcon from '@mui/icons-material/Layers';
<<<<<<< HEAD
=======

>>>>>>> b9ed76b16d3e3319758f06e1872cd4881aef5979
import { NavLink } from 'react-router-dom';
import { grey, yellow } from '@mui/material/colors';
import { IconButton, Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100]
    },
    secondary: {
      main: yellow[700]
    }
  }
})


export const mainListItems = (
<<<<<<< HEAD
  <ThemeProvider theme={theme}>
  <div className='userIcons'>
      <NavLink to='reglamento'>
      <Tooltip title="Reglamento">
    <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
    <AutoStoriesIcon size='large' />
    </IconButton>
      </Tooltip>
      </NavLink>
      <NavLink to='profile'>
      <Tooltip title="Mi Perfil">
    <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
    <PersonIcon size='large' />
    </IconButton>
      </Tooltip>
=======
  <React.Fragment>
      <NavLink to='reglamento'>
    <ListItemButton>
      <ListItemIcon>
        <AutoStoriesIcon  />
      </ListItemIcon>
      <ListItemText primary="Reglamento" />
    </ListItemButton>
     </NavLink>
     <NavLink to='profile'>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary=" Mi Perfil" />
    </ListItemButton>
>>>>>>> b9ed76b16d3e3319758f06e1872cd4881aef5979
      </NavLink>
      <NavLink to='comunidad'>
        <Tooltip title='Comunidad'>
         <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
           <PeopleIcon size='large' />
         </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='pagos'>
<<<<<<< HEAD
        <Tooltip title='Pagos'>
         <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
           <AttachMoneyIcon size='large' />
         </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='eventos'>
        <Tooltip title='Eventos'>
         <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
           <LayersIcon size='large' />
         </IconButton>
        </Tooltip>
      </NavLink>
     </div>
  </ThemeProvider>
);
=======
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Pagos" />
    </ListItemButton>
     </NavLink>
     <NavLink to='eventos'>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Eventos" />
    </ListItemButton>
     </NavLink>
  </React.Fragment>
);


>>>>>>> b9ed76b16d3e3319758f06e1872cd4881aef5979
