import { Box, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const Holder = (props) => {


const useStyles = makeStyles({
  hoverClass: {
    transition: "transform 1s",
    '&:hover':{
      cursor:'pointer',
      boxShadow:`0px 0px 0px 0px,0px 0px 0px 0px,0px 0px 0px 0px`,
      transition: "transform 0.7s",
      transform: "scale(1.1,1.1)",
      border:'3px solid white'
    }
  }
});

 
  const classes = useStyles();

  return (
    
    <Grid container>
 
      <Grid container  >
        <Grid
        id="judge"
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{wordWrap:"break-word", textAlign:'center'}}
        >
        <br/>
        <a rel="noopener noreferrer" 
              target="_blank" style={{textDecoration:'none', color:"white"}} 
              href = {props.link}>
            <img
              src={props.image}
              width="150px"
              height="150px"
              style={{ borderRadius:'100%' }}
            />
        </a>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <br/>
          <Typography variant="h5" style={{fontSize:"18px",fontFamily:'consolas', wordWrap:"break-word", textAlign:'center'}}>
            <b>{props.name}</b>
            </Typography>
          <Typography variant="p" style={{fontSize:"14px",fontFamily:'consolas', wordWrap:"break-word"}}>
            <b>
            {props.designation}</b>
          </Typography>
        </Grid>
        </Grid>
      </Grid>
   
    </Grid>
  );
};
export default Holder;
