import React from "react";
import { Typography, Grid, Box, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import data from "./data";
const useStyles = makeStyles({
  root: {
    paddingTop: "88px",
    backgroundImage: `url(${data.bgImage})`,
    color: "white",
    paddingBottom: "88px",
    paddingLeft: "14px",
    paddingRight: "14px"
  },
  container: {
    paddingTop: "22px",
    paddingBottom: "22px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "5px",
    margin: "5px",
    textAlign: "center",
    background: "rgba(0,0,0,0.6)"
  }
});
const Tracks = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} variant="h4">
                  Hack The Mountains <b>1.0</b>
                </Typography>
                <Typography variant="h5">
                  A phenomenal journey started <br />
                  on 10th-11th October 2020
                  <br />
                  <br />
                  <b>2500+ Participants</b>
                  <br />
                  <b>300+ International Sponsors</b>
                  <br />
                  <b>30+ Prime Speakers</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default Tracks;

// Mastur
