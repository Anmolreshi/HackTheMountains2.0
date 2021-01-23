import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TeamCards from './components/teampage/index'
import ReactPlayer from "react-player";
import data from "./data";
const useStyles = makeStyles({
  root: {
    padding: "35px",
    backgroundColor: "black",
    color: "#E9AE91"
  },
  container: {
    padding: "30px",
    border: "1px solid #E9AE91",
    borderRadius: "5px"
  },
  head: {
    color: "#E9AE91"
  },
  btn: {
    background: "black",
    color: "#E9AE91",
    border: "1px solid #E9AE91",
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
    <Box className={classes.root} id="team">
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Typography variant="h4" style={{textAlign:'center'}}>
              Brought to you by our super cool team
            </Typography>
          <TeamCards/>
          </Grid>
        </Grid>
      </Box>
        
    </Box>
  );
};
export default Tracks;

// Mastur
