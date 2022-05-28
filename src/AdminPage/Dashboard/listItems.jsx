import './dashboard.css'
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
import { IconButton, Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';

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
    <div className='iconsDashboard'>
      <NavLink to='calendar'>
        <Tooltip title="Calendario">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
            <CalendarMonthIcon size='large' />
          </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='graph'>
        <Tooltip title="Pagos">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
            <PaidIcon size='large' />
          </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='comunidad'>
        <Tooltip title="Comunidad">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
            <ConnectWithoutContactIcon size='large' />
          </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='form'>
        <Tooltip title="Nuevo usuario">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
            <GroupAddIcon size='large' />
          </IconButton>
        </Tooltip>
      </NavLink>
      
      <NavLink to='usuarios'>
        <Tooltip title="Usuarios">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
            <PeopleIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </NavLink>

      <NavLink to='eventos'>
        <Tooltip title="Eventos">
          <IconButton color='primary' size='large' sx={{ "&:hover": { color: 'rgb(210, 153, 11)' } }}>
          <LayersIcon size='large' />
          </IconButton>
        </Tooltip>
      </NavLink>


    </div>
  </ThemeProvider>
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