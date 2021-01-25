import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Holder from "./holders/";
import BG from "./../../assets/backgrounds/blackdots.svg"
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
  },
  tracks:{
    textShadow: `0 0 20px #fff, 
    0 0 30px #201F56,
    0 0 40px yellow,
    0 0 50px yellow,
    0 0 60px yellow,
    0 0 70px yellow,
    0 0 80px yellow`
  },
  }
);
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
