import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    margin: '50pt auto',
  },
  Information: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: 'center',
  },
}));
export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded >
        <Typography className={classes.Information}>Information</Typography>
        <ExpansionPanelSummary className={classes.expansion} expandIcon={<ExpandMoreIcon />} 
        aria-controls="panel1a-content" id="panel1a-header"
        />
      </ExpansionPanel>
    </div>
  );
}
