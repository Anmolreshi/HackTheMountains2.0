import React, { useState } from "react";
import { Typography, Backdrop, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import variants from "./../variants";
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
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

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
        <Typography variant="h2">Hack The Mountains</Typography>
        <Typography gutterBottom={true} variant="h2">
          2.0
        </Typography>

        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </motion.div>
    </Backdrop>
  );
};
export default PreLoader;
