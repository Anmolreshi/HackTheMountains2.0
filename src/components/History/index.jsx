import React from "react";
import { Typography, Grid, Box, Hidden, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BG from "./bg.svg"
import MLH from "../../assets/placeholders/mlh-logo-color.png"
const useStyles = makeStyles({
  root: {
    paddingTop: "88px",
    backgroundColor: '#202136',
    backgroundImage: `url(${BG})`,
    color: "white",
    paddingBottom: "88px",
    paddingLeft: "14px",
    paddingRight: "14px"
  },
  statusBox: {
    height: "100%",
    border: '5px solid #202136',
    background: '#CA484F'
  },
  container: {
    paddingTop: "22px",
    paddingBottom: "22px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "5px",
    margin: "5px",
    textAlign: "center",
    background: "rgba(0,0,0,0.6)"
  }
});
const Tracks = () => {
  const classes = useStyles();
  return (

    <Grid container className={classes.root}>
      <Container>
        <Grid container spacing={6}>
        <Grid container item xs={12} sm={12} md={5} lg={5} spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography gutterBottom={true} variant="h2">
              Hack The Mountains 1.0<br />
            </Typography>
            <Typography variant="h6">
            <b> League Partner for 1.0</b> <br />
              <img src = {MLH} width="150px" height="70px"/ >
            </Typography>
          </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} spacing={6}>
            <Typography variant="h4">
              Let's see few glimpses of our season 1 hackathon.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={12} md={6} lg={6} spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4"style={{color:'aqua'}}>
           50K+ Lines of Code<br/>
             <br/>1300+ Registrations<br/>
             <br/>160+  Impactful Projects<br/>
             <br/>40+ Expert Sessions<br/>
             <br/>10+ Prime Judges<br/>
             <br/>50+ Sponsors<br/>
        
            </Typography>
          </Grid>
          
        </Grid></Grid>
      </Container>
    </Grid>

  );
};
export default Tracks;

// Mastur
const StatusBox = (props) => {

  const count = props.count;
  const type = props.type;
  const name = props.name;
  const classes = useStyles();


  return (
    <div >
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <span style={{ fontSize: '50px', fontWeight: '200', textAlign: 'center' }}> {count}<span>
            {
              !type && "+"
            }
          </span>
            <span>
              {
                type && "K+"
              }
            </span>
          </span>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6">{name}</Typography>

        </Grid>
      </Grid>
    </div>
  )
}