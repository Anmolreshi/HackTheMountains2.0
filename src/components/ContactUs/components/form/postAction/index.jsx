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

const Form = () => {
    const [loading, setLoading] = useState(false);
    
    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const [Dticket, setDisplayTicket] = useState("");
    
    
    const useStyles = makeStyles({
        root: {
            padding: "25px"
        },
        left: {
            
        
           padding:'5px',
            

        }
    })
    const airtable_api = `${process.env.REACT_APP_AIRTABLE_API_KEY}`;
    const id = `${process.env.REACT_APP_CONTACTUS_KEY}`;
    const formURI = `https://api.airtable.com/v0/${id}/query`;
    const PostAction = async (name, email, query) => {
        try {
            setLoading(true);
            let res = await Axios({
                method: "POST",
                url: formURI,
                data: {
                    records: [
                        {
                            fields: {
                                name: name,
                                status: "In Queue",
                                email: email,
                                message: query
                            }
                        }
                    ]
                },
                headers: {
                    Authorization: `Bearer ${airtable_api}`,
                    "Content-Type": "application/json"
                }
            });
            let { data } = res;
            if (data.records[0].id) {
                
                setDisplayTicket(data.records[0].id);
                setLoading(false);
                setSuccess(true);
            }
        } catch (error) {
            console.log(error);
            setMessage("Internal Server Error");
            setLoading(false);
            setSuccess(false);
        }
    };
   
    const classes = useStyles();
    return (
       
            <Grid container>

                <Grid container item xs={12} sm={12} md={6} lg={6}>
                    {message && (
                        <Typography variant="h6" color="secondary" gutterBottom={true}>
                            {message}
                        </Typography>
                    )}

                    <br />
                    {loading && (
                        <>
                            <CircularProgress color="secondary" />
                            <br />
                        </>
                    )}
                    {success && (
                        <>

                            <Typography variant="h5">
                                We are glad you asked your query!
                                <br />
                                Here is your ticket id:
                                <br />
                                <span style={{ color: "red" }}>{Dticket}</span>
                                <br />         <b>
                                    {" "}
                                    <br />
                                    Make sure you copy this ticket id.
                                    <br />
                                    <br />
                                </b>
                            </Typography>
                       
                        </>
                    )}

                    {!loading && !success && (
                        <form noValidate autoComplete="off"
                        style={{'&:hover':{ transform: 'scaleX(1.4)'}}}>
                            <TextField
                            fullWidth
                            style={{background:'white','&:hover':{ transform: 'scaleX(1.4)'}}}
                                autoFocus={false}
                                value={name}
                                name="name"
                                id="outlined-basic"
                                label="Name"
                                autoComplete={false}
                                variant="outlined"
                                required={true}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <TextField
                            fullWidth
                            style={{background:'white'}}
                                value={email}
                                name="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <br />
                            <br />{" "}
                            <Box style={{ height: "200px", width: "260px" }}>
                                <TextareaAutosize
                                    rowsMax={5}
                                    value={query}
                                    name="query"
                                    placeholder="Write us"
                                    id="outlined-basic"
                                    label="Query"
                                    variant="outlined"
                                    required
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                    }}
                                    style={{padding: '5px', height: "200px", width: "100%" }}
                                />
                            </Box>
                            <br />
                            <br />{" "}
                            <Button
                                disableElevation
                                variant="contained"
                                color="primary"
                                onClick={(e) => {
                                    PostAction(name, email, query);
                                }}
                            >
                                Ask your Query
                            </Button><br/><br/>
                        </form>
                    )}

                    <br />
                    <br />
                </Grid>


            </Grid>
  
    );
};
export default Form;
