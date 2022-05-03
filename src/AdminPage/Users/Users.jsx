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
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAuth } from '../../Context/authContext'
import { TableFooter, TablePagination } from '@mui/material';

export default function CollapsibleTable() {
  const { users } = useAuth()
  console.log(users)
  
  // function MTable() {
  //   const classes = useStyles();
  //   const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState[10]

  //   const handleChangeRowsPerPage = { event } => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0)
  //   };
  // }

  return (
    <TableContainer component={Paper}>
        <h2 className="title">Usuarios registrados:</h2>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre(s): </TableCell>
            <TableCell>Teléfono: </TableCell>
            <TableCell>Fecha de registro:</TableCell>
            <TableCell>Próxima fecha de pago:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item lg={2} >
                    <Avatar alt={row.name} src='.' />
                  </Grid>
                  <Grid lg={5}>
                    <Typography>{row.name} {row.lastname}</Typography>
                    <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid>
                  <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.phone_contact}</Typography>
                </Grid>
                
              </TableCell>
              <TableCell>{row.date_start.toDate().toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</TableCell>
              <TableCell>{row.next_payday.toDate().toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) }</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={users.length}
            rowsPerPage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
              
          />
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}
