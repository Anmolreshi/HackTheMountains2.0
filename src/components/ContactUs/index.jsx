import React from "react";
import {

  Grid,
  Typography,
  Container,

} from "@material-ui/core";
import SendQuery from "./components/form/postAction";


import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {


  },
  bgComp: {
    backgroundImage: 'radial-gradient(#202136 0.6px, transparent 0)',
    backgroundSize: `15px 15px`,
    paddingTop: "45px",
    paddingBottom: "45px"
  }
})
const ContactUs = () => {
  const classes = useStyles();



  return (

    <div id="contactus" className={classes.bgComp}>
      <Container className={classes.root}>
        <br />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography style={{ textAlign: "center" }} variant="h3" gutterBottom={true}>
            <b>Contact Us</b>
          </Typography>
          <Typography style={{ textAlign: "center" }} gutterBottom={true} variant="h5" >
            <b>Raise a Query</b>
          </Typography>
          <SendQuery />
        </Grid>






      </Container></div>
  );
};
export default ContactUs;
