import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import contactImg from './../../img/telephone_ip.png';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    margin: '50pt auto',
  },
  button: {
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
  },
  content: {
    boxSizing: 'border-box',
    height: 200,
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
  },
}));

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Card className={classes.card}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classes.img}
            component="img"
            alt="tel"
            image={contactImg}
            title="contact"
          />
          </CardActionArea>
          <CardContent>
            <Button className={classes.button} variant="contained" color="primary" onClick={handleClickOpen}>
            お問い合わせ
            </Button>
          </CardContent>
        </Card>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText>
          弊社にご関心をお持ちいただきまして、ありがとうございます。
          お問合わせは、下記フォームより受け付けております。お気軽にお問合わせください。
          内容の確認後、担当者よりご連絡をさせていただきます。
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="name" type="email" fullWidth/>
          <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth/>
          <TextField className={classes.content}autoFocus margin="dense" id="text" label="content" type="textfield" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleClose} color="primary">
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}