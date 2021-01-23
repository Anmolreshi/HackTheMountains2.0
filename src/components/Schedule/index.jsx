import React from "react";
import {Container, Grid, Typography} from "@material-ui/core"
import Timeline from "./components/timeline"
export default function AlternateTimeline() {
  return (<>
    <br/><br/><br/><br/>
    <Container>
    <Grid container spacing={5} > <Grid item xs={12} sm={12} md={4} lg={4}>
      <Timeline/>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
      <Typography gutterBottom={true}>Being on time, is a good thing. We at Hack the Mountains, try to be best on schedule. Here is one to help you out in this hackathon</Typography>
      <Typography variant="h5">Coming Soon<br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      </Typography>
      </Grid>
   
      </Grid></Container>
    </>
  );
}



