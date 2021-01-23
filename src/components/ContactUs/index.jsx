import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  TextareaAutosize
} from "@material-ui/core";
import SendQuery from "./components/form/postAction";
import CheckStatus from "./components/form/getAction"
import BG from "./components/assets/bg.jpg"
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    paddingTop: "45px",


  },
  bgComp: {
    background: `url(${BG})`
  }
})
const ContactUs = () => {
  const classes = useStyles();



  return (

    <div className={classes.bgComp}>
      <Container className={classes.root}>
        <Typography variant="h3" gutterBottom={true}>
          <b>Contact Us</b>

        </Typography>

        <Grid container>
          <Grid container item xs={12} md={6} lg={6} sm={12} >
            <Typography variant="h5" >
              <b>Raise a Query</b>
            </Typography>
            <SendQuery />
          </Grid>
          <Grid container item xs={12} md={6} lg={6} sm={12} >
          <Typography variant="h5">
            <b>Check Status</b>
          </Typography>
            <CheckStatus />
          </Grid>

        </Grid></Container></div>
  );
};
export default ContactUs;
