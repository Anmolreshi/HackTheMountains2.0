import React from "react";
import { Typography, Grid, Container, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        paddingTop: "88px",
        background: '#202136',
        backgroundImage: 'radial-gradient(white 0.6px, transparent 0)',
        backgroundSize: `15px 15px`,
        color: "white",
        paddingBottom: "88px",


    },
    statusBox: {
        height: "100%",
        border: '5px solid #202136',
        background: '#CA484F'
    },
    container: {
        paddingTop: "22px",
        paddingBottom: "22px",
        paddingLeft: "12px",
        borderRadius: "5px",
        margin: "5px",
        textAlign: "center",
        background: "rgba(0,0,0,0.6)"
    }
});
const Tracks = () => {
    const classes = useStyles();
    return (

        <Grid container className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} spacing={3}>
                        <Typography variant="h4" style={{ textAlign: 'center' }}>
                            Contribute!<br /><br />
                        </Typography>
                    </Grid>
                    <Hidden smDown>
                        <Grid container style={{ textAlign: "center" }} item xs={12} sm={12} md={12} lg={12} spacing={4}>

                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Item name="Volunteer" link="/volunteer/register" />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Item name="Mentor" link="/mentors/register" />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Item name="Speaker" link="/speakers/register" />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid style={{marginBottom:"20px"}} item xs={12} sm={12} md={4} lg={4}>
                            <Item name="Volunteer" link="/volunteer/register" />
                        </Grid>
                        <Grid style={{marginBottom:"20px"}} item xs={12} sm={12} md={4} lg={4}>
                            <Item name="Mentor" link="/mentors/register" />
                        </Grid>
                 

                        <Grid style={{marginBottom:"20px"}} item xs={12} sm={12} md={4} lg={4}>
                            <Item name="Speaker" link="/speakers/register" />
                        </Grid>
                        
                    </Hidden>

                </Grid>
            </Container>
        </Grid>

    );
};
export default Tracks;

// Mastur
const Item = (props) => {

    const link = props.link;
    const name = props.name;

    return (<Link to={link}>
        <Grid item xs sm md lg id="ribbon-items" style={{ textDecoration: 'none', color: 'black', background: "#E9AE91", padding: "15px", textAlign: 'center' }}>

            <Typography variant="h6" style={{ textDecoration: 'none', color: 'black' }}>
                <b>{name}</b>
            </Typography>

        </Grid></Link>
    )
}