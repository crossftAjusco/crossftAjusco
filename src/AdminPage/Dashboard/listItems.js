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
import { IconButton } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material';

export const mainListItems = (
  <div className='iconsDashboard'>
    <NavLink to='calendar'>
      <IconButton color='warning' size='large'>
        <CalendarMonthIcon size='large' />
      </IconButton>
    </NavLink>
    <NavLink to='graph'>
      <IconButton color='warning' size='large'>
        <PaidIcon size='large' />
      </IconButton>
    </NavLink>
    <NavLink to='comunidad'>
      <IconButton color='warning' size='large'>
        <ConnectWithoutContactIcon size='large' />
      </IconButton>
    </NavLink>
    <NavLink to='form'>
      <IconButton color='warning' size='large'>
        <GroupAddIcon size='large' />
      </IconButton>
    </NavLink>
    <NavLink to='usuarios'>
      <IconButton color='warning' size='large'>
        <PeopleIcon fontSize="inherit" />
      </IconButton>
    </NavLink>
  </div>
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