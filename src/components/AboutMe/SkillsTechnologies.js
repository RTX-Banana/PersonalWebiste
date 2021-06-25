import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import './SkillsTechnologies.css';

const useStyles = makeStyles((theme) => ({
  containerDesktop: {
    padding: theme.spacing(12, 15, 4),
  },
  containerMobile: {
    padding: theme.spacing(12, 4, 4),
  },
  headers: {
    padding: theme.spacing(2, 0, 2)
  },
}));

export default function SkillsTechnologies() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width:1224px)'
  });

  return (
    <div className={isDesktopOrLaptop ? classes.containerDesktop : classes.containerMobile}>
      <CssBaseline />
      <Typography variant="h3" align="center" color="textPrimary" className={classes.headers}>
        <u>Skills and Technologies</u>
      </Typography>
      {isDesktopOrLaptop ?
        <>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-cplusplus-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">C++</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-python-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Python</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={3}>
              <i class="devicon-java-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Java</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-c-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">C</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-react-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">React</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-react-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">React Native</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-nodejs-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Node.js</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={3}>
              <i class="devicon-express-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Express.js</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={3}>
            <i class="devicon-html5-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">HTML5</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-css3-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">CSS</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={3}>
              <i class="devicon-javascript-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Javascript</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-typescript-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Typescript</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-mysql-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MySQL</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-mongodb-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MongoDB</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={3}>
              <i class="devicon-bootstrap-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Bootstrap</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={3}>
              <i class="devicon-materialui-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MaterialUI</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={4}>
              <i class="devicon-amazonwebservices-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">AWS</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={4}>
              <i class="devicon-heroku-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Heroku</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={4}>
              <i class="devicon-git-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">GIT</Typography>
            </Grid>
          </Grid>
        </> :
        <>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-cplusplus-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">C++</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-python-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Python</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column"  xs={6}>
              <i class="devicon-java-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Java</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-c-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">C</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-react-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">React</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-react-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">React Native</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-nodejs-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Node.js</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={6}>
              <i class="devicon-express-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Express.js</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={6}>
            <i class="devicon-html5-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">HTML5</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-css3-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">CSS</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column"  xs={6}>
              <i class="devicon-javascript-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Javascript</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-typescript-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Typescript</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-mysql-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MySQL</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-mongodb-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MongoDB</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column"  xs={6}>
              <i class="devicon-bootstrap-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Bootstrap</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={6}>
              <i class="devicon-materialui-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">MaterialUI</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid alignItems="center" container direction="column" xs={4}>
              <i class="devicon-amazonwebservices-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">AWS</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column" xs={4}>
              <i class="devicon-heroku-original colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">Heroku</Typography>
            </Grid>
            <Grid alignItems="center" container direction="column"  xs={4}>
              <i class="devicon-git-plain colored"></i>
              <Typography variant="h5" align="center" color="textPrimary">GIT</Typography>
            </Grid>
          </Grid>
        </>
      }
    </div>
  );
}