import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import fullroad from "./assets/fullroad.png";

// import Timeline from "./components/timeline"
export default function AlternateTimeline() {
  return (<>
    <br/><br/><br/><br/><br/><br/>
    {/* <Container>
    <Grid container spacing={5} > <Grid item xs={12} sm={12} md={4} lg={4}>
       <Timeline/> 
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
      <Typography gutterBottom={true}>Being on time, is a good thing. We at Hack the Mountains, try to be best on schedule. Here is one to help you out in this hackathon</Typography>
      <Typography variant="h5">Coming Soon<br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      </Typography>
      </Grid>
   
      </Grid></Container> */}


      <Container spacing={5}>
        <Grid item xs={12} sm={12} md={5} lg={5} style={{justifyItems:'center', margin:'auto'}}>
        <Typography gutterBottom={true}>
            Being on time, is a good thing. We at Hack the Mountains, try to be best on schedule. Here is one to help you out in this hackathon
        </Typography>

        <br/><br/>

        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} style={{justifyItems:'center', margin:'auto'}}>
         <img src={fullroad} width="100%"/>
        <br/><br/><br/><br/>
        </Grid>

      </Container>


    </>
  );
}



