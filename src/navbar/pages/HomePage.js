import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';

export function HomePage() {
    return (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1 className="Dark"><u><b>Home Page</b></u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
          <p1>This is a simple dashboard which contains</p1><br />
          <p2>elements created using <b>React</b> and <b>MUI</b></p2><br />
          <p3><u>The contents of this website include:</u></p3>
          <li>A Todo List.</li>
          <li>An Emails Section.</li>
          <li>And an about section.</li><br />
          <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
          <h1 className="Dark"><u>Details:</u></h1>
          <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
          <p1>To use the site please press on the navigation bar at the top <br />
          in order to navigate the user interface...</p1><br /><br />
          <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
          <br />
          <p2 className="Dark"><u><i><b>Created by Paddy Crow at Intellisense.io office in Cambridge.</b></i></u></p2><br /><br />
          <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
          <br /><br /><li>Github: <u>https://github.com/Padyy1088</u></li>
          <br /><li>Personal Email: <u>crowpaddy@gmail.com</u></li>
          <br /><li>Work Email: <u>paddy.crow@intellisense.io</u></li>
      </div>
    )
  };

  