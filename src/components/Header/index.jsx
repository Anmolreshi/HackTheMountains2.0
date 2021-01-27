import React from "react";
import { Grid, Typography, Container, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import variants from "../variants";
import data from "./data";
import BG from "./assets/bg.svg"
// import MLH from "../Sponsors/assets/mlh.svg";
// import HTM from "./assets/htm.svg";
const useStyles = makeStyles({
  container: {
    background: "#202136",
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "300px 150px",
    color: "white",
    paddingBottom: "10%",
    paddingTop: "30px",
    height: "100%"
  },
  mobilecontainer: {
    background: "#202136",
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "-120px 70px",
    color: "white",
    paddingBottom: "30%",
    paddingTop: "30px",
    height: "100%"
  },
  desc: {
    lineHeight: "32px",
    paddingBottom: "22px"
  },
  left: {
    textAlign: "center"
  },
  button: {
    color: "white",

    border: "1px solid white",
    zIndex: 0,
    textDecoration: 'none',
    "&:hover": {

      textDecoration: 'none',
    }
  },
  logo: {
    marginTop: "10px"
  },
  heading: {
    marginTop: "70px",
    // textShadow: '0 0 20px #fff, 0 0 30px #CA484F, 0 0 40px #CA484F, 0 0 50px #CA484F, 0 0 60px #CA484F, 0 0 70px #CA484F, 0 0 80px #CA484F' 
  },
  highlight: {
    textShadow: `0 0 20px #fff, 
             0 0 30px #CA484F,
             0 0 40px #CA484F,
             0 0 50px #CA484F,
             0 0 60px #CA484F,
             0 0 70px #CA484F,
             0 0 80px #CA484F`
  }
});

const Header = () => {
  // const history = useHistory();
  const classes = useStyles();
  return (
    <motion.div
      animate="visible"
      variants={variants}
      transition={{ duration: 4 }}
    >
      <Hidden smDown>
        <Grid className={classes.container} container id="top">
          <Container>
            <Grid container>

              <br /><br />
              {/* Desktop View */}

              <Grid containeritem xs={12} sm={12} md={7} lg={7}>
                {/* Title */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography
                    className={classes.heading}
                    variant="h1"
                  >
                    <b>{data.heading.line1} {data.version}</b>
                  </Typography>
                </Grid>
                {/* Moto */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography gutterBottom={true} variant="h5" >
                    "{data.heading.line2}"
              </Typography>
                </Grid>
                {/* Date */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography gutterBottom={true} variant="h5">
                    <br /><b>{data.timeheading}</b>
                  </Typography>
                </Grid>
                {/* Description */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography className={classes.desc} variant="h6">
                    <b> {data.description}</b><br /><br />
                  </Typography>
                </Grid>
                <Grid spacing={3} container item md={6} lg={6} >
                  {/* Participate Button */}
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Link to="/register">
                      <Button fullWidth variant="outlined" style={{ background: "#641BFF" }} className={classes.button}>
                        Pre Register
                        </Button>
                    </Link>
                  </Grid>{ }
                  {/* Brochure Button */}
                  <Grid item xs={12} sm={12} md={6} lg={6} >
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1d5yR7ts7lR0P3Q4pL9W3JLJitmXTsvlO/view?usp=sharing">
                      <Button fullWidth variant="outlined" className={classes.button}>
                        Brochure
                      </Button>
                    </a>
                  </Grid>
                  {/* Sponsor Button */}
                  <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Link to="/sponsors/register">
                      <Button fullWidth variant="outlined" className={classes.button}>
                        Be A Sponsor
                      </Button>
                    </Link>
                  </Grid>
                  {/* Check Status Button */}
                  <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Link to="/status">
                      <Button fullWidth variant="outlined" style={{ color: 'white', border: "1px solid white" }}>
                        Check Ticket Status
                      </Button>
                    </Link>
                  </Grid>
                  <br /><br /><br /><br /><br /><br /><br />
                </Grid>
              </Grid>



            </Grid>
          </Container>
        </Grid>
      </Hidden>
      {/* Mobile View */}
      <Hidden mdUp>
        <Grid className={classes.mobilecontainer} container id="top">
          <Container>
            <Grid container sm xs>

              <br /><br />
              {/* Title */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                  className={classes.heading}
                  variant="h1"
                >
                  <b>{data.heading.line1} {data.version}</b>
                </Typography>
              </Grid>
              {/* Moto */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} variant="h5" >
                  "{data.heading.line2}"
              </Typography>
              </Grid>
              {/* Date */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} variant="h5">
                  <br /><b>{data.timeheading}</b><br/><br/>
                </Typography>
              </Grid>
               
              <Grid spacing={3} container item md={6} lg={6} >
                  {/* Participate Button */}
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Link to="/register">
                      <Button fullWidth variant="outlined" style={{ background: "#641BFF" }} className={classes.button}>
                        Pre Register
                        </Button>
                    </Link>
                  </Grid>{ }
                  {/* Brochure Button */}
                  <Grid item xs={6} sm={6} md={6} lg={6} >
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1d5yR7ts7lR0P3Q4pL9W3JLJitmXTsvlO/view?usp=sharing">
                      <Button fullWidth variant="outlined" className={classes.button}>
                        Brochure
                      </Button>
                    </a>
                  </Grid>
                  {/* Sponsor Button */}
                  <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Link to="/sponsors/register">
                      <Button fullWidth variant="outlined" className={classes.button}>
                        Be A Sponsor
                      </Button>
                    </Link>
                  </Grid>
                  {/* Check Status Button */}
                  <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Link to="/status">
                      <Button fullWidth variant="outlined" style={{ color: 'white', border: "1px solid white" }}>
                        Check Ticket Status
                      </Button>
                    </Link>
                  </Grid>
                  <br /><br /><br /><br /><br />
                </Grid>
            </Grid>
          </Container>
        </Grid></Hidden>
    </motion.div>
  );
};
export default Header;
