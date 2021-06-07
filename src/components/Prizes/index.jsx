import React from "react";
import { Grid, Typography, Container, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";



import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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

            variant="h2"
            gutterBottom={true}
          >
           <b>Prizes</b>
        </Typography>


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
                      <Grid spacing={2} item xs={12} sm={12} md={4} lg={4} style={{padding:'10px'}}>

                      <Card className={classes.root}  style={{marginBottom:'10px',background: '#121229', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%'}}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image="NULL"
                              title={el.pos}
                            />
                            <CardContent>
                              <Typography style={{ textAlign: "center", color:'white' }}
                            variant="h4"
                            gutterBottom={true}>
                                {el.pos}
                              </Typography>
                              <Typography variant="body"     style={{ textAlign: "left", color:'white' }}
                            gutterBottom={true}>
                                {el.description.map((prize) => (
                                                  <>
                                                    <li>{prize}</li>
                                                  </>))}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions style={{justifyContent: 'center'}}>
                            <Typography
                            variant="body"      style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.notion_link && (
                              <>                              
                                  <a href={el.notion_link}>
                                  <Button variant="outlined" className={classes.button} >
                                        Know More
                                  </Button>
                                  </a>
                               
                                <br />
                              </>
                            )}
                          </Typography>
                          </CardActions>
                        </Card> 
                      </Grid>
                    </>
                  ))}

                  <Grid spacing={2} item xs={12} sm={12} md={8} lg={8} style={{padding:'20px'}}>
                  <Card className={classes.root}  style={{marginBottom:'10px',background: '#121229', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%'}}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image="NULL"
                              title="Every Participant"
                            />
                            <CardContent>
                              <Typography style={{ textAlign: "center", color:'white' }}
                            variant="h4"
                            gutterBottom={true}>
                                Every Participant
                              </Typography>
                              <Typography variant="body"     style={{ textAlign: "left", color:'white' }}
                            gutterBottom={true}>
                                {prize_data.every_participant &&
                              prize_data.every_participant.map((el) => (
                                <>
                                  <li>{el}</li>
                                </>
                              ))}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card> 
                          </Grid> 
              </Grid>
              <br />


          

 <Grid container spacing={4}>
             <Grid item xs={12} sm={12} md={12} lg={12} >
              <br />
              <br />
              <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                gutterBottom={true}
              >

                <b>Special Prizes</b><br/>

              </Typography>
              <Grid container>
              
                {prize_data.sponsor_prize &&
                  prize_data.sponsor_prize.map((el) => (
                    <>

                      <Grid item xs={12} sm={12} md={4} lg={4} style={{padding:'10px'}}>

                      <Card className={classes.root}  style={{marginBottom:'10px',background: '#121229', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%'}}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={el.image}
                              title={el.sponsor_name}
                            />
                            <CardContent>
                              <Typography style={{ textAlign: "center", color:'white' }}
                            variant="h4"
                            gutterBottom={true}>
                                {el.sponsor_name}
                              </Typography>
                              <Typography variant="body"     style={{ textAlign: "left", color:'white' }}
                            gutterBottom={true}>
                                {el.description.map((prize) => (
                                                  <>
                                                    <li>{prize}</li>
                                                  </>))}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions style={{justifyContent: 'center'}}>
                            <Typography
                            variant="body"      style={{ textAlign: "center" }}
                            gutterBottom={true}
                          >
                            {el.notion_link && (
                              <>                              
                                  <a href={el.notion_link}>
                                  <Button variant="outlined" className={classes.button} >
                                        Know More
                                  </Button>
                                  </a>
                               
                                <br />
                              </>
                            )}
                          </Typography>
                          </CardActions>
                        </Card> 

                      </Grid> 
                    </>
                  ))}
              </Grid>
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

