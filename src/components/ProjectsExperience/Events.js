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

export default function Events() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width:1224px)'
  });

  return (
    <div className={isDesktopOrLaptop ? classes.containerDesktop : classes.containerMobile}>
      <CssBaseline />
      <Typography variant="h3" align="center" color="textPrimary" className={classes.headers}>
        <u>Events</u>
      </Typography>
    </div>
  );
}