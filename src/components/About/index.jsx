import React from "react";
import { Grid, Typography, Container, Button, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import variants from "../variants";
// import data from "./data";
// import BG from "./assets/bg.svg"
// // import MLH from "../Sponsors/assets/mlh.svg";
// import HTM from "./assets/htm.svg";
const useStyles = makeStyles({
  container: {
    background: '#CA484F',
    paddingTop: '50px',
    paddingBottom: '50px',
    border:'5px solid #CA484F',
  },

  left: {
    textAlign:'center',
    border:'15px solid #CA484F',
    borderRadius: '20px',
    background: 'white',
   
  },
  rightup: {
   
    border:'15px solid #CA484F',
    borderRadius: '20px',
    background: 'white',

  },
  rightdown: {
  
    border:'15px solid #CA484F',
    borderRadius: '20px',
    background: 'white',

  }

});

const About = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div id="about" className={classes.container}>
      <Grid container>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.left}>
              <Box >
                <Typography variant="h4" gutterBottom={true}><b>What's this all about?</b></Typography>
                <Typography variant="h5"> An online hackathon focussing on bringing wide range of people closer 
                and create super cool things that the world needs. <br/><br/>
                We at <b>Sudan's Tech</b> love to encourage people 
                to build something great and useful, and we decided to take our hackathon to 2nd season, and bring you back, 
                Hack The Mountains 2.0.
        
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={4} item xs={12} sm={12} md={6} lg={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.rightup}>
                <Box>
                  <Typography variant="h4" gutterBottom={true}><b>How do I signup?</b> </Typography>
                  <Typography variant="h5">
                    Pre-Registrations are open now, you can pre register yourself 
                    here.<br/> 
                    We will be reaching you out soon at your inbox, with more updates 
                    for Hack The Mountains.
        
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.rightdown}>
                <Box >
                  <Typography variant="h4"><b>Want to ask us something?</b> </Typography>
                  <Typography variant="h5">
                 Feel free to reach out to us on our socials,
                 Twitter, LinkedIn, or if you need a quick help, raise a ticket for your query 
                 here.
        
                </Typography>
                </Box>
              </Grid>

            </Grid>

          </Grid>
        </Container>
      </Grid>
    </div>

  );
};
export default About;
