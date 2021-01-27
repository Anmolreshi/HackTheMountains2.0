import React from "react";
import { Container, Grid, Typography, Hidden } from "@material-ui/core"
import Form from "./getAction/index"
export default function AlternateTimeline() {
  return (<Container>
    <br /><br /><br /><br />
    <Container>
      <Grid container spacing={5} >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography gutterBottom={true} variant="h4">
            Ticket Status
      </Typography>
          <Typography gutterBottom={true} variant="h6" style={{textAlign:'justify'}}>
          
          <b>Step 1:</b> Select your ticket type.
          <span style={{color:'grey'}}>
          <br/>Following types are valid.<br/> Query, Volunteer, Mentor, Speaker and Sponsor.<br/>
          </span><br/><b>Step 2:</b> Enter your ticket id. <br/>
          <br/><b>Step 3:</b> Get the status <br/>
      </Typography>
          <Hidden smDown>
          <Typography gutterBottom={true} variant="p">
          <br /><br /><br /><br /><br /><br />Our <a href="https://linkedin.com/in/imabp" target="_blank" rel="noopener noreferrer">Web Engineering Team Lead</a> has decided to provide you 
          credible request and support system in the hackathon. 
          <br/><br/><br /><br /><br /> <br /><br /><br />
          </Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Form /><br/><br/> 
        </Grid>

        <Hidden mdUp>
          <Typography gutterBottom={true} variant="p">
          Our <a href="https://linkedin.com/in/imabp" target="_blank" rel="noopener noreferrer">Web Engineering Team Lead</a> has decided to provide you 
          credible request and support system in the hackathon. 
          <br/><br/> 
          <br /><br /><br /> <br /><br /><br />
          </Typography>
        </Hidden>
      </Grid></Container>
  </Container>
  );
}



