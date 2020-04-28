import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CompanyImg from './../../img/company_character_black.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    maxWidth: 600,
    margin: '30pt auto',
    padding: theme.spacing(2),
  },
  img: {
    width: 280,
    height: 300,
    paddingLeft: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    paddingBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          image={CompanyImg}
          title="company_image"
        />
      </CardActionArea>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            私達はこんな会社です
          </Typography>
          <Typography color="textSecondary">
            会社イメージ-subtitle-
            社員の声
            やっていること
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIosOutlinedIcon/>}
          >
            Company
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}