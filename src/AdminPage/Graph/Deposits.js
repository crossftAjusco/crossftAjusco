import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {

  const { users } = useAuth()
  const today = new Date()
  const lastPayday = []
  //Poblar el arreglo "lastPayday" con los dias de pago que hay en el mes
  for (let date of users) {
    if (today.getMonth() === date.payday.toDate().getMonth() && today.getFullYear() === date.payday.toDate().getFullYear()) lastPayday.push(date.payday.toDate().getDate());
  }

  return (
    <React.Fragment>
      <Title>Ingreso mensual acumulado</Title>
      <Typography component="p" variant="h4">
        {"$" + lastPayday.length * 300 + ".00"}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today.toLocaleDateString("es-MX", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          {/* Determinar si vamos a poner in link */}
        </Link>
      </div>
    </React.Fragment>
  );
}