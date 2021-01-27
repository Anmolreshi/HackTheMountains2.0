import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,

    Typography,

    CircularProgress,
    TextareaAutosize,
    FormControl,

    FormHelperText,
} from "@material-ui/core";
import { Link } from "react-router-dom"
import Axios from "axios";

const Form = () => {
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const [Dticket, setDisplayTicket] = useState("");


    
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
                                Status: "In Queue",
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

    
    return (

        <>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={12} md={12} lg={12}>
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
                                    Make sure you copy this ticket id before checking status.

                                    <br />
                                    You can check its status{" "}
                                <Link to="/status">
                                    here
                                    </Link>
                                <br />
                            </b>
                        </Typography>

                    </>
                )}
            </Grid>
            <Grid style={{ textAlign: 'center' }}
                container
                item xs={12} sm={12} md={12} lg={12}
            >
                {!loading && !success && (
                    <>


                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormControl>
                                <TextField
                                    fullWidth
                                    style={{ background: 'white', '&:hover': { transform: 'scaleX(1.4)' } }}
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
                                    aria-describedby="my-helper-text1"
                                />
                                <FormHelperText id="my-helper-text1">
                                    Enter a valid name
                                </FormHelperText></FormControl>
                        </Grid>
                        <br />
                        <br />
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormControl style={{ marginBottom: '5px' }}>
                                <TextField
                                    fullWidth
                                    style={{ background: 'white' }}
                                    value={email}
                                    name="email"
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    aria-describedby="my-helper-text2" />
                                <FormHelperText id="my-helper-text2">
                                    We'll never share your email.
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <br /><br />
                        <br />
                        <br />{" "}
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormControl style={{ marginBottom: '5px' }}>


                                <FormHelperText id="my-helper-text3">
                                    Ask your question
                                </FormHelperText>
                                <TextareaAutosize
                                    rowsMax={5}
                                    value={query}
                                    name="query"
                                    id="outlined-basic"
                                    label="Query"
                                    variant="outlined"
                                    required
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                    }}
                                    aria-describedby="my-helper-text3"
                                    style={{ padding: '5px', height: "200px", width: '100%' }}
                                />


                            </FormControl>
                        </Grid>
                        <br />
                        <br />{" "}
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Button
                                disableElevation
                                variant="contained"
                                color="primary"
                                onClick={(e) => {
                                    PostAction(name, email, query);
                                }}
                            >
                                Ask your Query
                            </Button></Grid><br /><br />
                    </>
                )}
            </Grid>
            <br />
            <br />
        </>




    );
};
export default Form;
