import React from 'react';
import Typed from 'react-typed';
import { CssBaseline, Container, Grid, IconButton, Typography } from '@material-ui/core';
import { Description, Email, LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../../resume/Wong_Davin_Resume.pdf';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 45,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h3" align="center" color="textPrimary">Hello World, I'm </Typography>
        <div className="text">
          <Typed className="typed"
            strings={[
              "<u>Davin Wong</u>!",
              "a <u>Computer Engineer</u>!",
              "<u>Amazing</u>!",
              "<u>Ambitious</u>!",
              "<u>Determined</u>!",
              "<u>Dilligent</u>!",
              "<u>Flexible</u>!",
            ]}
            typeSpeed={75}
            backDelay={2500}
            smartBackspace={false}
            backSpeed={75}
            loop
          ></Typed>
        </div>
        <br />
        <Typography variant="h5" align="center" color="textSecondary">BS Computer Engineering | San Jose State University | Fall 2017 - Spring 2021</Typography>
        <br />
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="resume" onClick={() => {window.open(Resume, '_blank')}}>
              <Description className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="email" href="mailto: davinlamwong@gmail.com" target="_blank" rel="noopener noreferrer">
              <Email className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="github" href="https://github.com/RTX-Banana" target="_blank" rel="noopener noreferrer">
              <GitHub className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="linkedin" href="https://www.linkedin.com/in/davin-wong-1a6930196/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className={classes.icon} />
            </IconButton>
          </Grid> 
        </Grid>
      </Container>
    </div>
  );
}
