import * as React from 'react';
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
      </NavLink>
      <NavLink to='comunidad'>
        <Tooltip title='Comunidad'>
        <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
          <PeopleIcon size='large' />
        </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='pagos'>
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
 