import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ScatterChart,
  Scatter,
  BarChart,
  Bar,
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
        <h1><u><p1>[P] </p1>Paddy's Dashboard <label>v:1.1.4</label></u></h1>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="To Do List" {...a11yProps(1)} />
          <Tab label="Emails" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
          <Tab label="Mining Graph" {...a11yProps(4)} />
          <Tab label="Pump Activity"{...a11yProps(5)} />
          <Tab label="Clients"{...a11yProps(6)} />
          <Tab label="Nivo"{...a11yProps(7)} />
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
      <TabPanel value={value} index={4}>
      <Graph />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Pumps />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Clients />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div></div>
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
      
        <div>
        <TextField id="outlined-basic" label="Text Box" variant="outlined" size="small" onChange={event => setInputBox(event.target.value)}/>
        <Button variant="contained" size="large" onClick={() => setList([...list, inputBox])}>Submit</Button>
        </div>
      <Chip label={list.join(" | ")} />
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


function Graph() {
  return (
    <>
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1><u>Mining Graph Mock:</u></h1>
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
      
    </>
  )
}

function Pumps() {
  return (
    <>
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
    <h1><u>Pump Data Mock:</u></h1>
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
    <ScatterChart width={400} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="power" />
        <YAxis type="number" dataKey="output" />
        <Scatter data={PumpActivity} fill="grey" />
    </ScatterChart>
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
    <label>X = Power <br/ > Y = Output</label>
    <br />
    <br />
    <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>

    </>
  )
}

const clientlog = [
  {name: 'Popular Miners', income: 1000},
  {name: 'Diamond Grabbers', income: 1500},
  {name: 'Gold Diggers', income: 1200},
  {name: 'Coal Crusaiders', income: 800}
];

function Clients() {
  return (
      <>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      <h1><u>Client Data Mock:</u></h1>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <BarChart width={600} height={600} data={clientlog}>
        <Bar dataKey="income" fill="grey"/>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box><br />
      <label>X = Company <br />Y = Income Per Week</label><br /><br />
      <Box sx={{ borderBottom: 1, borderColor: 'container' }}></Box>
      </>
    );
  }



