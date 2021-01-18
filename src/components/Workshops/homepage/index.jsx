import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Workshop from "./Workshop.png";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    backgroundColor: "white",
    color: "black"
  },
  container: {
    padding: "20px",
    border: "1px solid black",
    borderRadius: "5px"
  },
  head: {
    color: "black"
  },
  btn: {
    background: "black",
    color: "#E9AE91",
    border: "1px solid black",
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
    <Box className={classes.root} id="workshops">
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
                  <b>Sessions and Workshops</b>
                </Typography>
                <Grid container spacing={4}>
                  <Grid display="block" item xs={12} sm={12} md={6} lg={6}>
                    <img src={Workshop} alt="Workshop" width="100%" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography gutterBottom={true} variant="h5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis, maxime. Nisi doloremque error officia velit
                      dolores, vero sit fugit, nostrum ratione eveniet fuga iste
                      consectetur sequi animi iusto quos. Laudantium.
                      <br />
                      <br />
                      <Link to="/workshops">
                        <Button
                          className={classes.btn}
                          variant="outlined"
                          disableElevation
                          onClick={() => {}}
                        >
                          See Workshops
                        </Button>
                      </Link>
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
