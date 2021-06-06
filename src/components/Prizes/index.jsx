import React from "react";
import { Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { usePrize } from "../../hooks/api/getPrizes";
const useStyles = makeStyles({
  container: {
    paddingTop: "88px",
    backgroundColor: '#202136',
    backgroundImage: 'radial-gradient(#676666 0.7px, transparent 0)',
    backgroundSize:`15px 15px`,
    color: "white",
    paddingBottom: "88px",
    paddingLeft: "14px",
    paddingRight: "14px"
  },
  button: {
    color: "white",
    background: "black",
    border: "1px solid white",
    zIndex: 0,
    textDecoration: 'none',
    "&hover": {
      background: "white",
      color: "white",
      textDecoration: 'none',
    }

  },
  margins:{
    marginLeft:'15px',
    marginRight:'15px'
  }
});

const Prizes = () => {
  const classes = useStyles();
  const prize_data = usePrize();
  return (
    <div id="prizes" className={classes.container}>
      <div id="margins" className={classes.margins}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              style={{ textAlign: "center" }}
              className={classes.highlighter}
              variant="h2"
              gutterBottom={true}
            >
              <b>Prizes</b>
              <br />
              <br />
            </Typography>
          </Grid>
          <Grid container>
            {/* Every Participant Left Side */}
            <Grid container spacing={2} item xs={12} sm={12} md={4} lg={4}>
              <div
                style={{
                  marginBottom: "10px",
                  background: "#121229",
                  padding: "20px",
                  borderRadius: "10px",
                  lineHeight: "2",
                }}
              >
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h3"
                  gutterBottom={true}
                >
                  <b>Every Participant</b>
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="body"
                  gutterBottom={true}
                >
                  {prize_data.every_participant &&
                    prize_data.every_participant.map((el) => (
                      <>
                        <li>{el}</li>
                      </>
                    ))}
                </Typography>
              </div>
            </Grid>
            {/* Right Panel */}
            <Grid container item xs={12} sm={12} md={8} lg={8}>
              <Grid container  spacing={2}>
              {prize_data.htm_prize &&
                  prize_data.htm_prize.map((el) => (
                    <>
                      <Grid
                      
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        style={{
                          marginBottom: "10px",
                      
                          background: "#121229",
                          padding: "20px",
                          borderRadius: "10px",
                          lineHeight: "3",
                        }}
                      >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            style={{ textAlign: "center" }}
                            variant="h4"
                            gutterBottom={true}
                          >
                            <b>{el.pos}</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            style={{ textAlign: "center" }}
                            variant="body"
                            gutterBottom={true}
                          >
                            <b>
                              {el.description.map((prize) => (
                                <>
                                  <li>{prize}</li>
                                </>
                              ))}
                            </b>
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  ))}
                {prize_data.sponsor_prize &&
                  prize_data.sponsor_prize.map((el) => (
                    <>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        style={{
                          marginBottom: "10px",
                          background: "#121229",
                          padding: "20px",
                          borderRadius: "10px",
                          lineHeight: "2",
                        }}
                      >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            style={{ textAlign: "center" }}
                            variant="h4"
                            gutterBottom={true}
                          >
                            <b>{el.sponsor_name}</b>
                          </Typography>

                          <br />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            variant="body"
                            style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.description.map((prize) => (
                              <>
                                <li>{prize}</li>

                                {/* <br /> */}
                              </>
                            ))}
                          </Typography>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          style={{ textAlign: "center" }}
                        >
                          <Typography
                            variant="body"
                            style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.notion_link && (
                              <>
                                <br />

                                <a href={el.notion_link}>
                                  <Button
                                    variant="outlined"
                                    className={classes.button}
                                  >
                                    Know More
                                  </Button>
                                </a>

                                <br />
                              </>
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  ))}
                 
              </Grid>
            </Grid>

           
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Prizes;
