import React from "react";
import { Grid, Typography, Container, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// import { useHistory } from 'react-router-dom';

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
  
  },

  left: {
    textAlign:'justify',
    marginRight:'5px',
    borderRadius: '20px',
    background: 'white',
   
  },
  rightup: {
    textAlign:'justify',
    marginLeft:'5px',
    marginBottom:'5px',
    borderRadius: '20px',
    background: 'white',

  },
  rightdown: {
    textAlign:'justify',
    marginLeft:'5px',
    marginTop:'5px',
    borderRadius: '20px',
    background: 'white',

  }

});

const About = () => {
  // const history = useHistory();
  const classes = useStyles();
  return (<>
  <Hidden smDown><div id="about" className={classes.container}><br/><br/>
      <Grid container>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.left}>
              <Box >
                <Typography variant="h4" style={{textAlign:'center'}} gutterBottom={true}><b>What's this all about?</b></Typography>
                <Typography variant="h5"> We are organizing an International Level Hackathon “HACK THE MOUNTAINS 2.O”  a 36 hour virtual Hackathon  by the First ever Tech community from Jammu And Kashmir “SUDAN’S TECH ” -  by the students and for the students.
<br/><br/>
<a target="_blank" href="https://sudans.tech/" rel="noopener noreferrer">
        SUDAN'S TECH</a>  is a Non profit Organization registered under government of india under section - 8 company rules which provides technical education to students. Our main focus is to provide technical education and make students industry ready.
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={8} item xs={12} sm={12} md={6} lg={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.rightup}>
                <Box>
                  <Typography variant="h4"  style={{textAlign:'center'}} gutterBottom={true}><b>How do I signup?</b> </Typography>
                  <Typography variant="h5">
                   You can pre-register for the hackathon. Soon we will be opening 
                   registration, where you can register yoursel. We will roll out instructions to register in the form of video tutorial as well as instructions even on our social handles.
        
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.rightdown}>
                <Box >
                  <Typography variant="h4"  style={{textAlign:'center'}} ><b>Want to ask us something?</b> </Typography>
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
          </Hidden>
          <Hidden mdUp>
          <div id="about" className={classes.container}>
          <Container>
            <Grid container>
      <Grid item xs={12} sm={12} style={{marginBottom:'10px',background: 'white', padding:'20px', borderRadius:'5px'}}>
      <Box >
                      <Typography  style={{textAlign:'center'}} variant="h4" gutterBottom={true}><b>What's this all about?</b></Typography>
                      <Typography variant="h5"><br/> We are organizing an International Level Hackathon “HACK THE MOUNTAINS 2.O”  a 36 hour virtual Hackathon  by the First ever Tech community from Jammu And Kashmir “SUDAN’S TECH ” -  by the students and for the students.
      <br/><br/>
      <a target="_blank" href="https://sudans.tech/" rel="noopener noreferrer">
        SUDAN'S TECH</a> is a Non profit Organization registered under government of india under section - 8 company rules which provides technical education to students. Our main focus is to provide technical education and make students industry ready.
                      </Typography>
                    </Box>
      </Grid>
      <Grid item xs={12} sm={12} style={{marginBottom:'10px',background: 'white', padding:'20px', borderRadius:'5px'}}>
                      <Box>
                        <Typography  style={{textAlign:'center'}} variant="h4" gutterBottom={true}><b>How do I signup?</b> </Typography>
                        <Typography variant="h5"><br/>
                        You can pre-register for the hackathon. Soon we will be opening 
                        registration, where you can register yoursel. We will roll out instructions to register in the form of video tutorial as well as instructions even on our social handles.
              
                      </Typography>
                      </Box>
      </Grid>
      <Grid itemxs={12} sm={12} style={{marginBottom:'10px',background: 'white', padding:'20px', borderRadius:'5px'}}>
      <Box >
                  <Typography   style={{textAlign:'center'}} variant="h4"><b>Want to ask us something?</b> </Typography>
                  <Typography variant="h5"><br/>
                 Feel free to reach out to us on our socials,
                 Twitter, LinkedIn, or if you need a quick help, raise a ticket for your query 
                 here.
        
                </Typography>
                </Box>
      </Grid>
            </Grid>
          </Container>
          </div>
          </Hidden>
          
</>
  );
};
export default About;
