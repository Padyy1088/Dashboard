import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

export function Graph() {
    return (
      <div>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h1 className="Dark"><u>Mining Graph Mock:</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={MiningData} margin={{ right: 300}}>
            <CartesianGrid />
            <XAxis dataKey="name" 
              interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="amount"
                stroke="purple" activeDot={{ r: 8}} />
              <Line dataKey="buy"
                stroke="blue" activeDot={{ r: 8}} />
              <Line dataKey="weight"
                stroke="green" activeDot={{r:8}} />
              <Line dataKey="sell"
                stroke="red" activeDot={{r:8}} />
          </LineChart>
        </ResponsiveContainer><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        
      </div>
    )
  };
  

  const MiningData = [
    {
      name: 'Gold',
      amount: 400,
      buy: 100,
      weight: 500,
      sell: 150
    },
    {
      name: 'Diamonds',
      amount: 200,
      buy: 500,
      weight: 650,
      sell: 50
    },
    {
      name: 'Iron',
      amount: 400,
      buy: 40,
      weight: 450,
      sell: 200
    },
    {
      name: 'Coal',
      amount: 420,
      buy: 20,
      weight: 782,
      sell: 300
    },
    {
      name: 'Copper',
      amount: 230,
      buy: 90,
      weight: 371,
      sell: 140
    },
    {
      name: 'Platinum',
      amount: 390,
      buy: 158,
      weight: 742,
      sell: 50
    },
    {
      name: 'Silver',
      amount: 430,
      buy: 151,
      weight: 610,
      sell: 300
    }
  ]