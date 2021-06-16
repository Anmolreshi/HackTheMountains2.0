import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Holder from "./holder.jsx";
import { useJudges } from "../../../hooks/api/judges";

const useStyles = makeStyles({
  root: {
    // height: "100vh",

   
  }
});
const Judge = () => {
  const judgedata = useJudges();
  const classes = useStyles();

  // const getOpcode = (index,opcodes) => {
  //   const config = {
  //     cColor: opcodes[index - 1].card_color,
  //     fColor: opcodes[index - 1].font_color
  //   };
  //   return config;
  // };

  return (
    <div className={classes.root}>

    <br/>
      <Container>
     
        <Grid container spacing={8}>
          {judgedata.map((member) => {
 
            return (

              <Grid item xs={12} sm md lg style={{marginBottom:'12px'}}>
                <Holder
                  name={member.name}
                  linkedin={member.linkedin}
                  image={member.image}
                  github = {member.github}
                  external = {member.external}
                  designation ={member.designation}
               
                />
              </Grid>




            );
          })}            
          </Grid></Container>


    </div>
  );
};
export default Judge;
