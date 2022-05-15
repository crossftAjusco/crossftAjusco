import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '06 May, 2022',
    'Monica Macal',
    'Tupelo, MS',
    'monhdz07@gmail.com',
    300.00,
  ),
  createData(
    1,
    '04 May, 2022',
    'Marely Hernandez',
    'London, UK',
    'pruebamarelyhdz@gmail.com',
    300.00,
  ),
  createData(2, '04 May, 2022', 'Vania Ramirez', 'Boston, MA', 'vaniusha.ra@gmail.com', 300.00),
  createData(
    3,
    '04 May, 2022',
    'Gloria Arz',
    'Gary, IN',
    'gloryarz@gmail.com',
    300.00,
  ),
  createData(
    4,
    '28 May, 2022',
    'Alberto Gutierrez',
    'Long Branch, NJ',
    'albertoouu@gmail.com',
    300.00,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Pagos recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>

            <TableCell>Email</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>

              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {/*See more orders*/}
      </Link>
    </React.Fragment>
  );
}