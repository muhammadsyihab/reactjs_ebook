import React from 'react'
import CommentS3 from './CommentS3'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link, useLocation } from 'react-router-dom';

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

const BDCSection3 = ({detailBook, comments}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            <Tab label="Sinopsis" />
            <Tab label="Review" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {detailBook.sinopsis}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CommentS3 comments={comments}/>
        </TabPanel>
      </Box>
  )
}

export default BDCSection3