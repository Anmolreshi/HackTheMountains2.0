import React from "react";
import { Typography, Box, Container, Grid,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from 'react-router-dom'
import { usePrevSponsors } from "../../../hooks/airtable/sponsors/previoussponsors";
import Slides from "./Carousel";
const useStyles = makeStyles({
  root: {
    padding: "25px",
  
  },
  container: {
    padding: "20px",
    borderRadius: "5px"
  },
  newsponsor:{
    background: "#202136",
    color:'white',
    padding:'25px',
    backgroundImage: 'radial-gradient(grey 0.6px, transparent 0)',
    backgroundSize:`15px 15px`,
  },
  btn: {
    background: "black",
    color: "white",
    borderRadius: "2px",
    "&:hover": {
      background: "#202136",
      opacity: "0.7"
    }
  },
  // highlighter:{
  //   textShadow: `0 0 20px #fff, 
  //   0 0 30px #CA484F,
  //   0 0 40px #CA484F,
  //   0 0 50px #CA484F,
  //   0 0 60px #CA484F,
  //   0 0 70px #CA484F,
  //   0 0 80px #CA484F`
  // }
});
const PreviousSponsors = (props) => {
  const data = usePrevSponsors();
  // const [visible, setVisible] = React.useState(false);
  const classes = useStyles();
  // const handleVisibility = (data) => {};

  return (
    <div id="sponsors">
    <div>
    <Container className={classes.root}>
        <Typography gutterBottom={true} variant="h3">
          <center>
            <b>Previous Sponsors</b>
          </center>
          <br />
        </Typography>
        <Box>
          <Slides data={data} />
        </Box>
    </Container>
    </div>
    <div className={classes.newsponsor}>
    
    <Container >
        <Typography className={classes.highlighter} 
        gutterBottom={true} 
        variant="h4">
          <center>
            <b>Our Sponsors</b>
          </center>
          <br />
        </Typography>
        <Box>
          {" "}
          <Typography gutterBottom={true} variant="h2">
            <center>
              <b>Coming Soon</b><br/><br/>
            </center>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Link to="/sponsors/register">
                      <Button fullWidth variant="outlined" style={{color:'white', border:'1px solid white',textDecoration:'none'}}>
                        Be A Sponsor
                      </Button>
                    </Link>
            </Grid>
          </Typography>
        </Box>
      </Container>

    </div>
      
      
    </div>
  );
};

export default PreviousSponsors;
