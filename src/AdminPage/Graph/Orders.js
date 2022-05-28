import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

// Generate Order Data
function createData(id, date, name, email, amount) {
  return { id, date, name, email, amount };
}



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const { users } = useAuth();
  const rows = [
  ];

  const sortUsers = users.slice().sort((a, b) => b.payday - a.payday);
  //poblar los renglones 
  let max = 0
  if (sortUsers.length >= 0 && sortUsers.length <= 5) max = 0
  if (sortUsers.length > 5) max = 5

  for (let i = 0; i <= max; i++) {
    console.log(i + 1, sortUsers[i].payday.toDate(), sortUsers[i].name + " " + sortUsers[i].lastname, sortUsers[i].email, 300.00)
    rows.push(createData(i + 1, sortUsers[i].payday.toDate().toLocaleDateString("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }), sortUsers[i].name + sortUsers[i].lastname, sortUsers[i].email, 300.00))
  }
  console.log(rows)



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

              <TableCell>{row.email}</TableCell>
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