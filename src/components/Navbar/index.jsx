import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useScrollTrigger,
  Hidden,
  Container
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import HTM from './htm.svg'
import MLHBadge from "./mlh_Badge.svg"
import { HashLink } from "react-router-hash-link";
import data from "./data";
import Backdrop from "./mobileMenu";
const useStyles = makeStyles({
  root: {
    zIndex: 6,
    backgroundColor: "#EEEEEE",
   
  },
  onhover:{
    fontWeight:'800',
    fontFamily:'consolas',
    transition: 'transform .2s',
    '&:hover':{
     color:"#202136",
     transform: 'scale(1.2)'
    }
  }
});

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar>
          <Hidden mdUp>
            <Backdrop />
            
            <a href="/">
            <span ><img alt="HTMLOGO" src={HTM} height="50px" width="70px" style={{cursor:'pointer'}}/></span>
           
            </a>
       
          </Hidden>
          <Hidden smDown>
            <Container>
            <span id="HTMNav">
              <HashLink smooth
                    to={`/season2#top`} >
              <img alt="HTMLOGO" src={HTM} height="50" width="80"/>
              </HashLink>
              </span>
              <Box display="flex" flexDirection="row" justifyContent="flex-end">
              
                {data.map((item, index) => (
                  <Box  p={1}>
                    <HashLink
                      style={{
                        textDecoration: "none",
                        color:"#434040",
                        whiteSpace: "nowrap",
                            }}
                     
                      smooth
                      to={`/${item.path}`}
                    >
                      <Typography  className={classes.onhover} gutterBottom={true} variant="subtitle2">
                       <b>{item.name}</b> {" "}
                      </Typography>
                    </HashLink>
                  </Box>
                ))}
                
                

                {/* <Box  p={1}>
                <a style={{textDecoration:'none',color:"#434040"}} href="https://www.notion.so/28e8804176e14b3ba4b15309917eded1?v=147cb6a1ffa444139b74444bb581ea8a">
                 <Typography  className={classes.onhover} gutterBottom={true} variant="subtitle2">
                       <b>Schedule</b> {" "}
                  </Typography></a></Box> */}
              

                <Box  p={1}>
                <a style={{textDecoration:'none',color:"#434040"}} href="https://live.hackthemountain.tech/">
                 <Typography  className={classes.onhover} gutterBottom={true} variant="subtitle2">
                       <b>Workshops</b> {" "}
                  </Typography></a></Box>
              </Box>
              <span id="MLHBadge">
                <img src={MLHBadge} height="150" width="180"/>
              </span>
            </Container>
          </Hidden>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
