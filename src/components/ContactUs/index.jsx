import React, { useState } from "react";
import {

  Grid,
  Typography,
  Container,
  FormControl, TextField, FormHelperText, TextareaAutosize, CircularProgress, Button
} from "@material-ui/core";
import { GenerateTicket } from "./../../services/ticketGenerate.service"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {


  },
  bgComp: {
    backgroundImage: 'radial-gradient(#202136 0.6px, transparent 0)',
    backgroundSize: `15px 15px`,
    paddingTop: "45px",
    paddingBottom: "45px"
  }
})
const ContactUs = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("")
  const [ticket, setTicket] = useState("")
  const data = {
    name: name,
    email: email,
    query: query
  }
  const sendResponse = async (data) => {
    setLoading(true);

    const ticketGenerated = await GenerateTicket(0, data)
    if (ticketGenerated) {
      setTicket(ticketGenerated)
      setLoading(false)
      setSuccess(true);
      setMessage("We got your query. You can check the query status, using this query ticket id: ")
    }
    if (ticketGenerated === "failure") {
      setLoading(false)
      setSuccess(true);
      setMessage("Something went wrong, Contact Hack The Mountains Team.")
    }
  }


  return (

    <div id="contactus" className={classes.bgComp}>
      <Container className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography style={{ textAlign: "center" }} variant="h3" gutterBottom={true}>
              <b>Contact Us</b>
              <Typography style={{ textAlign: "center" }} gutterBottom={true} variant="h5" >
                <b>Raise a Query</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h5" gutterBottom={true}>
              {message}
            </Typography>
            <Typography color="secondary" variant="h5" gutterBottom={true}>
              {ticket}

            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              {ticket && (<>Make Sure you copy it and keep it safe.</>)}
              <br />
              {ticket && (<><Link to="/status">Click here to check status</Link></>)}
            </Typography>


            {loading && (
              <>
                <CircularProgress color="secondary" />

              </>
            )}
          </Grid>
          {!loading && !success && (
            <>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl style={{ marginBottom: '5px', width: '100%' }}>
                  <TextField
                    fullWidth={true}
                    style={{ background: 'white', }}
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

                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl style={{ marginBottom: '5px', width: '100%' }}>
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
                  />

                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl style={{ marginBottom: '5px', width: '100%' }}>


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
                    style={{ padding: '5px', height: "200px", width: 'inherit' }}
                  />


                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl style={{ marginBottom: '5px', width: '100%' }}>
                  <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      sendResponse(data);
                    }}
                  >
                    Ask your Query
                            </Button></FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl style={{ marginBottom: '5px', width: '100%' }}>
                   <Button
                    component={Link}
                    to="/status"
                    disableElevation
                    variant="contained"
                  >
                    CHECK TICKET STATUS
                            </Button>
                  </FormControl>
              </Grid>
            </>)}

        </Grid>
      </Container></div>
  );
};
export default ContactUs;
