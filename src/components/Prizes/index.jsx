import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// import { useHistory } from 'react-router-dom';



// import { useJudges } from "../../hooks/airtable/judges";
const useStyles = makeStyles({
  container: {
    backgroundImage: 'radial-gradient(#641BFF 1px, transparent 0)',
    backgroundSize: `15px 15px`,
    // backgroundImage:`url(${BG})`,
    paddingTop: '50px',
    paddingBottom: '50px',
    color: 'black',

  },
  highlighter: {
    // textShadow: `0 0 20px aqua, 
    // 0 0 30px aqua,
    // 0 0 40px aqua,
    // 0 0 50px aqua,
    // 0 0 60px aqua,
    // 0 0 70px aqua,
    // 0 0 80px aqua`
  }
});

const Judges = () => {
  // const history = useHistory();
  const classes = useStyles();
  // const judge_data = useJudges();
  return (
    <div id="prizes" className={classes.container}>
      <Grid container>

        <Container>
          <Typography style={{ textAlign: 'center' }}
            className={classes.highlighter}
            variant="h4" gutterBottom={true}>
           <br/> <b>Prizes</b></Typography>

          <Grid container spacing={4} >
            {/* {
             judge_data.map((judge)=>(<Grid item xs={12} sm={12} md={4} lg={4}>
              <Holder
               name={judge.name}
               designation={judge.designation}
               image={judge.image} 
               link={judge.externalLink}
              /> 
              </Grid>))
           }
           */}
            <Grid item xs={12} sm={12} md={12} lg={12}><br /><br /><br /><br /><br />
              <Typography style={{ textAlign: 'center' }} variant="h3" gutterBottom={true}><b>
                Coming Soon</b></Typography>
              <br /><br /><br /><br /><br />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>

  );
};
export default Judges;
