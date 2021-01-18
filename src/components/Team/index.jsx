import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactPlayer from "react-player";
import data from "./data";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "black",
    color: "#E9AE91"
  },
  container: {
    padding: "20px",
    border: "1px solid #E9AE91",
    borderRadius: "5px"
  },
  head: {
    color: "#E9AE91"
  },
  btn: {
    background: "black",
    color: "#E9AE91",
    border: "1px solid #E9AE91",
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
    <Box className={classes.root} id="team">
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                  gutterBottom={true}
                  variant="h3"
                  className={classes.head}
                >
                  {" "}
                  <b>Meet the Force</b>
                </Typography>
                <Grid container spacing={4}>
                  <Grid display="block" item xs={12} sm={12} md={6} lg={6}>
                    <ReactPlayer
                      width="100%"
                      height="250px"
                      pip={true}
                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U?autoplay=true"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography gutterBottom={true} variant="h5">
                      {data.desc}
                      <br />
                      <br />
                      <Button
                        className={classes.btn}
                        variant="outlined"
                        disableElevation
                      >
                        Meet The Team
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
