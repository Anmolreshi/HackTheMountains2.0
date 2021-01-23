import React from "react";
import { Grid, Typography, Container, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import variants from "../variants";
import data from "./data";
import BG from "./assets/bg.svg"
// import MLH from "../Sponsors/assets/mlh.svg";
import HTM from "./assets/htm.svg";
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
  const history = useHistory();
  const classes = useStyles();
  return (
    <motion.div
      animate="visible"
      variants={variants}
      transition={{ duration: 4 }}
    >
      <Hidden smDown>
        <Grid className={classes.container} container>
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
                <Grid container item >
                  {/* Participate Button */}
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                      <Link to="/register">
                        <Button variant="outlined" className={classes.button}>
                          Pre Register
                        </Button>
                      </Link>
                    </Grid>{} 
                  {/* Brochure Button */}
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                      <Link to="/register">
                        <Button variant="outlined" className={classes.button}>
                          Brochure
                        </Button>
                      </Link>
                    </Grid><br /><br /><br /><br /><br /><br /><br />
                  </Grid>
              </Grid>



            </Grid>
          </Container>
        </Grid>
      </Hidden>
      {/* Mobile View */}
      <Hidden mdUp>
        <Grid className={classes.mobilecontainer} container>
          <Container>
            <Grid container>

              <br /><br />
              {/* Title */}
              <Typography

                variant="h2"
              >
                <b>{data.heading.line1} {data.version}</b>
              </Typography>
              {/* Moto */}
              <Typography gutterBottom={true} variant="h5" >
                "{data.heading.line2}"
              </Typography>
              {/* Date */}
              <Typography gutterBottom={true} variant="h5">
                <b>{data.timeheading}</b>
              </Typography>
              {/* Participate Button */}
              <Link to="/register">
                <Button variant="outlined" className={classes.button}>
                  Participate
                </Button>
              </Link>


            </Grid>
          </Container>
        </Grid></Hidden>
    </motion.div>
  );
};
export default Header;
