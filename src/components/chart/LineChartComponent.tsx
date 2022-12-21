import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '01 Jan',
    NewApplication: 89,
    Interview: 45,
    Hired: 36,
  },
  {
    name: '02 Jan',
    NewApplication: 56,
    Interview: 52,
    Hired: 42,
  },
  {
    name: '03 Jan',
    NewApplication: 74,
    Interview: 38,
    Hired: 60,
  },
  {
    name: '04 Jan',
    NewApplication: 98,
    Interview: 24,
    Hired: 42,
  },
  {
    name: '05 Jan',
    NewApplication: 89,
    Interview: 45,
    Hired: 36,
  },
  {
    name: '06 Jan',
    NewApplication: 72,
    Interview: 33,
    Hired: 13,
  },
  {
    name: '07 Jan',
    NewApplication: 38,
    Interview: 26,
    Hired: 18,
  },
  {
    name: '08 Jan',
    NewApplication: 64,
    Interview: 21,
    Hired: 29,
  },
  {
    name: '09 Jan',
    NewApplication: 46,
    Interview: 20,
    Hired: 37,
  },
  {
    name: '10 Jan',
    NewApplication: 84,
    Interview: 6,
    Hired: 36,
  },
  {
    name: '11 Jan',
    NewApplication: 58,
    Interview: 8,
    Hired: 51,
  },
  {
    name: '12 Jan',
    NewApplication: 46,
    Interview: 15,
    Hired: 32,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeOpacity={0.2} vertical={false} />
          <XAxis tickSize={0} dataKey="name" strokeOpacity={0.2} dy={10}/>
          <YAxis axisLine={false} tickSize={0} dx={-10}/>
            <Tooltip />
            <Legend />
          <Line type='linear' strokeLinejoin="round" dot={false} dataKey="NewApplication" stroke="#60d297" activeDot={{ r: 8 }} strokeWidth="3"/>
          <Line type="linear" strokeLinejoin="round" dot={false} dataKey="Interview" stroke="#6555be" strokeWidth="3" strokeDasharray="10 10"  />
          <Line type="linear" strokeLinejoin="round" dot={false} dataKey="Hired" stroke="#538bf3" strokeWidth="3" strokeDasharray="10 10"  />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
