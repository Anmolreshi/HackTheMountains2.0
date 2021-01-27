import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import FAQs from "./components/faqs"
import variants from "../variants";
// import data from "./../Header/data";
// import BG from "./../Header/assets/bg.svg"
// import MLH from "../Sponsors/assets/mlh.svg";

const useStyles = makeStyles({
    container: {
        background: "#202136",
        // backgroundImage: `url(${BG})`,
   
        color: "white",

        paddingTop: "30px",
     
    },
    faqcontainer: {
        background: "#202136",
        color:'white'
    },
    desc: {
        lineHeight: "32px",
        paddingBottom: "22px"
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
    return (
        <motion.div
            animate="visible"
            variants={variants}
            transition={{ duration: 4 }}
        >

            <Grid className={classes.container} container>
                <Container>
                    <Grid container>

                        <br /><br />
        

                        <Grid containeritem xs={12} sm={12} md={7} lg={7}>
                            {/* Title */}

                            {/* FAQ Heading */}
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography gutterBottom={true} variant="h3">
                                    <br /><b>Frequently Asked Questions from Hackers.</b>
                                </Typography>
                            </Grid>
                            {/* Description */}
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography className={classes.desc} variant="h6">
                                    <b>Here are the answers to many of the common questions that hackers ask us about the hackathon.</b><br />
                                <br/><br/></Typography>
                            </Grid>
                            

                        </Grid>



                    </Grid>
                </Container>
            </Grid>
            {/* FAQs */}
            <Grid  className={classes.faqcontainer}>
                <Container>
                    <Grid container item xs={12} sm={12} md={12} lg={12}>
                        <FAQs /><br/>
                    </Grid>
                </Container>
            </Grid>

        </motion.div>
    );
};
export default Header;
