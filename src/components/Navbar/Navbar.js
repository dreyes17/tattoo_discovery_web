import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, Typography, Menu, MenuItem, ListItemIcon, ListItemText, Hidden, IconButton } from '@material-ui/core'
import { Button } from 'gatsby-theme-material-ui'
import GetAppIcon from '@material-ui/icons/GetApp';
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import "@fontsource/lily-script-one"
import './Navbar.scss'
import { LocalGroceryStoreOutlined } from '@material-ui/icons'
import { getLowResolutionImageURL } from 'gatsby-plugin-image'

const smallDownloadButtonFontSize = "0.7rem"
const bigDownloadButtonFontSize = "1.1rem"
const androidUrl = 'https://play.google.com/store/apps/details?id=com.tattoo_discovery.design';
const iosUrl = 'https://apps.apple.com/app/id1552751805';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    paddingRight: "30px",
  },
  title: {
    flexGrow: "1",
    fontFamily: "Lily Script One",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      fontSize: bigDownloadButtonFontSize
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: smallDownloadButtonFontSize
    },
  },
  appbarWrapper: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto"
    },
  },
}));

export default function Navbar(props) {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography variant="h1" className={classes.title}>
            Tattoo Discovery
          </Typography>
          <Hidden xsDown>
            <Button  
              startIcon={<GetAppIcon />} 
              variant="outlined" 
              color="secondary" 
              aria-controls="simple-menu" 
              aria-haspopup="true" 
              onClick={handleClick}
              className={classes.menuButton}>
                Download
            </Button>
          </Hidden>
          <Hidden smUp>
            <IconButton  
              variant="outlined" 
              color="secondary" 
              aria-controls="simple-menu" 
              aria-haspopup="true" 
              onClick={handleClick}
              className={classes.menuButton}>
                <GetAppIcon />
            </IconButton>
          </Hidden>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <a href={androidUrl} rel="nofollow,noopener,noindex" target="_blank">
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <Hidden smDown>
                    <AdbIcon fontSize={bigDownloadButtonFontSize} />
                  </Hidden>
                  <Hidden mdUp>
                    <AdbIcon fontSize={smallDownloadButtonFontSize} />
                  </Hidden>
                </ListItemIcon>
                <ListItemText primary="Android" />
              </MenuItem>
            </a>
            <a href={iosUrl} rel="nofollow,noopener,noindex" target="_blank">
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <ListItemIcon>
                  <Hidden smDown>
                    <AppleIcon fontSize={bigDownloadButtonFontSize} />
                  </Hidden>
                  <Hidden mdUp>
                    <AppleIcon fontSize={smallDownloadButtonFontSize} />
                  </Hidden>
                </ListItemIcon>
                <ListItemText primary="iOS" />
              </MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
      {/*<Toolbar />*/}
    </>
  )
}
