import React from "react";
import { Grid, Typography, Container, Button, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Holder from "./components/holder"
import { useJudges } from "../../hooks/airtable/judges";
const useStyles = makeStyles({
  container: {
    background: 'white',
    paddingTop: '50px',
    paddingBottom: '50px',
    border:'5px solid white',
    color:'#202136'
  },

 

});

const Judges = () => {
  const history = useHistory();
  const classes = useStyles();
  const judge_data=useJudges();
  return (
    <div id="judges" className={classes.container}>
      <Grid container>

        <Container>
        <Typography variant="h4" gutterBottom={true}><b>Our Judges</b></Typography>
                
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
             <Typography variant="h4" gutterBottom={true}><b>
               Coming Soon</b></Typography>
       
</Grid>
   
        </Container>
      </Grid>
    </div>

  );
};
export default Judges;
