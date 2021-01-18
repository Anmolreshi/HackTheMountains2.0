import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
const Holder = () => {
  return (
    <Box
      style={{
        minWidth: "170px",
        border: "2px solid black",
        padding: "5px",

        maxWidth: "262px",
        background: "orange"
      }}
    >
      <Grid container spacing={3} style={{ minHeight: "350px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ minHeight: "150px", background: "#F7DDBF" }}
        >
          <center>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGS86WfEbvPPw/profile-displayphoto-shrink_400_400/0/1602104885807?e=1616025600&v=beta&t=E5lZx7iv0H-S0GAcIfSFmpIAho3Vb5cLCH8hIVEHDmM"
              width="150px"
              style={{ borderRadius: "100%" }}
            />
          </center>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h5">Name</Typography>
          <Typography variant="p">Lorem Ipsum</Typography>
          <br />
        </Grid>
        <Grid item xs={4} sm={4} md={6} lg={4}>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              {" "}
              <FaLinkedinIn />
            </Grid>
            <Grid item xs={2}>
              {" "}
              <FaGithub />
            </Grid>
            <Grid item xs={2}>
              {" "}
              <FaExternalLinkAlt />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Holder;
