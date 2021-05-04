import React from "react";
import { Typography, Grid, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HTM from "../Header/assets/htm.svg";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "#202136",
    color: "white"
  },
  container: {
    padding: "20px",
    backgroundColor: "#202136",
    borderRadius: "5px",
    elevation:'none',
  },
  head: {
    color: "yellow"
  },
  btn: {
    background: "black",
    color: "yellow",
    border: "1px solid yellow",
    borderRadius: "2px",
    "&:hover": {
      background: "#202136",
      opacity: "0.7"
    }
  }
});
const Tracks = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={4}>
                  <Grid display="block" item xs={12} sm={12} md={6} lg={6}>
                    <Card className={classes.container} elevation={false}>
                      <center>
                        <img src={HTM} width="50%" alt="Footer" />
                      </center>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography gutterBottom={true} variant="h6">
                      Hack The Mountains
                      <br /> Virtual, 26 - 27 June 2021 <br />
                      <a
                        style={{ textDecoration: "none", color: "#E9AE91" }}
                        href="https://sender14.zohoinsights.com/ocgeturl/2d6f.327230a?l=b4533e04-ace3-11eb-a090-525400fa05f6&m=b345ecb0-ace3-11eb-a821-525400103106&h=3766c33a3063a14bab66e4c49acc30a1d64982f2e28cce6cf66ad83f8c8a07c7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        MLH Code Of Conduct{" "}
                      </a>{" "}
                      |
                      <a
                        style={{ textDecoration: "none", color: "#E9AE91" }}
                        href="https://www.instagram.com/hack_the_mountains/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Instagram{" "}
                      </a>{" "}
                      |
                      <a
                        style={{ textDecoration: "none", color: "#E9AE91" }}
                        href="https://www.youtube.com/channel/UCws_V5zg2Kk7DZt7MAeEoxA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        YouTube{" "}
                      </a>{" "}
                      |
                      <a
                        style={{ textDecoration: "none", color: "#E9AE91" }}
                        href="https://twitter.com/HackMountains"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Twitter{" "}
                      </a>{" "}
                      |
                      <a
                        style={{ textDecoration: "none", color: "#E9AE91" }}
                        href="https://www.linkedin.com/company/hack-the-mountain-s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Linkedin{" "}
                      </a>
                      <br /> <br />
                      Sudan's Tech is a Tech-oriented organization based in
                      India. © Sudan's Tech
                      <br />
                      <br />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Tracks;

// Mastur
