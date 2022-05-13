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
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
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
      <Title>Today</Title>
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
              Sales ($)
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