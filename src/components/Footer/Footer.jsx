import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from './../Chips/Chips';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50pt',
    backgroundColor: 'white',
  },

  text: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  labels: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  rights: {
    textAlign: 'center',
  }
}));

export default function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography>株式会社○○</Typography>
        <Typography>所在地</Typography>
      </div>
      <div className={classes.labels}>
        <Chip label="会社情報" />
        <Chip label="お知らせ" />
        <Chip label="事業内容" />
        {/* <Chip label="採用情報" /> */}
        <Chip label="お問い合わせ" />
      </div>
      <div className={classes.rights}>
        <Typography>情報セキュリティ基本方針 | 個人情報保護方針</Typography>
        <Typography>Copyright All rights reserved.</Typography>
      </div>
    </div>
  );
}