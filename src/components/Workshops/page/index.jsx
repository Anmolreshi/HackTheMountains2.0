import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import variants from "../../variants";
import Holder from "./components/holder";
// import MLH from "../Sponsors/assets/mlh.svg";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#202136",
    color: "white",
    paddingBottom: "22px",
    paddingTop: "82px",
    height: "100vh"
  }
});

const Workshop = () => {
  const classes = useStyles();
  return (
    <motion.div
      animate="visible"
      variants={variants}
      transition={{ duration: 4 }}
    >
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography style={{ textAlign: "center" }} variant="h3">
            Workshops
          </Typography>
        </Grid>
        <Grid container>
          <Grid item>
            <Holder />
          </Grid>{" "}
          <Grid item>
            <Holder />
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};
export default Workshop;
