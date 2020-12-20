import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Holder from "./holders/";
import data from "./data.js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "black",
    color: "white"
  },
  container: {
    padding: "20px"
  }
});
const Tracks = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <center>
        <Typography variant="h2">
          <b>Tracks</b>
        </Typography>
      </center>
      <Grid container spacing={4} className={classes.container}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Holder name={item.name} key={index} desc={item.desc} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Tracks;

// Mastur
