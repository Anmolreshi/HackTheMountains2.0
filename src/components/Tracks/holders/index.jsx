import React from "react";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid white",
    borderRadius: "4px",
    color: "white",
    padding: "8px"
  }
});

const Holder = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4">{props.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6">{props.desc}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Holder;

// Mastur
