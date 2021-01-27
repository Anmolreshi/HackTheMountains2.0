import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import variants from "./../../../variants";
// import data from "./../../../Header/data";
import BG from "./../../../Header/assets/bg.svg"
import { useFAQs } from "../../../../hooks/api/getFAQ";
// import MLH from "../Sponsors/assets/mlh.svg";

const useStyles = makeStyles({
    container: {
        background: "#202136",
       
    },
    mobilecontainer: {
        background: "#202136",
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "-120px 70px",
        color: "white",
        paddingBottom: "30%",
        paddingTop: "30px",
        height: "100%"
    },
    desc: {
        lineHeight: "32px",
        paddingBottom: "22px"
    },
    left: {
        textAlign: "center"
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
    logo: {
        marginTop: "10px"
    },
    heading: {
        marginTop: "70px",
        // textShadow: '0 0 20px #fff, 0 0 30px #CA484F, 0 0 40px #CA484F, 0 0 50px #CA484F, 0 0 60px #CA484F, 0 0 70px #CA484F, 0 0 80px #CA484F' 
    },
    highlight: {
        textShadow: `0 0 20px #fff, 
             0 0 30px #CA484F,
             0 0 40px #CA484F,
             0 0 50px #CA484F,
             0 0 60px #CA484F,
             0 0 70px #CA484F,
             0 0 80px #CA484F`
    }
});

const Header = () => {
    // const history = useHistory();
    const classes = useStyles();
    const faq_data= useFAQs();
    return (
        <motion.div
            animate="visible"
            variants={variants}
            transition={{ duration: 4 }}
        >
      
                <Grid container className={classes.container}>
                    <Container>
                        <Grid container spacing={5} style={{ borderRadius:"2px"}}>                        
                            {faq_data.map((faq)=>{
                                return(
                                    <Grid                                   
                                      container item xs={12} sm={12} lg={6} md={6}>
                                            <Grid  item xs={12} sm={12} lg={12} md={12}>
                                               <Typography  style={{borderBottom:'1px solid white'}} variant="h5"> <b>{faq.question.toUpperCase()}</b></Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={12} md={12}>
                                                {faq.answer}
                                            </Grid>
                                    </Grid>
                                )
                            })}



                        </Grid>
                    </Container>
                </Grid>
     

        </motion.div>
    );
};
export default Header;
