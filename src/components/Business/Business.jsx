import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import businessImg from './../../img/computer_mob_programming.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    height: 450,
    margin: 'auto',
  },
  img: {
    height: 300,
  },
  button: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={businessImg}
          title="business"
        />
        <CardContent>
          <CardActions>
            <Button className={classes.button} size="large" variant="contained" color="primary">
              事業内容
            </Button>
          </CardActions>
          <Typography gutterBottom variant="h6" component="h2">
              事業内容-subtitle-
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              事業内容-details-
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}