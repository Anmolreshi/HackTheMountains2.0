import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Holder from "./holders/";
import { makeStyles } from "@material-ui/styles";
import { useTracks } from "../../hooks/airtable/tracks";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    paddingTop: "32px",
    backgroundColor: "#E5E5E5",
    color: "black"
  },
  container: {
    padding: "20px"
  }
});
const Tracks = () => {
  let data2 = useTracks();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.margin}>
        <center>
          <Typography id="tracks" gutterBottom={true} variant="h3">
            <b>Tracks</b>
          </Typography>
        </center>
        <Grid container spacing={4} className={classes.container}>
          {data2.map((item, index) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Holder name={item.name} key={index} desc={item.description} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
export default Tracks;

// Mastur
