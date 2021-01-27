import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    CircularProgress
} from "@material-ui/core";
import {GenerateTicket} from "../../../../services/ticketGenerate.service"




const Form = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [ticket,setTicket] =useState("")
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
            setMessage("We got your volunteer application. You can check your status, using this volunteer ticket id:")
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
                        id="outlined-basic"
                        label="Name"
                        autoComplete={false}
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setName(e.target.value);
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
                        onChange={(e) => {
                            setEmail(e.target.value);

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
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setLinkedIn(e.target.value);
                        }}
                    />
                    <br />
                    <br />{" "}





                    <Button
                        disableElevation
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                            sendResponse(data)
                        }}
                    >
                        Be A Volunteer
      </Button>
                </form>


            )}
        </>)

}
export default Form;