import React from "react";
import { Box, Button, Typography, Backdrop, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import data from "./data";
import Icon from "./mobile.svg";
import { HashLink } from "react-router-hash-link";
import MLHBadge from "./mlh_Badge.svg"
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white",
    background: "rgba(0,0,0,0.83)",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>
        <img src={Icon} alt="ico" />
        <span id="MLHBadge" style ={{zIndex:50}}>
        <img src={MLHBadge} height="150" width="180" />
      </span>
      </Button>
    
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box>
              {data.map((item, index) => (
                <Box p={1} style={{ textAlign: "center" }}>
                  {/* 
                <HashLink to={`/${item.path}`}>{item.name}</HashLink>
              */}
                  <HashLink
                    style={{
                      textDecoration: "none",
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                    smooth
                    to={`/${item.path}`}
                  >
                    <Typography gutterBottom={true} variant="subtitle1">
                      <b>{item.name}</b>
                    </Typography>
                  </HashLink>
                </Box>
              ))}
              <Box p={1} style={{ textAlign: "center" }}>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://live.hackthemountain.tech/"
                >
                  <Typography
                    className={classes.onhover}
                    gutterBottom={true}
                    variant="subtitle1"
                  >
                    <b>Workshops</b>{" "}
                  </Typography>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Backdrop>
      
    </div>
  );
}
