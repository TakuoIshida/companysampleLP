import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" variant="fullWidth">
          <Tab value="one" label="会社情報 COMPANY" wrapped {...a11yProps('one')}/>
          <Tab value="two" label="事業内容　BUSINESS" {...a11yProps('two')} />
          <Tab value="three" label="ブログ BLOG" {...a11yProps('three')} />
          <Tab value="four" label="採用情報 RECRUIT" {...a11yProps('four')} />
          <Tab value="five" label="お知らせ INFORMATION" {...a11yProps('five')} />
          <Tab value="six" label="お問い合わせ CONTACT" {...a11yProps('six')} />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index="one">
      <COMPANY />
      </TabPanel>
      <TabPanel value={value} index="two">
      <BUSINESS />
      </TabPanel>
      <TabPanel value={value} index="three">
      <BLOG />
      </TabPanel>
      <TabPanel value={value} index="four">
      <RECRUIT />
      </TabPanel>
      <TabPanel value={value} index="five">
      <INFORMATION /> 
      </TabPanel>
      <TabPanel value={value} index="six">
      <CONTACT />
      </TabPanel> */}
    </div>
  );
}