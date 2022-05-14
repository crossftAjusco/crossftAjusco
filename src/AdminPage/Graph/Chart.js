import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [ /* x,y */
  createData('1', 0),
  createData('2', 0),
  createData('3', 0),
  createData('4', 900),
  createData('5', 0),
  createData('6', 300),
  createData('7', 0),
  createData('8', 0),
  createData('9', 0),
  createData('10', 0),
  createData('11', 0),
  createData('12', 0),
  createData('13', 0),
  createData('14', 0),
  createData('15', 0),
  createData('16', 0),
  createData('17', 0),
  createData('18', 0),
  createData('19', 0),
  createData('20', 0),
  createData('21', 0),
  createData('22', 0),
  createData('23', 0),
  createData('24', 0),
  createData('25', 0),
  createData('26', 0),
  createData('27', 0),
  createData('28', 300),
  createData('29', 0),
  createData('30', 0),
  createData('31', 0),
];

export default function Chart() {
  const { users } = useAuth()
  const theme = useTheme();
  /* Pintar los datos de la grafica de pagos recientes*/
  const today = new Date()
  const lastPayday = []
  const dataGraph = []
  for (let date of users) {
    today.getMonth() == date.payday.toDate().getMonth() && today.getFullYear() == date.payday.toDate().getFullYear() ?
      lastPayday.push(date.payday.toDate()) :
      console.log('otro mes o año')
  }
  /*
  for (let day of lastPayday) {
    console.log(day.getDate())
    if (dataGraph.includes(day.getDate())){

    } else {

    }
  }
  */
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