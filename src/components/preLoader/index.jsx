import React, { useState } from "react";
import {Backdrop, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import variants from "./../variants";
import Logo from "../Header/assets/htm.svg";
import bg from "./bg.jpg";
const useStyles = makeStyles({
  backdrop: {
    color: "white",
    background: "black",
    zIndex: 10
  }
});
const PreLoader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = React.useState(0);
  const [opacity, setOpacity] = React.useState(0.1);
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    // Obstructs Scrolling while showing welcome screen.
    document.body.style.overflow = "hidden"  

    progressRef.current = () => {
      if (progress >= 100) {
        setOpen(false);
    // allows scrolling after display is removed.
        document.body.style.overflow = ""
    
      } else {
        const diff = Math.random() * 50;
        setProgress(progress + diff);
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
            <Typography variant="body1">
               Our prayers are with Devfolio, one of our sponsors and hack culture enablers in India. <br/>
               Shakti, Founder of Devfolio.<br/> 
May his soul Rest in Peace. <br/></Typography>
          </center>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default PreLoader;
