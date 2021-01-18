import React, { useState } from "react";
import { Typography, Backdrop, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import variants from "./../variants";
import Logo from "../Header/assets/htm.svg";
import bg from "./bg.jpg";
const useStyles = makeStyles({
  backdrop: {
    color: "white",
    background: "black",
    zIndex: 2
  }
});
const PreLoader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [opacity, setOpacity] = React.useState(0.1);
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress >= 100) {
        setOpen(false);
      } else {
        const diff = Math.random() * 50;
        const diff2 = Math.random() * 30;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
        setOpacity(progress * 0.01);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <motion.div
        animate="fadein"
        variants={variants}
        transition={{ duration: 2 }}
      >
        <div style={{ backgroundImage: bg }}>
          <center>
            <img
              width="320px"
              src={Logo}
              alt="logo"
              style={{ opacity: opacity }}
            />
            <br />
            <LinearProgress color="secondary" />
            <br />
            <Typography variant="h3">
              Hack The Mountains 2.0 <br />
              Coming Soon
            </Typography>
          </center>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default PreLoader;
