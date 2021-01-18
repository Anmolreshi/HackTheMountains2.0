import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Holder from "./holder.jsx";
import { useTeams } from "../../../../hooks/api/team/getTeam";
import { useOpcodes } from "../../../../hooks/api/team/getOpcode";
const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "#202136"
  }
});
const Team = () => {
  const teamdata = useTeams();
  const opcodes = useOpcodes();
  const classes = useStyles();

  const getOpcode = (index) => {
    const config = {
      cColor: opcodes[index - 1].card_color,
      fColor: opcodes[index - 1].font_color
    };
    return config;
  };

  console.log(teamdata);
  console.log(getOpcode(1));
  return (
    <div className={classes.root}>
      <Container>
        <br />
        <br />
        <br />
        {/* {data.team_data.map((member) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Holder />
              </Grid>
            </Grid>
          );
        })} */}
        Hello Data
      </Container>
    </div>
  );
};
export default Team;
