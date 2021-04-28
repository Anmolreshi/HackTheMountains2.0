import React from "react";
import { Typography, Box, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Devfolio from "./assets/devfolio.png";
import Sawo from "./assets/sawolabs.png";
import Postman from "./assets/postman.png";
import MLH from "./assets/mlh.png";
import { usePrevSponsors } from "../../../hooks/airtable/sponsors/previoussponsors";
// import Slides from "./Carousel";
import { useMPs } from "../../../hooks/airtable/partners/Media";
import { useEPs } from "../../../hooks/airtable/partners/Event";
import { useCPs } from "../../../hooks/airtable/partners/Community";
import { useSPs } from "../../../hooks/airtable/partners/silver";
import { useEDPs } from "../../../hooks/airtable/partners/Educational";
import { usePartners } from "../../../hooks/airtable/partners/partner";
import { useDPs } from "../../../hooks/airtable/partners/Diamond";
const useStyles = makeStyles({
  root: {
    padding: "25px",
  },
  container: {
    padding: "20px",
    borderRadius: "5px",
  },
  newsponsor: {
    background: "white",
    color: "#3C3E66",
    padding: "25px",
    backgroundImage: "radial-gradient(grey 0.6px, transparent 0)",
    backgroundSize: `15px 15px`,
  },
  btn: {
    background: "black",
    color: "white",
    borderRadius: "2px",
    "&:hover": {
      background: "#202136",
      opacity: "0.7",
    },
  },
  // highlighter:{
  //   textShadow: `0 0 20px #fff,
  //   0 0 30px #CA484F,
  //   0 0 40px #CA484F,
  //   0 0 50px #CA484F,
  //   0 0 60px #CA484F,
  //   0 0 70px #CA484F,
  //   0 0 80px #CA484F`
  // }
});
const PreviousSponsors = (props) => {
  const data = usePrevSponsors();
  const mediaPartners = useMPs();
  const eventPartners = useEPs();
  const communityPartners = useCPs();
  const silverPartners = useSPs();
  const educationalPartners = useEDPs();
  const Partners = usePartners();
  const diamondPartners = useDPs();
  // const [visible, setVisible] = React.useState(false);
  const classes = useStyles();
  // const handleVisibility = (data) => {};

  return (
    <div id="sponsors">
      <div>
        {/* <Container className={classes.root}>
          <Typography gutterBottom={true} variant="h3">
            <center>
              <b>Previous Sponsors</b>
            </center>
            <br />
          </Typography>
          <Box>
            <Slides data={data} />
          </Box>
        </Container> */}
      </div>
      <div className={classes.newsponsor}>
        <Container>
          <Typography
            className={classes.highlighter}
            gutterBottom={true}
            variant="h4"
          >
            <center>
              <b>Our Sponsors</b>
            </center>
            <br />
          </Typography>

          <Box>
            {" "}
            <Typography gutterBottom={true} variant="h3">
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span style={{ color: "diamond" }}>League Partner</span>
                </b>

                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <center>
                  <a
                    href="https://mlh.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={MLH} width="300px" />
                  </a>
                </center>
              </Grid>
            </Grid>
            <br />
            <br />
            <Typography gutterBottom={true} variant="h3">
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span style={{ color: "diamond" }}>Diamond Partners</span>
                </b>
                <br/>
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
            {diamondPartners.map((partner) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="300px" />
                  </a>
                </Grid>
              ))}<br/><br/>
            </Grid>
            {/* 
            <br/><br/>
           <Typography gutterBottom={true} variant="h2">
              <center>
                <b><span style={{ color: 'gold' }}>Gold Partners</span></b><br />
              </center>
            </Typography>
            <Typography variant="h4"> <center>
              Coming Soon</center><br/><br/><br/>
            </Typography>
            
            */}
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Silver Partners</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {silverPartners.map((partner) => (
                <Grid id="partners" item xs={12} sm={12} md={4} lg={4}>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="50%" />
                  </a>
                </Grid>
              ))}
            </Grid>
            {/* <Typography gutterBottom={true} variant="h3"><br/>
              <center>
                <b><span style={{color:'silver'}}>Bronze Partners</span></b><br /><br/>
              </center>
            </Typography>
            <Grid style={{ textAlign: 'center' }} container spacing={2}>
              <Grid item xs={12} sm={12} md={4} lg={4} >
              </Grid>
            </Grid> */}
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Media Partner</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {mediaPartners.map((partner) => (
                <Grid id="partners" item xs sm md>
                  <a
                    className="partners"
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={partner.image}
                      width="300px"
                      style={{ borderRadius: "10px" }}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Event Partners</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {eventPartners.map((partner) => (
                <Grid id="partners" item xs={12} sm={12} md={4} lg={4}>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="50%" />
                  </a>
                </Grid>
              ))}
            </Grid>
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Partners</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {Partners.map((partner) => (
                <Grid id="partners" item xs={12} sm={12} md={4} lg={4}>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="50%" />
                  </a>
                </Grid>
              ))}
            </Grid>
            <Typography gutterBottom={true} variant="h3">
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span style={{ color: "diamond" }}>Auth Partner</span>
                </b>

                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              <Grid id="partners" item xs={12} sm={12} md={12} lg={12}>
                <center>
                  <a
                    href="https://sawolabs.com/?utm_source=hacakthon&utm_medium=HTM&utm_campaign=HackPartner"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={Sawo} width="300px" />
                  </a>
                </center>
              </Grid>
            </Grid>
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Community Partners</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {communityPartners.map((partner) => (
                <Grid id="partners" item xs={12} sm={3} md={3}>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="50%" />
                  </a>
                </Grid>
              ))}
            </Grid>
            <Typography gutterBottom={true} variant="h3">
              <br />
              <center>
                <hr
                  style={{
                    color: "#3C3E66",
                    backgroundColor: "#3C3E66",
                    height: 0.5,
                    opacity: 0.7,
                    width: "75%",
                  }}
                />
                <b>
                  <span>Educational Partners</span>
                </b>

                <br />
                <br />
              </center>
            </Typography>
            <Grid style={{ textAlign: "center" }} container spacing={2}>
              {educationalPartners.map((partner) => (
                <Grid id="partners" item xs sm md>
                  <a
                    href={partner.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={partner.image} width="300px" />
                  </a>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <br />
              <br />
              <Link to="/sponsors/register">
                <Button
                  fullWidth
                  variant="outlined"
                  style={{
                    color: "#3C3E66",
                    border: "1px solid #3C3E66",
                    textDecoration: "none",
                  }}
                >
                  Be A Sponsor
                </Button>
              </Link>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default PreviousSponsors;
