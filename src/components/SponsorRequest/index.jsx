import React from "react";
import { Container, Grid, Typography, Hidden } from "@material-ui/core"
import Form from "./postAction/index"
export default function AlternateTimeline() {
  return (<Container>
    <br /><br /><br /><br />
    <Container>
      <Grid container spacing={5} >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography gutterBottom={true} variant="h4">
            Be A Sponsor!
      </Typography>
          <Typography gutterBottom={true} variant="h6">
           Be a part of an impact.<br/><br/> We had over 50+ prime sponsors, last season.
           You can see our brochure <a target="_blank" rel="noopener noreferrer"href="https://drive.google.com/file/d/1d5yR7ts7lR0P3Q4pL9W3JLJitmXTsvlO/view?usp=sharing">here</a>
      </Typography>
          <Hidden smDown>
            <Typography gutterBottom={true} variant="p">
            <br /><br /><br /> <br /><br /><br /><br /><br /><br />At Hack The Mountains 1.0, we were sponsored by big brands like,
           <b>MLH</b>,<b>Linode</b>,<b>Hack Club Bank</b>,<b>echoAR</b> and lot more, 
           see them <a target="_blank" rel="noopener noreferrer"href="https://season1.hackthemountain.tech/#sponsors">here</a>  <br/><br/><br/>
              <br /><br /><br /> <br /><br /><br /></Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Form />
        </Grid>

        <Hidden mdUp>
          <Typography gutterBottom={true} variant="p">
           At Hack The Mountains 1.0, we were sponsored by big brands like,
           <b>MLH</b>,<b>Linode</b>,<b>Hack Club Bank</b>,<b>echoAR</b> and lot more, 
           see them <a target="_blank" rel="noopener noreferrer"href="https://season1.hackthemountain.tech/#sponsors">here</a>  
           
           . <br /><br /><br /> <br /><br /><br />
          </Typography>
        </Hidden>
      </Grid></Container>
  </Container>
  );
}



