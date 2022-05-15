import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Ingresos mensuales</Title>
      <Typography component="p" variant="h4">
        $1,500.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 May, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          {/* Determinar si vamos a poner in link */}
        </Link>
      </div>
    </React.Fragment>
  );
}