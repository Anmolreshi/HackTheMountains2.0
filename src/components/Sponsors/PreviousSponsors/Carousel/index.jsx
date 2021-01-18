import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@material-ui/core";

function Slides(props) {
  var items = props.data;
  const config = {
    interval: 800,
    animation: "slide",
    indicators: false
  };
  return (
    <Carousel {...config}>
      {items.map((item, i) => (
        <Holder key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Holder(props) {
  const sponsor = props.item;
  return (
    <Paper elevation={0} style={{ height: "100px", textAlign: "center" }}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <img src={sponsor.image} alt={sponsor.name} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Slides;
