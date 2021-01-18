import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return <Grid container></Grid>;
}
