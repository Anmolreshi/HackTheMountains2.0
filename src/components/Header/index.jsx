import React from "react";
import { Grid, Typography, Container, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import variants from "../variants";
import data from "./data";
import MLH from "../Sponsors/assets/mlh.svg";
import HTM from "./assets/HTM.png";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#202136",
    color: "white",
    padding: "25px"
  },
  desc: {
    lineHeight: "32px",
    paddingBottom: "22px"
  },
  left: {
    textAlign: "left",
    padding: "25px"
  },
  button: {
    color: "white",
    background: "black",
    border: "1px solid white",
    "&hover": {
      background: "white",
      color: "black"
    }
  },
  logo: {
    marginTop: "62px"
  },
  heading: { marginTop: "30px" }
});

const Header = () => {
  const classes = useStyles();
  return (
    <motion.div
      animate="visible"
      variants={variants}
      transition={{ duration: 4 }}
    >
      <Grid className={classes.container} container>
        <Grid className={classes.left} item xs={12} sm={12} md={6} lg={6}>
          <Container>
            <Typography
              className={classes.heading}
              gutterBottom={true}
              variant="h1"
            >
              {data.heading.line1}
              <br />
              {data.heading.line2} {data.version}
            </Typography>
            <Typography gutterBottom={true} variant="h5">
              <b>{data.timeheading}</b>
              <br />
              <br />
            </Typography>

            <Typography className={classes.desc} variant="subtitle1">
              {data.subheading}
            </Typography>
            <Typography className={classes.desc} variant="body1">
              <b>League Partner</b>
              <br />
              <img alt="htm" src={MLH} />
            </Typography>

            <Button variant="outlined" className={classes.button}>
              Participate
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            className={classes.heading}
            display="flex"
            justifyContent="center"
          >
            <img alt="htm" className={classes.logo} src={HTM} width="70%" />
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};
export default Header;
