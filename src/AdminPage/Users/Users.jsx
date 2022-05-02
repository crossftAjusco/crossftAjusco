import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAuth } from '../../Context/authContext'

export default function CollapsibleTable() {
  const { users } = useAuth()
  console.log(users)
  
  return (
    <TableContainer component={Paper}>
        <h2 className="title">Usuarios registrados:</h2>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre: </TableCell>
            <TableCell>Apellido(s):</TableCell>
            <TableCell>Edad: </TableCell>
            <TableCell>Fecha de registro:</TableCell>
            <TableCell>Próxima fecha de pago:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.birthday} años</TableCell>
              <TableCell>{row.date_start.toDate().toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</TableCell>
              <TableCell>Yo igual</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
