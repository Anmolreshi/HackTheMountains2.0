import React from "react";
import { Typography, Box, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { usePrevSponsors } from "../../../hooks/airtable/sponsors/previoussponsors";
import Slides from "./Carousel";
const useStyles = makeStyles({
  root: {
    padding: "25px"
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
const PreviousSponsors = (props) => {
  const data = usePrevSponsors();
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();
  const handleVisibility = (data) => {};

  return (
    <>
      <Container className={classes.root}>
        <Typography gutterBottom={true} variant="h3">
          <center>
            <b>Sponsors</b>
          </center>
          <br />
        </Typography>
        <Box>
          {" "}
          <Typography gutterBottom={true} variant="h5">
            <center>
              <b>Coming Soon</b>
              <br />
              <br />
              <Button variant="outlined" className={classes.button}>
                Download Brochure
              </Button>
            </center>
            <br />
          </Typography>
        </Box>
      </Container>
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
    </>
  );
};

export default PreviousSponsors;
