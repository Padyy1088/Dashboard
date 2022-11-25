import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';

const clientlog = [
    {name: 'Popular Miners', income: 1000},
    {name: 'Diamond Grabbers', income: 1500},
    {name: 'Gold Diggers', income: 1200},
    {name: 'Coal Crusaiders', income: 800}
  ];

export function Clients() {
    return (
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h1 className="Dark"><u>Client Data Mock:</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <BarChart width={600} height={600} data={clientlog}>
          <Bar dataKey="income" fill="blue"/>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <label>X = Company <br />Y = Income Per Week</label><br /><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        </>
      );
};