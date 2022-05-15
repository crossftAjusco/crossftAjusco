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
import ModalCal from '../../AdminPage/Calendar/ModalCal'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { ClassNames } from '@emotion/react';
import './Users.css'
import { yellow } from '@mui/material/colors';

function searchingTerm(term) {
  return function (x) {
    console.log(x)
    return x.name.toLowerCase().includes(term) || !term
  }
};

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
            <Grid item lg={3}>
              <Avatar className="perfil" sx={{ bgcolor: yellow[700] }} alt={row.name} src='.' />
            </Grid>
            <Grid lg={5}>
              <Typography>{row.name} {row.lastname}</Typography>
              <Typography color="textSecondary" variant="body2">{row.email}</Typography>
            </Grid>
          </Grid>
        </TableCell>
        <TableCell >
          <Grid>
            <a href="" target="_blank" > <Typography color="textPrimary" variant="body2">{row.phone}</Typography></a>
            <Typography color="textSecondary" variant="body2">{row.phone_contact}</Typography>
          </Grid>
        </TableCell>
        <TableCell>{row.gender}</TableCell>
        <TableCell >{
          new Date().getTime() < row.next_payday.toDate().getTime() ? (
            <div >
              <CheckCircleIcon className="activate" color="success" />
              <Typography className='activate' color="success" variant="body2">Activo</Typography>
            </div>) : (
            <div>
              <CancelIcon className="activate" color="error" />
              <Typography className="activate" color="error" variant="body2">Inactivo</Typography>
            </div>
          )
        }</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h7" gutterBottom component="div">
                Historial:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha de inicio: </TableCell>
                    <TableCell>Próxima fecha de pago:</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.date_start.toDate().toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</TableCell>
                    <TableCell>{row.next_payday.toDate().toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Pagos realizados:
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {row.payment_days.map((historyRow) => (
                        <TableRow key={historyRow}>
                          <TableCell component="th" scope="row">
                            {historyRow.toDate().toLocaleDateString("es-MX", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableCell>
                  </TableRow>
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

  const [usuarios, setUsuarios] = React.useState([]);
  const [term, setTerm] = React.useState("");
  // console.log(usuarios)

  React.useEffect(() => {
    setUsuarios(users);
  }, [users]);

  return (
    <TableContainer component={Paper}>
      <h2 className="title">Usuarios registrados:</h2>
      {usuarios && (
        <>
          <span className="lbl-search"><SearchIcon /></span>
          <input className="buscador" type="text" name="term" placeholder=" Buscar por nombre..." onChange={e => setTerm(e.target.value.toLowerCase())} />
        </>)}
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre(s):</TableCell>
            <TableCell># Teléfono:</TableCell>
            <TableCell>Sexo:</TableCell>
            <TableCell>Status:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.filter(searchingTerm(term)).map((row) => (
            <Row key={(row.name || row.lastname)} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}