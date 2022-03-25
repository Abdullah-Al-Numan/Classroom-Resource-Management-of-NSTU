import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Schedule from './schedule/alluser';
import Resource from './resource/resource';
import Notice from './notice/notice';
import Solver from './solver/solver';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Schedule" icon={<AccessAlarmsIcon />} {...a11yProps(0)}/>
          <Tab label="Resource" icon={<InsertDriveFileRoundedIcon />} {...a11yProps(1)}/>
          <Tab label="Notice" icon={<AddAlertIcon />} {...a11yProps(2)} />
          <Tab label="Solver" icon={<EmojiObjectsOutlinedIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Schedule />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Resource />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Notice />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Solver />
      </TabPanel>

    </div>
  );
}

