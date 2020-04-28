import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(props) {
  const classes = useStyles();
  
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div className={classes.root}>
      <Chip
        label={props.label}
        clickable
        color="primary"
        onClick={handleClick}
        variant="outlined"
        icon={<ArrowForwardIosOutlinedIcon/>}
        />
    </div>
  );
}