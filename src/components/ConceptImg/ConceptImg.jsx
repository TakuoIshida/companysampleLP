import React from 'react';
import Card from '@material-ui/core/Card';
import bgimg from './../../img/bg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '390pt',
        margin: '10px auto 0',
        padding: '0',
    },
    message: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        MsTransform: 'translate(-50%,-50%)',
        WebkitTransform: 'translate(-50%,-50%)',
        transform: 'translate(-50%,-50%)',
        margin: '0',
        padding: '0',
        color: 'whitesmoke',
        fontSize: '18px',
        userSelect: 'none',
    },
    media: {
        width: '100%',
        height: '400pt',
    },
  });

export default function MediaCard() {
    const classes = useStyles();
    
       return(  
                <div className ={classes.root}>
                    <Card>
                        <Typography className ={classes.message}>
                            We Lead to Innovation !!
                        </Typography>
                        <CardMedia>
                            <img className ={classes.media} src={ bgimg } alt="companyconcept"></img>
                        </CardMedia>
                    </Card>
                </div>
        )
}
