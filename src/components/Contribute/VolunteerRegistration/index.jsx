import React from "react";
import { Container, Grid, Typography, Hidden } from "@material-ui/core"
import Form from "./components/postform"
export default function AlternateTimeline() {
  return (<Container>
    <br /><br /><br /><br />
    <Container>
      <Grid container spacing={5} >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography gutterBottom={true} variant="h4">
            Be a Volunteer.<br/>
            We care about our Hackathon not your data!
      </Typography>
          <Typography gutterBottom={true} variant="h6">
            We follow strict privacy rules. <br />
            Your data will <b>not</b> be shared with any stakeholders, sponsors or ambassadors.
      </Typography>
          <Hidden smDown>
            <Typography gutterBottom={true} variant="p">
              <br /><br /><br /><br /><br /><br />By pre-registering in this hack, you choose us to communicate
              with you on Hack The Mountain's updates and schedules.
              <br /><br /><br /> <br /><br /><br /></Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Form />
        </Grid>

        <Hidden mdUp>
          <Typography gutterBottom={true} variant="p">
            By pre-registering in this hack, you choose us to communicate
            with you on Hack The Mountain's updates and schedules. <br /><br /> <br /><br /><br />
          </Typography>
        </Hidden>
      </Grid></Container>
  </Container>
  );
}



