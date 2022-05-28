import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

export default function KindOfUsers() {
  const { users } = useAuth();
  let womNum = 0;
  let menNum = 0;

  for (let user of users) {
    if (user.gender === 'female' || user.gender === 'Femenino' || user.gender === 'femenino') {
      womNum++
    }
    if (user.gender === 'male' || user.gender === 'Masculino' || user.gender === 'masculino') {
      menNum++
    }
  }

  return (
    <React.Fragment>
      <Title>Numero de usarios</Title>
      <Typography component="p" variant="h4">
        {womNum + menNum}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Mujeres:
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="h5">
        {womNum}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Hombres:
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="h5">
        {menNum}
      </Typography>
    </React.Fragment>
  );
}