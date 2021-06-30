import React from 'react';
import { CssBaseline, Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: '20px 15px'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function InfoCard() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={5}>
          <Grid item>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
              <CardContent className={classes.cardContent}>
                <Typography gutterbotom variant="h5" color="textPrimary">Hi Tewst Title</Typography>
                <Typography gutterbotom variant="body1" color="textPrimary">Hi Tewst Body</Typography>
              </CardContent>   
              <CardActions>
                <Button size="small" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container> 
    </div>
  );
}