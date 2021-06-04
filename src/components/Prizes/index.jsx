import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { usePrize } from "../../hooks/api/getPrizes";
const useStyles = makeStyles({
  container: {
    backgroundImage: "radial-gradient(#641BFF 1px, transparent 0)",
    backgroundSize: `15px 15px`,
    paddingTop: "50px",
    paddingBottom: "50px",
    color: "black",
  },
  highlighter: {
    // textShadow: `0 0 20px aqua,
    // 0 0 30px aqua,
    // 0 0 40px aqua,
    // 0 0 50px aqua,
    // 0 0 60px aqua,
    // 0 0 70px aqua,
    // 0 0 80px aqua`
  },
});

const Prizes = () => {
  const classes = useStyles();
  const prize_data = usePrize();
  return (
    <div id="prizes" className={classes.container}>
      <Grid container>
        <Container>
          <Typography
            style={{ textAlign: "center" }}
            className={classes.highlighter}
            variant="h4"
            gutterBottom={true}
          >
            <br /> <b>Prizes</b>
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <br />
              <br />
              <br />
              <br />
              <br />
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
                      <br />
                    </>
                  ))}
              </Typography>
              <br />
              <br />
              <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                gutterBottom={true}
              >
                <b>Sponsor Prizes</b><br/>
              </Typography>
              <Grid container>
                {prize_data.sponsor_prize &&
                  prize_data.sponsor_prize.map((el) => (
                    <>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                                 style={{ textAlign: "center" }}
                            variant="h4"
                            gutterBottom={true}
                          >
                            <b>{el.sponsor_name}</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            variant="body"     style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.description.map((prize) => (
                              <>
                                <li>{prize}</li>
                                <br />
                              </>
                            ))}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            variant="body"      style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.notion_link && (
                              <>
                                <li>
                                  <a href={el.notion_link}>View More on Notion</a>
                                </li>
                                <br />
                              </>
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  ))}
              </Grid>
              <br />
              <br />
              <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                gutterBottom={true}
              >
                <b>HTM Prizes</b><br/>
              </Typography>
              <Grid container>
                {prize_data.htm_prize &&
                  prize_data.htm_prize.map((el) => (
                    <>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography      style={{ textAlign: "center" }}
                            variant="h4"
                            gutterBottom={true}
                          >
                            <b>{el.pos}</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography      style={{ textAlign: "center" }}
                            variant="body"
                            gutterBottom={true}
                          >
                            <b>
                              {el.description.map((prize) => (
                                <>
                                  <li>{prize}</li>
                                  <br />
                                </>
                              ))}
                            </b>
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  ))}
              </Grid>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};
export default Prizes;
