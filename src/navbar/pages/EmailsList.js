import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';

export function EmailsList() {
    return (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h1 className="Dark"><u>List of Emails in use:</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <li>Personal : <u>crowpaddy@gmail.com</u></li><br />
        <li>Alternate : <u>crowpaddyalt@gmail.com</u></li><br />
        <li>College : <u>99295792@students.camre.ac.uk</u></li><br />
        <li>Intellisense : <u>paddy.crow@intellisense.io</u></li><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h2 className="Dark"><u>Not in use:</u></h2>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <li>Offline : <u>bsattibus@gmail.com</u></li><br />
        <li>Offline : <u>johnandrews@gmail.com</u></li>
      </div>
    )
  };