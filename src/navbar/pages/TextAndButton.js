import * as React from 'react';
import './Color.css'; import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useState } from 'react';

export function TextAndButton(state) {
    const [list, setList] = useState([]);
    const [inputBox, setInputBox] = useState("");
    return(
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h1 className="Dark"><u>To Do List</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h2>How to use:</h2>
        <p1>Type what you would like to add into the text box</p1>
        <p2> and click on the button labeled "submit" to add it to the list.</p2>
        <br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        
          <div className="Dark">
          <TextField id="outlined-basic" textColor="white" label="Text Box" variant="outlined" size="small" onChange={event => setInputBox(event.target.value)}/>
          <Button variant="contained" size="large" onClick={() => setList([...list, inputBox])}>Submit</Button>
          </div>
          <div className="Bright">
            <Chip label={list.join(" | ")} />
          </div>
      </div>
    )
  };
  