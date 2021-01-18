import React from "react";
import { Typography, Grid, Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTeams } from "../../../../hooks/airtable/teams";
import colorService from "./color.service";
// const useStyles = makeStyles({
//   root: {
//     padding: "25px",
//     paddingBottom: "88px"
//   },
//   container: {
//     padding: "30px",
//     border: "1px solid white",
//     borderRadius: "5px",
//     margin: "42px"
//   }
// });
const Team = () => {
  const data = useTeams();

  return (
    <>
      <Grid container spacing={5}>
        {data.map((item, index) => {
          return (
            <Grid item lg={1} md={2} sm={2} xs={6}>
              <img
                style={{ border: colorService(item.designation) }}
                alt={item.designation}
                src={item.image}
                height="80px"
                width="80px"
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Team;
