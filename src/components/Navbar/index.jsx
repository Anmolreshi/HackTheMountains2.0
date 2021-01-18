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

import { HashLink } from "react-router-hash-link";
import data from "./data";
import Backdrop from "./mobileMenu";
const useStyles = makeStyles({
  root: {
    zIndex: 1,
    backgroundColor: "#202136"
  }
});

function ElevationScroll(props) {
  const { children, window } = props;
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
            <span style={{ textAlign: "right" }}>HTM 2.0</span>
          </Hidden>
          <Hidden smDown>
            <Container>
              <Box display="flex" flexDirection="row" justifyContent="center">
                {data.map((item, index) => (
                  <Box p={1}>
                    <HashLink
                      style={{
                        textDecoration: "none",
                        color: "white",
                        whiteSpace: "nowrap"
                      }}
                      smooth
                      to={`/${item.path}`}
                    >
                      <Typography gutterBottom={true} variant="subtitle1">
                        {item.name}{" "}
                      </Typography>
                    </HashLink>
                  </Box>
                ))}
              </Box>
            </Container>
          </Hidden>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
