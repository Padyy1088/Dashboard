import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ScatterChart,
  Scatter,
} from 'recharts';

const PumpActivity = [
    {power: 5, output: 10},
    {power: 2, output: 6},
    {power: 10, output: 8},
    {power: 3, output: 7},
    {power: 6, output: 9},
    {power: 8, output: 10},
    {power: 1, output: 3},
    {power: 7, output: 9},
  ];

export function Pumps() {
    return (
      <>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1 className="Dark"><u>Pump Data Mock:</u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <ScatterChart width={400} height={400}>
          <CartesianGrid />
          <XAxis type="number" dataKey="power" />
          <YAxis type="number" dataKey="output" />
          <Scatter data={PumpActivity} fill="blue" />
      </ScatterChart>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <label>X = Power <br/ > Y = Output</label><br /><br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
  
      </>
    )
  };