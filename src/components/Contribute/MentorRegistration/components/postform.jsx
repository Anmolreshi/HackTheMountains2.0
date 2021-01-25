import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    CircularProgress,
    Checkbox
} from "@material-ui/core";
import {PostAction} from "../../postActions/postaction"



const Form = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGitHub] = useState("");
    const [resume,setResume] = useState("")
    const [linkedin, setLinkedIn] = useState("");
    const data = {
        name: name, 
        linkedin: linkedin,
        email: email,
        github:github,
        resume:resume,
    }
    const sendResponse = async (data) => {
     console.log(data);
        setLoading(true);

        const response = await PostAction(2, data)
        if (response === "success") {
            setLoading(false)
            setSuccess(true);
            setMessage("We got your mentor application. Hold down, we will reach out to your inbox soon.")
        }
        if (response === "failure") {
            setLoading(false)
            setSuccess(true);
            setMessage("Something went wrong we are fixing it.")
        }
    }
    return (

        <>
            <Typography color="secondary" gutterBottom={true}>
                {message}
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
                        value={github}
                        name="github"
                        id="outlined-basic"
                        label="GitHub Profile Link"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setGitHub(e.target.value);
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
                        onChange={(e) => {
                            setLinkedIn(e.target.value);
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
                        onChange={(e) => {
                            setResume(e.target.value);
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
                        Be A Mentor
      </Button>
                </form>


            )}
        </>)

}
export default Form;