import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LayersIcon from '@mui/icons-material/Layers';
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
      </NavLink>
      <NavLink to='comunidad'>
        <Tooltip title='Comunidad'>
         <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
           <PeopleIcon size='large' />
         </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='pagos'>
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