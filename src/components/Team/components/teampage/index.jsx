import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Holder from "./holder.jsx";
import { useTeams } from "../../../../hooks/api/team/getTeam";
import { useOpcodes } from "../../../../hooks/api/team/getOpcode";

const useStyles = makeStyles({
  root: {
    // height: "100vh",

   
  }
});
const Team = () => {
  const teamdata = useTeams();
  const opcodes = useOpcodes();
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
          {teamdata.map((member) => {
 
            return (




              <Grid item xs={12} sm md lg style={{marginBottom:'12px'}}>
                <Holder
                  name={member.name}
                  linkedin={member.linkedin}
                  image={member.image}
                  index={member.role_index}
                  github = {member.github}
                  external = {member.external}
                  designation ={member.designation}
               
                />
              </Grid>




            );
          })}            </Grid></Container>


    </div>
  );
};
export default Team;
