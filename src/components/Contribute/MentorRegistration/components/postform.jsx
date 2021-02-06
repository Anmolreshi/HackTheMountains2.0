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
    const [github, setGitHub] = useState("");
    const [resume,setResume] = useState("")
    const [linkedin, setLinkedIn] = useState("");
    const [ticket,setTicket] =useState("")
    const [namecolor, setnameColor] = useState("");
  const [emailcolor, setemailColor] = useState("");
  const [githubcolor, setgithubColor] = useState("");
  const [linkedincolor, setlinkedinColor] = useState("");
  const [resumecolor, setresumeColor] = useState("");

    const data = {
        name: name, 
        linkedin: linkedin,
        email: email,
        github:github,
        resume:resume,
    }
    const sendResponse = async (data) => {
        setLoading(true);

        const ticketGenerated = await GenerateTicket(2, data)
        if (ticketGenerated) {
            setTicket(ticketGenerated)
            setLoading(false)
            setSuccess(true);
            setMessage("We got your mentor application. You can check your status, using this mentor ticket id: ")
        }
        if (ticketGenerated === "failure") {
            setLoading(false)
            setSuccess(true);
            setMessage("Something went wrong, Contact Hack The Mountains Team.")
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
                        id="outlined-basic"
                        label="Name"
                        autoComplete={false}
                        variant="outlined"
                        required
                        style={{backgroundColor:`${namecolor}`}}
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
                        required
                        style={{backgroundColor:`${emailcolor}`}}
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
                        value={github}
                        name="github"
                        id="outlined-basic"
                        label="GitHub Profile Link"
                        variant="outlined"
                        required
                        style={{backgroundColor:`${githubcolor}`}}
                        onChange={(e) => {
                        setGitHub(e.target.value);
                        if(ValidationService(4,e.target.value)){
                            setgithubColor('#C4E4B1');
                        }
                        else
                        setgithubColor('#E4B1B1');
                        }}
                        
                    />
                    <br />
                    <br />{" "}

                    <TextField
                        fullWidth
                        value={linkedin}
                        name="linkedin"
                        id="outlined-basic"
                        label="Linkedin Profile Link"
                        variant="outlined"
                        required
                        style={{backgroundColor:`${linkedincolor}`}}
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

                    <TextField
                        fullWidth
                        value={resume}
                        name="linkedin"
                        id="outlined-basic"
                        label="Resume Link"
                        variant="outlined"
                        required
                        style={{backgroundColor:`${resumecolor}`}}
                        onChange={(e) => {
                        setResume(e.target.value);
                        if(ValidationService(3,e.target.value)){
                            setresumeColor('#C4E4B1');
                        }
                        else
                        setresumeColor('#E4B1B1');
                        }}
                         />
                    <br />
                    <br />{" "}



                    <Button
                        disableElevation
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                            if(ValidationService(1,name)&&ValidationService(0,email)&&resume&&github&&linkedin){
                                sendResponse(data)
                            }
                          }}
                        
                    >
                        Be A Mentor
      </Button>
                </form>


            )}
        </>)

}
export default Form;