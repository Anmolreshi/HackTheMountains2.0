import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Box,
    Typography,
    Container,
    CircularProgress,
    TextareaAutosize,
    Paper
} from "@material-ui/core";
import Axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
const useStyles=makeStyles(({
    whiteBG:{
        background:'white'
    }
}))
const TicketStatus = () => {
    const classes = useStyles();
    const [Tloading, setTLoading] = useState(false);
    const [Tsuccess, setTSuccess] = useState(false);
    const [Tmessage, setTMessage] = useState("");
    const [Tstatus, setTStatus] = useState("");
    const [ticket, setTicket] = useState("");
    const airtable_api = `${process.env.REACT_APP_AIRTABLE_API_KEY}`;
    const id = `${process.env.REACT_APP_CONTACTUS_KEY}`;
    const ticketURI = `https://api.airtable.com/v0/${id}/query/${ticket}`;
    const GetAction = async (ticket) => {
        try {
            setTLoading(true);
            setTStatus("");
            setTSuccess(false);
            setTMessage("");
            let res = await Axios({
                method: "GET",
                url: ticketURI,
                headers: {
                    Authorization: `Bearer ${airtable_api}`,
                    "Content-Type": "application/json"
                }
            });
            let { data } = res;
            console.log(res)
            console.log(data)
            if (data.fields.status) {
                setTStatus(data.fields.status);
                setTLoading(false);
                setTSuccess(true);
            }

        } catch (error) {
            console.log("Ticket Invalid");
            error.response.data["error"] == "NOT_FOUND" ? setTMessage("Ticket Invalid") : setTMessage("Internal Server Error");
            setTLoading(false);
            setTSuccess(false);
        }
    };
    return (
    
        <Grid container spacing={0}>
            <Grid  item xs={12} md={12} lg={12} sm={12}>
            
                <TextField
                className={classes.whiteBG}
                id="textfield2"
                    required={true}
                    value={ticket}
                    name="ticket"
                    id="outlined-basic"
                    label="Ticket ID"
                    autoComplete={false}
                    variant="outlined"
                    onChange={(e) => {
                        setTicket(e.target.value);
                    }}
                /><br/><br/>
                </Grid>
                 <Grid  item xs={12} md={12} lg={12} sm={12}>
                <Button
                    
                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        if (ticket)
                            GetAction(ticket);
                        else {
                            setTMessage("Enter your ticket ID")
                        }
                    }}
                >
                    Check Status
                </Button></Grid>
            <Grid item xs={12} md={12} lg={12} sm={12}>
            <br/><br/>                {
             !ticket && !Tmessage && !Tstatus && !Tloading && (<Typography variant="h6">
                    <b>Here's the Chronology!</b><br />
                    {"->"} Ask your query,<br />
                    {"->"} Save your Ticket ID!<br />
                    {"->"} Check the status.<br />

                </Typography>)
            }
            {
                Tloading && (
                    <>
                        <CircularProgress color="secondary" />
                        <br />
                    </>
                )
            }
            {Tsuccess && (
                <>

                    {Tstatus && !Tloading && (
                        <motion.div>
                            <Typography variant="h6" color="secondary" gutterBottom={true}>
                                {Tstatus}
                            </Typography></motion.div>
                    )}



                </>
            )}   {Tmessage && (
                <Typography variant="h6" color="secondary" gutterBottom={true}>
                    {Tmessage}
                </Typography>
            )}
            </Grid>          
        </Grid>
    )
}

export default TicketStatus