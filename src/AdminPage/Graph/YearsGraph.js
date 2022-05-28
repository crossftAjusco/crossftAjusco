import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { useAuth } from "../../Context/authContext"

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}



export default function YearsGraph() {

  const theme = useTheme();
  const { users } = useAuth();
  const data = [
  ];
  let edad = []
  for (let user of users) {
    edad.push(new Date().getFullYear() - new Date(user.birthday).getFullYear())
  }
  edad.sort(function (a, b) {
    return a - b;
  });


  let graphData = []
  for (let i = 0; i <= edad[edad.length - 1] - 1; i++) {
    graphData.push(0)
  }

  for (let i = 0; i <= edad.length; i++) {
    graphData[edad[i] - 1] += 1
  }

  //se pobla la informacion para pintar la grafica
  for (let i = 0; i <= graphData.length; i++) {
    data.push(createData(i + 1, graphData[i]))
  }

  return (
    <React.Fragment>
      <Title>Edad de las personas</Title>
      <ResponsiveContainer>
        <LineChart
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
              Número
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}