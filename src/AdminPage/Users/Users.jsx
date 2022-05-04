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

  function Row(users) {
    const { row } = users;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <Grid container>
              <Grid item lg={2}>
                <Avatar alt={row.name} src='.' />
              </Grid>
              <Grid lg={5}>
                <Typography>{row.name} {row.lastname}</Typography>
                <Typography color="textSecondary" variant="body2">{row.email}</Typography>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell >
            <Grid>
              <Typography color="textPrimary" variant="body2">{row.phone}</Typography>  
              <Typography color="textSecondary" variant="body2">{row.phone_contact}</Typography>
            </Grid>
          </TableCell>
          <TableCell >{row.date_start.toDate().toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</TableCell>
          <TableCell >{row.next_payday.toDate().toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Historial:
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Fecha de inicio: </TableCell>
                      <TableCell>Próxima fecha de pago:</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pagos realizados:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.payment_days.map((historyRow) => (
                      <TableRow key={historyRow.payment_days}>
                        <TableCell component="th" scope="row">
                          {historyRow.payment_days}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  export default function CollapsibleTable() {
    const { users } = useAuth()
    console.log(users)
    return (
      <TableContainer component={Paper}>
        <h2 className="title">Usuarios registrados:</h2>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nombre(s):</TableCell>
              <TableCell># Teléfono:</TableCell>
              <TableCell>Fecha de inicio:</TableCell>
              <TableCell>Próximo pago:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }