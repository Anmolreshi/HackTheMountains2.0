import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactPlayer from "react-player";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "#202136",
    color: "white"
  },
  container: {
    padding: "20px",
    border: "1px solid white",
    borderRadius: "5px"
  },
  head: {
    padding: "25px",
    backgroundColor: "#DFDFDF",
    color: "white",
    height: "88px"
  },
  leadholder: {
    border: "7px solid purple",
    marginLeft: "28px",
    marginRight: "28px"
  },
  teamholder: {
    border: "7px solid #000000"
  },
  padding: {
    marginLeft: "28px",
    marginRight: "28px"
  },
  btn: {
    background: "black",
    color: "white",
    borderRadius: "2px",
    "&:hover": {
      background: "#202136",
      opacity: "0.7"
    }
  }
});
const Tracks = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3">Contact Us</Typography>
    </Box>
  );
};
export default Tracks;

// Mastur
