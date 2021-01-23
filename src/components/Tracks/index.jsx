import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Holder from "./holders/";
import BG from "./../ContactUs/components/assets/bg.jpg"
import { makeStyles } from "@material-ui/styles";
import { useTracks } from "../../hooks/airtable/tracks";
const useStyles = makeStyles({
  background:{
    backgroundImage:`url(${BG})`,
  },
  root: {
    padding: "25px",
    paddingTop: "32px",
    
    color: "black"
  },
  container: {
    padding: "20px"
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
const Tracks = () => {
  let data2 = useTracks();
  const classes = useStyles();
  return (
    <div className={classes.background}>
    <Box className={classes.root}>
      <Box className={classes.margin}>
        <center>
          <Typography id="tracks" gutterBottom={true} variant="h3">
            <b>Tracks</b>
          </Typography>
          <Typography id="tracks" gutterBottom={true} variant="p">
          
          </Typography>
        </center>
        <Grid container spacing={4} className={classes.container}>
          {data2.map((item, index) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Holder className={classes.onhover} name={item.name} key={index} desc={item.description} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
    </div>
  );
};
export default Tracks;

// Mastur
