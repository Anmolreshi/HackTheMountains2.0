import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactPlayer from "react-player";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "#647F49",
    color: "white"
  },
  container: {
    padding: "20px",

    borderRadius: "5px"
  },

  btn: {
    background: "black",
    color: "white",
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
                <Typography gutterBottom={true} variant="h3" id="sponsors">
                  {" "}
                  <b>Sponsors</b>
                </Typography>
                <Grid container spacing={4}>
                  <Grid display="block" item xs={12} sm={12} md={6} lg={6}>
                    <ReactPlayer
                      width="100%"
                      height="250px"
                      pip={true}
                      url="https://youtu.be/hhFhBa04I5Y"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography gutterBottom={true} variant="h5">
                      {/* <i>Be a part of an Impact . . .</i> */}
                      <br />
                      <b>Together we can make a difference.</b>
                      <br /> Yes you heard it right ! Having your presence at
                      our unique event will give you the chance to observe Hands
                      on experience about how students solve real world
                      problems.
                      <br />
                      <br />
                      <Button
                        className={classes.btn}
                        variant="contained"
                        disableElevation
                      >
                        Be A Sponsor
                      </Button>
                      <br />{" "}
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
