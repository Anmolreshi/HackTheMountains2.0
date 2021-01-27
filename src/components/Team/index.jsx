import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TeamCards from './components/cards/index'

const useStyles = makeStyles({
  root: {
    padding: "35px",
    backgroundColor: "#202136",
    backgroundImage: 'radial-gradient(#676666 0.6px, transparent 0)',
    backgroundSize:`15px 15px`,
    color: "white"
  },
  container: {
    padding: "30px",
    borderRadius: "5px"
  },
  head: {
    color: "#E9AE91"
  },
highlighter:{
  textAlign:'center', 
  // textShadow: `0 0 20px #fff, 
  // 0 0 30px #CA484F,
  // 0 0 40px #CA484F,
  // 0 0 50px #CA484F,
  // 0 0 60px #CA484F,
  // 0 0 70px #CA484F,
  // 0 0 80px #CA484F`
}
});
const Tracks = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="team">
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Typography variant="h4" className={classes.highlighter}>
              <b>Brought to you by</b>
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
