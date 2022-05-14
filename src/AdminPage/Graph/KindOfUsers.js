import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function KindOfUsers() {
  return (
    <React.Fragment>
      <Title>Numero de usarios</Title>
      <Typography component="p" variant="h4">
        9
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Mujeres:
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="h5">
        5
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Hombres:
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="h5">
        4
      </Typography>
    </React.Fragment>
  );
}