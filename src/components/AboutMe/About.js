// Add pictures
import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  containerDesktop: {
    padding: theme.spacing(12, 45, 4),
  },
  containerMobile: {
    padding: theme.spacing(12, 4, 4),
  },
  headers: {
    padding: theme.spacing(2, 0, 2)
  },
}));

export default function About() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width:1224px)'
  });
  
  return (
    <div className={isDesktopOrLaptop ? classes.containerDesktop : classes.containerMobile}>
      <CssBaseline />
      <Typography variant="h3" align="center" color="textPrimary" className={classes.headers}>
        <u>About Me</u>
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary">Hi! Nice to meet you! My name is Davin Wong and here is a little bit about me and my interests.</Typography>
      {isDesktopOrLaptop ?
      <>
        <Grid container direction="row">
          <Grid item direction="column" xs={6}>
            <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
              <u>Education</u>
            </Typography>
            <Typography variant="body1" color="textPrimary">Undergraduate Studies: San Jose State University</Typography>
            <Typography variant="body2" color="textPrimary">- Bachelor of Science in Computer Engineering</Typography>
            <Typography variant="body2" color="textPrimary">- Fall 2017 to Spring 2021</Typography>
            <Typography variant="body2" color="textPrimary">- Graduated May 2021 with 3.608 Overall GPA</Typography>
            <br />
            <Typography variant="body1" color="textPrimary">Graduate Studies: Georgia Institute of Technology</Typography>
            <Typography variant="body2" color="textPrimary">- OMSCS (Online Master of Science in Computer Science) Program</Typography>
            <Typography variant="body2" color="textPrimary">- Admitted and starting Fall 2021</Typography>
            <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
              <u>Career Related Interests</u>
            </Typography>
            <Typography variant="body1" color="textPrimary">I have taken an interest in the following fields related to Software Development:</Typography>
            <Typography variant="body2" color="textPrimary">- Fullstack Development</Typography>
            <Typography variant="body2" color="textPrimary">- Frontend Development</Typography>
            <Typography variant="body2" color="textPrimary">- Backend Development</Typography>
            <Typography variant="body2" color="textPrimary">- Devops</Typography>
            <Typography variant="body2" color="textPrimary">- Mobile Development</Typography>
            <Typography variant="body2" color="textPrimary">- Data Science</Typography>
          </Grid>
          <Grid item direction="column" xs={6}>
            <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
              <u>Leisurely Interests</u>
            </Typography>
            <Typography variant="body1" color="textPrimary">During my free time, I enjoy doing the following activities to unwind:</Typography>
            <Typography variant="body2" color="textPrimary">- Searching up pc parts</Typography>
            <Typography variant="body2" color="textPrimary">- Experimenting with cooking</Typography>
            <Typography variant="body2" color="textPrimary">- Eating my random cooking creations</Typography>
            <Typography variant="body2" color="textPrimary">- Going out with family or friends to eat</Typography>
            <Typography variant="body2" color="textPrimary">- Going for a drive</Typography>
            <Typography variant="body2" color="textPrimary">- Sleeping</Typography>
            <Typography variant="body2" color="textPrimary">- Playing video games with friends</Typography>
            <Typography variant="body2" color="textPrimary">- Twitch streaming</Typography>
            <Typography variant="body2" color="textPrimary">- Watching anime or kdramas</Typography>
            <Typography variant="body2" color="textPrimary">- Listening to kpop</Typography>
            <Typography variant="body2" color="textPrimary">- Working on personal projects to improve at frontend development</Typography>
          </Grid>
        </Grid>
      </> :
      <>
        <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
          <u>Education</u>
        </Typography>
        <Typography variant="body1" color="textPrimary">Undergraduate Studies: San Jose State University</Typography>
        <Typography variant="body2" color="textPrimary">- Bachelor of Science in Computer Engineering</Typography>
        <Typography variant="body2" color="textPrimary">- Fall 2017 to Spring 2021</Typography>
        <Typography variant="body2" color="textPrimary">- Graduated May 2021 with 3.608 Overall GPA</Typography>
        
        <br />
        
        <Typography variant="body1" color="textPrimary">Graduate Studies: Georgia Institute of Technology</Typography>
        <Typography variant="body2" color="textPrimary">- OMSCS (Online Master of Science in Computer Science) Program</Typography>
        <Typography variant="body2" color="textPrimary">- Admitted and starting Fall 2021</Typography>
        <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
          <u>Career Related Interests</u>
        </Typography>
        <Typography variant="body1" color="textPrimary">I have taken an interest in the following fields related to Software Development:</Typography>
        <Typography variant="body2" color="textPrimary">- Fullstack Development</Typography>
        <Typography variant="body2" color="textPrimary">- Frontend Development</Typography>
        <Typography variant="body2" color="textPrimary">- Backend Development</Typography>
        <Typography variant="body2" color="textPrimary">- Devops</Typography>
        <Typography variant="body2" color="textPrimary">- Mobile Development</Typography>
        <Typography variant="body2" color="textPrimary">- Data Science</Typography>
        
        <br />

        <Typography variant="h5" align="center" color="textPrimary" className={classes.headers}>
          <u>Leisurely Interests</u>
        </Typography>
        <Typography variant="body1" color="textPrimary">During my free time, I enjoy doing the following activities to unwind:</Typography>
        <Typography variant="body2" color="textPrimary">- Searching up pc parts</Typography>
        <Typography variant="body2" color="textPrimary">- Experimenting with cooking</Typography>
        <Typography variant="body2" color="textPrimary">- Eating my random cooking creations</Typography>
        <Typography variant="body2" color="textPrimary">- Going out with family or friends to eat</Typography>
        <Typography variant="body2" color="textPrimary">- Going for a drive</Typography>
        <Typography variant="body2" color="textPrimary">- Sleeping</Typography>
        <Typography variant="body2" color="textPrimary">- Playing video games with friends</Typography>
        <Typography variant="body2" color="textPrimary">- Twitch streaming</Typography>
        <Typography variant="body2" color="textPrimary">- Watching anime or kdramas</Typography>
        <Typography variant="body2" color="textPrimary">- Listening to kpop</Typography>
        <Typography variant="body2" color="textPrimary">- Working on personal projects to improve at frontend development</Typography>
      </>
    }
    </div>
  );
}
