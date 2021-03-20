import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    CircularProgress
} from "@material-ui/core";
import {GenerateTicket} from "../../../../services/ticketGenerate.service"
import ValidationService from '../../../../services/validationService';




const Form = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [ticket,setTicket] =useState("")
    const [namecolor, setnameColor] = useState("");
  const [emailcolor, setemailColor] = useState("");
  const [linkedincolor, setlinkedinColor] = useState("");

    const data = {
        name: name, 
        linkedin: linkedin,
        email: email,
        college: college
    }
    const sendResponse = async (data) => {
     console.log(data);
        setLoading(true);

        const ticketGenerated = await GenerateTicket(1, data)
        if (ticketGenerated) {
            setTicket(ticketGenerated)
            setLoading(false)
            setSuccess(true);
            setMessage("We got your ambassador application. You can check your status, using this hack ambassador ticket id:")
        }
        if (ticketGenerated === "failure") {
            setLoading(false)
            setSuccess(true);
            setMessage("Something went wrong we are fixing it.")
        }
    }
    return (

        <>
            <Typography variant="h5" gutterBottom={true}>
                {message}
            </Typography>
            <Typography color="secondary" variant="h5" gutterBottom={true}>
                {ticket}
               
            </Typography>
            <Typography  variant="h5" gutterBottom={true}>
            {ticket && (<>Make Sure you copy it and keep it safe.</>)}
               
            </Typography>
            <br />
            {loading && (
                <>
                    <CircularProgress color="secondary" />
                    <br />
                </>
            )}
            {!loading && !success && (
                <form noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        autoFocus={true}
                        value={name}
                        name="name"
                        style={{backgroundColor:`${namecolor}`}}
                        id="outlined-basic"
                        label="Name"
                        autoComplete={false}
                        variant="outlined"
                        required
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
                    <TextField
                        fullWidth
                        value={email}
                        name="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        style={{backgroundColor:`${emailcolor}`}}
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



                    <TextField
                        fullWidth
                        value={college}
                        name="email"
                        id="outlined-basic"
                        label="College/University"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setCollege(e.target.value);
                        }}
                    />
                    <br />
                    <br />{" "}

                    <TextField
                        fullWidth
                        value={linkedin}
                        name="branch"
                        id="outlined-basic"
                        label="Linkedin Profile Link"
                        style={{backgroundColor:`${linkedincolor}`}}
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setLinkedIn(e.target.value);
                            if(ValidationService(5,e.target.value)){
                                setlinkedinColor('#C4E4B1');
                              }
                              else
                              setlinkedinColor('#E4B1B1');
                        }}
                    />
                    <br />
                    <br />{" "}





                    <Button
                        disableElevation
                        variant="contained"
                        color="primary"
                        
                        onClick={(e) => {
                            if(ValidationService(1,name)&&ValidationService(0,email)&&college&&linkedin){
                                sendResponse(data)
                            }}}
                    >
                        Be A Hack Ambassador
      </Button>
                </form>


            )}
        </>)

}
export default Form;
