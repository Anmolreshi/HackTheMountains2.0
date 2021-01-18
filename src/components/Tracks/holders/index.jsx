import React from "react";
import { Typography, Box, Grid, Container, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
    padding: "30px",
    border: "8px solid #E5E5E5",
    borderTop: "black",
    borderBottom: "black",
    background: "black",
    textAlign: "center"
  },
  backdrop: {
    zIndex: 3,
    color: "white",
    background: "rgba(0,0,0,0.83)"
  },
  ribbon: {
    width: "100%",
    height: "8px",
    padding: "-8px",
    display: "block",
    background: "linear-gradient(1.27deg,#ea4a5a 0,#2188ff 100%)",
    transition: "all .4s ease-in-out"
  },
  line: {
    width: "100%",
    height: "0.5px",

    display: "block",
    background: "grey",
    transition: "all .4s ease-in-out"
  },
  btn: {
    display: "block",
    width: "100%",
    border: "none",
    outline: "none",
    cursor: "pointer"
  }
});

const Holder = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <span className={classes.ribbon}></span>
      <button className={classes.btn} onClick={handleToggle}>
        <Box borderTop={0} className={classes.root}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h6">{props.name}</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </button>
      <span className={classes.ribbon}></span>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Box
          style={{
            borderRadius: "21px",
            border: "2px solid #ea4a5a",
            boxShadow: "14px 12px #2188ff"
          }}
        >
          <Box p={1} style={{ textAlign: "center", width: "280px" }}>
            <center>
              <Typography gutterBottom={true} variant="h6">
                {props.name}
              </Typography>
            </center>
            <Typography gutterBottom={true} variant="h5">
              {props.desc}
            </Typography>
          </Box>
        </Box>
      </Backdrop>
    </>
  );
};
export default Holder;
