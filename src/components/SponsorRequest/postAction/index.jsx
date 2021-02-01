import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Box,
    Typography,
    CircularProgress,
    TextareaAutosize,
} from "@material-ui/core";
import Axios from "axios";
import ValidationService from '../../../services/validationService';

const Form = () => {
    const [loading, setLoading] = useState(false);
    
    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [org, setOrg] = useState("");
    const [mobile, setMobile] = useState("");
    const [help, setHelp] = useState("");
    const [Dticket, setDisplayTicket] = useState("");
    const [namecolor, setnameColor] = useState("");
  const [emailcolor, setemailColor] = useState("");
  const [contactcolor, setcontactColor] = useState("");
    
  
    const airtable_api = `${process.env.REACT_APP_AIRTABLE_API_KEY}`;
    const id = `${process.env.REACT_APP_SPONSOR_SUBMISSION_KEY}`;
    const formURI = `https://api.airtable.com/v0/${id}/requests`;
    const PostAction = async (name, email, org, mobile, help ) => {
        try {
            setLoading(true);
            let res = await Axios({
                method: "POST",
                url: formURI,
                data: {
                    records: [
                        {
                            fields: {
                                "name": name,
                                "email": email,
                                "organization": org,
                                "contact": mobile,
                                "HelpProvided": help
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
       
            <Grid container>

                <Grid container item xs={12} sm={12} md={12} lg={12}>
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
                                We are happy that you want to be a part of this impactful hacakthon.
                                <br/>After a brief review, we will be reaching out to you soon, at your mailbox.
                                <br />
                                Here is your Sponsor id:
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
{/* POINT OF CONTACT*/}
                            <TextField
                            fullWidth
                            style={{background:'white','&:hover':{ transform: 'scaleX(1.4)'}}}
                                autoFocus={false}
                                value={name}
                                name="name"
                                style={{backgroundColor:`${namecolor}`}}
                                id="outlined-basic"
                                label="Your Name"
                                autoComplete={false}
                                variant="outlined"
                                required={true}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if(ValidationService(1,e.target.value)){
                                        setnameColor('#C4E4B1');
                                      }
                                      else
                                      setnameColor('#E4B1B1');
                                }}
                            />
                            <br />
                            <br />
{/* EMAIL */}
                            <TextField
                            fullWidth
                            style={{backgroundColor:`${emailcolor}`}}
                                value={email}
                                name="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if(ValidationService(0,e.target.value)){
                                        setemailColor('#C4E4B1');
                                      }
                                      else
                                      setemailColor('#E4B1B1');
                                }}
                            />
                            <br />
                            <br />{" "}
{/* COMPANY */}
                            <TextField
                            fullWidth
                            style={{background:'white'}}
                                value={org}
                                name="email"
                                id="outlined-basic"
                                label="Organization/ Company"
                                variant="outlined"
                                required
                                onChange={(e) => {
                                    setOrg(e.target.value);
                                }}
                            />
                            <br />
                            <br />{" "}
{/* CONTACT NUMBER */}
                            <TextField
                            fullWidth
                            style={{backgroundColor:`${contactcolor}`}}
                                value={mobile}
                                name="Contact No."
                                id="outlined-basic"
                                label="Contact No."
                                variant="outlined"
                                required
                                onChange={(e) => {
                                    setMobile(e.target.value);
                                    if(ValidationService(2,e.target.value)){
                                        setcontactColor('#C4E4B1');
                                      }
                                      else
                                      setcontactColor('#E4B1B1');
                                }}
                            />
                            <br />
                            <br />{" "}        
{/* Help Provided */}
                            <Box style={{ height: "200px", width: "260px" }}>
                                <TextareaAutosize
                                    rowsMax={5}
                                    value={help}
                                    name="query"
                                    placeholder="We will be helping Hack The Mountains by..."
                                    id="outlined-basic"
                                    label="How you are helping us?"
                                    variant="outlined"
                                    required
                                    onChange={(e) => {
                                        setHelp(e.target.value);
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
                                    PostAction(name, email, org, mobile, help);
                                }}
                                onClick={(e) => {
                                    if(ValidationService(1,name)&&ValidationService(0,email)&&org&&mobile&&help){
                                        PostAction(name, email, org, mobile, help);
                                    }}}
                            >
                               Be A Sponsor
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
