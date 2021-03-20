import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    CircularProgress,
    Select,
    MenuItem, 
    FormControl
} from "@material-ui/core";
import {GetTicketStatus} from './../../../services/ticketStatus.service'
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
const useStyles = makeStyles(({
    whiteBG: {
        background: 'white'
    }
}))
const TicketStatus = () => {
    const classes = useStyles();
    const [Tloading, setTLoading] = useState(false);
    const [Tsuccess, setTSuccess] = useState(false);
    const [Tmessage, setTMessage] = useState("");
    const [Tstatus, setTStatus] = useState("");

    const [ticket, setTicket] = useState("");
    const [type,setType]=useState(1)
    
   
   const GetAction = async (ticketType,ticket) => {
        setTLoading(true);  
        try{
        const response = await GetTicketStatus(ticketType, ticket)
        if (response) {
            console.log()
            setTLoading(false)
            setTSuccess(true);
            setTStatus(response)
        }}catch(error){
                setTLoading(false)
                setTSuccess(true);
                setTMessage(error.response)
        }
    }
    return (

        <Grid container spacing={0}>
            <Grid item xs={12} md={12} lg={12} sm={12}>
            <FormControl>
                <Select
                    id="ticketType"
                    value={type}
                    onChange={(e)=>{
                        if(e.target.value)
                        setType(e.target.value)}}
                    label="Ticket Type"
                    autoWidth
                >
                    
                    <MenuItem value={1}>Query</MenuItem>
                    <MenuItem value={2}>Hack Ambassador</MenuItem>
                    <MenuItem value={3}>Mentor</MenuItem>
                    <MenuItem value={4}>Speaker</MenuItem>
                    <MenuItem value={5}>Sponsor</MenuItem>
                </Select></FormControl><br /><br />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sm={12}>

                <TextField
                    className={classes.whiteBG}
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
                /><br /><br />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <Button

                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        if (ticket)
                            GetAction(type,ticket);
                        else {
                            setTMessage("Enter your ticket ID")
                        }
                    }}
                >
                    Check Status
                </Button></Grid>
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <br /><br />                {
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
