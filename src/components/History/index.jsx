import React from "react";
import { Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MLH from "../../assets/placeholders/mlh-logo-color.svg"
const useStyles = makeStyles({
  root: {
    paddingTop: "88px",
    backgroundColor: '#202136',
    backgroundImage: 'radial-gradient(#676666 0.7px, transparent 0)',
    backgroundSize:`15px 15px`,
    color: "white",
    paddingBottom: "88px",
    paddingLeft: "14px",
    paddingRight: "14px"
  },
  items: {
    '&:hover':{
      opacity:'0.8',
      cursor:'pointer',
      border:'1px solid aqua',  
      color:'aqua'
    },
    
  },
  button: {
    color: "white",
    background: "black",
    border: "1px solid white",
    zIndex: 0,
    textDecoration: 'none',
    "&hover": {
      background: "white",
      color: "white",
      textDecoration: 'none',
    }
  },
});
const Tracks = () => {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography gutterBottom={true} variant="h2">
              Hack The Mountains 1.0<br />
            </Typography>
            <Typography variant="h6">
              <b> League Partner for 1.0</b> <br />
              <img alt="MLH LOGO" src={MLH} width="150px" height="70px" />
            </Typography>
            <Typography  gutterBottom={true} variant="h6">
              <br/> It was the first ever international hackathon, in the state of 
            </Typography>
            <Typography  gutterBottom={true} variant="h6">
              Jammu and Kashmir, India <br/>
            </Typography><br/>
            <a target="_blank" rel="noopener noreferrer" href="http://season1.hackthemountain.tech/">
                <Button variant="outlined" className={classes.button}>
                  Know More
                </Button>
            </a><br/><br/>
          </Grid>
          <Grid container spacing={3} item xs={12} sm={12} md={5} lg={5}>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <StatusBox name="Lines_Of_Code" count="50K+" bg="black"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <StatusBox name="Worth Prizes" count="$30K+" bg="black" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <StatusBox name="Workshops" count="40+" bg="black"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <StatusBox name="Sponsors" count="50+" bg="black" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
};
export default Tracks;


const StatusBox = (props) => {

  const count = props.count;
  const name = props.name;
  const bg = props.bg;
  const classes = useStyles();

  return (
    <div className={classes.items} style={{ cursor:'pointer', border:'1px solid white',borderRadius:'10px',background: bg, width:'100%', paddingTop:'20px' }}>
      <Grid container  >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" style={{ textAlign: 'center' }}>
           {count}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" style={{ textAlign: 'center' }} >{name}<br/><br/></Typography>

        </Grid>
      </Grid>
    </div>
  )
}







