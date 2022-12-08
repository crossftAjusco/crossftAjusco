//Componente UsersList, colección general de usuarios registrados en AjuscoCrossFT
//Se utiliza MaterialUi para imprimir la tabla de usuarios y sus características
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { ClassNames } from '@emotion/react';
import './Users.css'
import { yellow } from '@mui/material/colors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ConfModal } from './ConfirmModal';
import { EditModal } from './EditModal'

//Función que busca por nombre (term) en minúsculas
function searchingTerm(term) {
  return function (x) {
    // console.log(x)
    return x.name.toLowerCase().includes(term) || !term
  }
};
//función que pinta cada fila (row) de la tabla de usuarios
//Param Users es traida desde Context con info necesaria para el renderizado
function Row(users, id) {
  const { row } = users;
  //Gracias al const {row}=users; se trae dinamicamente cada id existente en la DB
  id = row.id;
  const [open, setOpen] = React.useState(false);
  
  return (
    //función dinámica de impresión de los detalles en la tabla de Usuarios MUI
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
          <Grid container> {/* Cada Grid ayuda a proporcionar las celdas */}
            <Grid item lg={2}>
              <Avatar className="perfil" sx={{ bgcolor: yellow[700] }} alt={row.name} src='.' />
            </Grid>
            <Grid lg={5}>
              <Typography>{row.name} {row.lastname}</Typography>
              <a href={`mailto:${row.email}?subject=Ajusco-CrossFt.%20&body=Buen%20día%20somos%20Ajusco-CrossFt...`} title="Enviar Email">
                <Typography color="textSecondary" variant="body2">
                  {row.email}
                </Typography>
              </a> 
            </Grid>
          </Grid>
        </TableCell>
        <TableCell >
          <Grid>
            <a href={`https://api.whatsapp.com/send?phone=52${row.phone}&text=¡Hola!%20Somos%20AjuscoCrossFT...%20`} target="_blank" rel="noreferrer" title="Enviar WhatsApp">
              <Typography color="textPrimary" variant="body2">
                <WhatsAppIcon className="activate" color="success" />
                {row.phone}
              </Typography>
            </a>
            <a href={`tel:${row.phone_contact}`}  className="llamar" title="Llamar contacto">
              <Typography color="textPrimary" variant="body2">
              <LocalPhoneIcon />
                {row.phone_contact}
              </Typography>
              </a>
          </Grid>
        </TableCell>
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
                    <TableCell>
                      <center>
                        {/* Modal para editar info de usuario */}
                        <EditModal
                          id={id}
                          name={row.name}
                          lastName={row.lastname}
                          email={row.email}
                          phone={row.phone}
                          birthday={row.birthday}
                          gender={row.gender}
                        />
                      </center>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {row.date_start.toDate().toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    </TableCell>
                    <TableCell>
                      {row.next_payday.toDate().toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    </TableCell>
                    <TableCell>
                      <center>
                        {/* Modal para editar usuarios registrados */}
                        <ConfModal id={id}  /> 
                      </center>
                    </TableCell> {/* se trae el id del "doc" \ modal para confirmar eliminación*/}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Pagos realizados:
                    </TableCell>
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
  // console.log(users)

  const [usuarios, setUsuarios] = React.useState([]);
  const [term, setTerm] = React.useState("");
  // console.log(usuarios)

  React.useEffect(() => {
    setUsuarios(users);
  }, [users]);

  return (
    <TableContainer component={Paper}>
      <h2 className="title">Usuarios registrados</h2>
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