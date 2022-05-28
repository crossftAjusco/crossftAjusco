import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}



export default function Chart() {
  const { users } = useAuth();
  const theme = useTheme();

  /*------------------------------------------------- */
  /* Pintar los datos de la grafica de pagos recientes*/
  /*------------------------------------------------- */
  let data = [ /* x,y */
  ];
  const today = new Date()
  const lastPayday = []

  //Poblar el arreglo  "dataGraph" con ceros con una longuitud de los dias del mes
  const dataGraph = []
  const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
  for (let i = 0; i <= lastDay - 1; i++) {
    dataGraph.push(0)
  }

  //Poblar el arreglo "lastPayday" con los dias de pago que hay en el mes
  for (let date of users) {
    if (today.getMonth() === date.payday.toDate().getMonth() && today.getFullYear() === date.payday.toDate().getFullYear()) lastPayday.push(date.payday.toDate().getDate());
  }

  //Modificación del arreglo dataGraph con el numero de pagos ordenados por dia
  for (let i = 0; i <= lastPayday.length; i++) {
    dataGraph[lastPayday[i] - 1] += 1
  }

  //Se pobla la información para pintar la gráfica
  for (let i = 0; i <= dataGraph.length - 1; i++) {
    data.push(createData(i + 1, dataGraph[i]))
  }

  return (
    <React.Fragment>
      <Title>Ingresos</Title>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Mayo ($)
            </Label>
          </YAxis>
          <Bar
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
            fill="#ff9900"
          />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}