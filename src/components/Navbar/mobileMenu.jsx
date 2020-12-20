import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { Box, Button, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data";
import Icon from "./mobile.svg";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white"
  }
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>
        <img src={Icon} alt="ico" />
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Box>
          {data.map((item, index) => (
            <Box p={1} style={{ textAlign: "center" }}>
              <Typography gutterBottom={true} variant="h3">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Backdrop>
    </div>
  );
}
