import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/tabs.css';
import BukuTerpopulerS4 from './BukuTerpopulerS4'
import BukuTerbaruS4 from './BukuTerbaruS4';
import BukuTerbaikS4 from './BukuTerbaikS4';

function LinkTab(props) {
  const { label, to } = props;
  const location = useLocation();

  return (
    <Tab
      component={Link}
      to={to}
      label={label}
      selected={to === location.pathname}
    />
  );
}

function TabPanel(props) {
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

const DCSection4 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <center>
      <Box sx={{ width: '100%', justifyContent: 'center' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent:'center',display:'flex' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Buku Terpopuler" />
            <Tab label="Buku Terbaru" />
            <Tab label="Buku Terbaik" />
            <LinkTab label="Lihat Semua" to="/all-books" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BukuTerpopulerS4 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BukuTerbaruS4 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BukuTerbaikS4 />
        </TabPanel>
      </Box>
    </center>
  );
};

export default DCSection4;
