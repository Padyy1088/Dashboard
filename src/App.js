import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <h1><u><p1>[P] </p1>Paddy's Dashboard <label>v:1.0.0</label></u></h1>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="To Do List" {...a11yProps(1)} />
          <Tab label="Emails" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <HomePage />
        <br />
      </Box >
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <TextAndButton />
        <br /><br />
      </Box >
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <EmailsList />
        <br />
      </Box >
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <About />
        <br />
      </Box >
      </TabPanel>
    </Box>
  );
}


function HomePage() {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
    <h1><u><b>Home Page</b></u></h1>
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <p1>This is a simple dashboard created by Paddy...</p1><br />
        <p2>This dashboard has elements created using React and MUI UI</p2><br />
        <p3>The contents of this website include:</p3>
        <li>A Todo List.</li>
        <li>An Emails Section.</li>
        <li>And an about section.</li><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <h1><u>Details:</u></h1>
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
        <p1>To use the site please press on the navigation bar at the top <br />
        in order to navigate the user interface...</p1><br /><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <br />
        <p2><u><i><b>Created by Paddy Crow at Intellisense.io office in Cambridge.</b></i></u></p2><br /><br />
        <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
        <br /><br /><li>Github: <u>https://github.com/Padyy1088</u></li>
        <br /><li>Personal Email: <u>crowpaddy@gmail.com</u></li>
        <br /><li>Work Email: <u>paddy.crow@intellisense.io</u></li>
    </div>
  )
}

function TextAndButton(state) {
  const [list, setList] = useState([]);
  const [inputBox, setInputBox] = useState("");
  return(
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1 ><u>To Do List</u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h2 >How to use:</h2>
      <p1>Type what you would like to add into the text box</p1>
      <p2> and click on the button labeled "submit" to add it to the list.</p2>
      <br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <label>
        Text Box </label>
        <div>
        <input onChange={event => setInputBox(event.target.value)}></input>
        <button onClick={() => setList([...list, inputBox])}>Submit</button>
        </div>
      <p2>• {list.join(', • ')}</p2>
    </div>
  )
}


function EmailsList() {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1><u>List of Emails in use:</u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <li>Personal : <u>crowpaddy@gmail.com</u></li><br />
      <li>Alternate : <u>crowpaddyalt@gmail.com</u></li><br />
      <li>College : <u>99295792@students.camre.ac.uk</u></li><br />
      <li>Intellisense : <u>paddy.crow@intellisense.io</u></li><br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h2><u>Not in use:</u></h2>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <li>Offline : <u>bsattibus@gmail.com</u></li><br />
      <li>Offline : <u>johnandrews@gmail.com</u></li>
    </div>
  )
}

function About() {
  return (
    <div>
      <br /><h1><u>About:</u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      This site is run using nodejs on a localhost...<br />
      The modules used are React and MUI...<br />
      This was created by Paddy Crow...<br />
      The Header is using react...<br />
      The Navbar is using MUI...<br />
      The To Do List is using "useState" from react...<br />
      All other components are native to react...<br /><br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <br />
        Contact : <u><b>crowpaddy@gmail.com</b></u> for any other enquiries.
      
    </div>
  )
}