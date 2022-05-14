import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('5', 0),
  createData('10', 0),
  createData('15', 0),
  createData('20', 0),
  createData('25', 0),
  createData('30', 9),
  createData('35', 0),
  createData('40', 0),
  createData('45', 0),
  createData('50', 0),
  createData('55', 0),
  createData('60', 0),
  createData('65', 0),
  createData('70', 0),
  createData('75', 0),
  createData('80', 0),
];

export default function YearsGraph() {
  const theme = useTheme();

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