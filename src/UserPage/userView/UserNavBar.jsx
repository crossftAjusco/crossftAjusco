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
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Comunidad" />
    </ListItemButton>
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


