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
    paddingTop: "80px",
    backgroundColor: '#202136',
    backgroundImage: 'radial-gradient(#676666 0.7px, transparent 0)',
    backgroundSize:`15px 15px`,
    color: "white",
    paddingBottom: "80px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  button: {
    color: "white",
    background: "black",
    border: "3px solid white",
    zIndex: 0,
    textDecoration: 'none',
    '&:hover' : {
      background: "#b8b8ba",
      color: "black",
      textDecoration: "none",
      underline: "none"
    },

  },
  cards: {
    padding:"10px",
    '&:hover':{
      transform: 'scale(1.04)',
      transitionDuration: '0.97s',
    },
  },
  innercard:{
    background: '#121229',
    '&:hover':{
       backgroundColor:'#060607',
    },
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
  console.log(prize_data);
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
                      <Grid className={classes.cards} spacing={2} item xs={12} sm={12} md={4} lg={4} style={{padding:'10px'}}>

                      <Card className={classes.innercard}  style={{marginBottom:'10px', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%',border:'3px solid white',}}>
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
                                                    <li style={{listStyleType:'disclosure-Closed'}}>{prize}</li>
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
                                        <span style={{color:'red'}}>Know More</span>
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

                  <Grid className={classes.cards} spacing={2} item xs={12} sm={12} md={8} lg={8} style={{padding:'20px'}}>
                  <Card className={classes.innercard}  style={{marginBottom:'10px', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%',border:'3px solid white'}}>
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
                                  <li style={{listStyleType:'disclosure-Closed'}}>{el}</li>
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

                      <Grid item xs={12} sm={12} md={4} lg={4} className={classes.cards}>

                      <Card className={classes.innercard} 
                       style={{marginBottom:'10px', padding:'20px', borderRadius:'10px',  lineHeight: '2', height:'100%',border:'3px solid white',}}>
                          <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={el.image}
                              title={el.sponsor_name}
                              // style={{height:"100px", position:"relative"}}
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
                                                    <li style={{listStyleType:'disclosure-Closed'}}>{prize}</li>
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

