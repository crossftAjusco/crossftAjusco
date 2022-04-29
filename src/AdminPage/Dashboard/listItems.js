import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const mainListItems = (
  <React.Fragment>
    <NavLink to='calendar'>
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Calendario" />
      </ListItemButton>
    </NavLink>
    <NavLink to='graph'>
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Ingresos" />
      </ListItemButton>
    </NavLink>
    <NavLink to='comunidad'>
      <ListItemButton>
        <ListItemIcon>
          <ConnectWithoutContactIcon />
        </ListItemIcon>
        <ListItemText primary="Comunidad" />
      </ListItemButton>
    </NavLink>
    <NavLink to='form'>
      <ListItemButton>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="Nuevo usuario" />
      </ListItemButton>
    </NavLink>
    <NavLink to='usuarios'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);