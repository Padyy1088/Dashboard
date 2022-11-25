import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';

export function About() {
    return (
      <div>
        <br /><h1 className="Dark"><u>About:</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        This site is run using nodejs on a localhost...<br />
        The modules used are React and MUI...<br />
        This was created by Paddy Crow...<br />
        The Header is using react...<br />
        The Navbar is using MUI...<br />
        The To Do List is using "useState" from react...<br />
        All other components are native to react...<br /><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <br /><br /><br /><br /><br /><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <br />
          Contact : <u><b>crowpaddy@gmail.com</b></u> for any other enquiries.
        
      </div>
    )
  };