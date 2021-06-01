// Space things out and add pictures
import React from 'react';
import { CssBaseline, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(12, 5, 4),
  },
  headers: {
    padding: theme.spacing(2, 0, 2)
  },
}));

export default function About() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Typography variant="h3" align="center" color="textPrimary" className={classes.headers}>
        <u>About Me</u>
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary">Hi! Nice to meet you! My name is Davin Wong and here is a little bit about me and my interests.</Typography>
      <Grid container direction="row">
        <Grid item direction="column" xs={6}>
          <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
            <u>Education</u>
          </Typography>
          <Typography variant="body1" color="textPrimary">For my undergraduate studies, I have attended San Jose State University from Fall 2017 to Spring 2021 in 
          pursuit of a Bachelor of Science Degree in Computer Engineering. As of recently, I have graduated with a 3.599 overall gpa.</Typography>
          <Typography variant="body1" color="textPrimary">Following this, I have applied to and accepted Georgia Institute of Technology's admission into their OMSCS 
          program. With this, I will be pursuing a Master's Degree in Computer Science.</Typography>
          <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
            <u>Career Related Interests</u>
          </Typography>
          <Typography variant="body1" color="textPrimary">I have taken an interest in the following fields related to Software Development.</Typography>
          <List aria-label="career">
            <ListItem>
              <ListItemText>Fullstack Development</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Frontend Development</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Backend Development</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Mobile Development</ListItemText>
            </ListItem>
          </List>
          <Typography variant="body1" color="textPrimary">Aside from those fields, I would also like to try out Data Science.</Typography>
        </Grid>
        <Grid item direction="column" xs={6}>
          <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
            <u>Leisurely Interests</u>
          </Typography>
          <Typography variant="body1" color="textPrimary">During my free time, I enjoy doing the following activities to unwind:</Typography>
          <List>
            <ListItem>
              <ListItemText>Experimenting with cooking</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Eating my random cooking creations</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Going out with family or friends to eat</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Playing video game with friends (and occasionally twitch streaming)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Watching anime or kdramas</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Listening to kpop</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Working on personal projects to improve at frontend development</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Going for a drive</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Sleeping</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
