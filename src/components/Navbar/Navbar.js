import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Menu, MenuItem, Button, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon, SportsEsports } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 50,
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width:1224px)'
  });

  const [anchorEl, setAnchorEl] = useState(null);

  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        {isDesktopOrLaptop ?
          <>
            <Toolbar>
              <SportsEsports className={classes.icon} color="inherit" />
              <Typography variant="h5" className={classes.title} color="inherit">
                Davin Wong's Porfolio
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/AboutMe">About Me</Button>
              <Button color="inherit" component={Link} to="/Projects&Experience">Projects & Experience</Button>
              <Button color="inherit" component={Link} to="/ContactMe">Contact Me</Button>
            </Toolbar>
          </> :
          <>
            <Toolbar>
              <IconButton edge="start" className={classes.icon} color="inherit" aria-label="menu" onClick={(e) => {setAnchorEl(e.currentTarget)}}>
                <MenuIcon />
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => {setAnchorEl(null)}}>
                <MenuItem component={Link} onClick={() => {setAnchorEl(null)}} to="/">Home</MenuItem>
                <MenuItem component={Link} onClick={() => {setAnchorEl(null)}} to="/AboutMe">About Me</MenuItem>
                <MenuItem component={Link} onClick={() => {setAnchorEl(null)}} to="/Projects&Experience">Projects & Experience</MenuItem>
                <MenuItem component={Link} onClick={() => {setAnchorEl(null)}} to="/ContactMe">Contact Me</MenuItem>
              </Menu>
              <Typography variant="h5" className={classes.title} color="inherit">
                Davin Wong's Porfolio
              </Typography>
            </Toolbar>
          </>
        }
      </AppBar>
    </div>
  );
}
