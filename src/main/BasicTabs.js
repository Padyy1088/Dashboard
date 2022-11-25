import * as React from 'react';
import './Color.css'; import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { HomePage } from '../navbar/pages/HomePage';
import { TextAndButton } from '../navbar/pages/TextAndButton';
import { EmailsList } from '../navbar/pages/EmailsList';
import { About } from '../navbar/pages/About';
import { Graph } from '../navbar/pages/Graph';
import { Pumps } from '../navbar/pages/Pumps';
import { Clients } from '../navbar/pages/Clients';
import { TabPanel } from '../navbar/TabPanel';
import { a11yProps } from '../navbar/a11yProps';
import { CssBaseline } from '@mui/material';

export function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <div className="Color">
        <React.Fragment>
          <CssBaseline />
          <Container >
          <div className="Color">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <h1 className="Dark"><u><p1>[P] </p1>Dashboard <label>v:1.6.2</label></u></h1>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <Tabs textColor="white"value={value} onChange={handleChange} aria-label="basic tabs example">
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
          </div>
          </Container>
        </React.Fragment>
      </div>
    );
  }