import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress
} from "@material-ui/core";
import Axios from "axios";
import ValidationService from '../../../services/validationService';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [namecolor, setnameColor] = useState("");
  const [emailcolor, setemailColor] = useState("");
  const [contactcolor, setcontactColor] = useState("");


  const airtable_api = `${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  const id = `${process.env.REACT_APP_PRE_REGISTER_KEY}`;
  const formURI = `https://api.airtable.com/v0/${id}/pre`;



  const PostAction = async (email, name,contact,college,branch) => {
    try {
      setLoading(true);
      let res = await Axios({
        method: "POST",
        url: formURI,
        data: {
          "records": [
            {
              "fields": {
                "name": name,
                "updates": "Yes",
                "email": email,
                "phone": contact,
                "college": college,
                "branch": branch
              }
            }
          ]
        },
        headers:{
                 "Authorization": `Bearer ${airtable_api}`,
                 "Content-Type": "application/json"
                }
      });
      let { data } = res;
      if (data.records[0].id) {
        setMessage("");
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setMessage(error);
      setLoading(false);
      setSuccess(false);
    }
  };

  const FriendSubscription = () => {
    setMessage("");
    setSuccess(false);
    setName("");
    setEmail("");
    setContact("")
    setCollege("")
    setBranch("")
  };

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
      {success && (
        <>
          <Typography variant="h5" gutterBottom={true}>
           
              Thank you! <br />
           
          </Typography>
          <Typography variant="h6" gutterBottom={true}>
            <b>
              We will soon reach out to your inbox, with more information.
              <br />
          
            </b>
        <br/>
            <b>Want your best friend to be part of this Hackathon?</b>
            <br />
          </Typography>
          <Button
            onClick={() => {
              FriendSubscription();
            }}
            variant="contained"
            color="secondary"
          >
            Yes
          </Button>
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
            value={contact}
            name="contact"
            id="outlined-basic"
            label="Contact"
            style={{backgroundColor:`${contactcolor}`}}
            variant="outlined"
            required
            onChange={(e) => {
              setContact(e.target.value);
              if(ValidationService(2,e.target.value)){
                setcontactColor('#C4E4B1');
              }
              else
              setcontactColor('#E4B1B1');
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
            value={branch}
            name="branch"
            id="outlined-basic"
            label="Branch"
            variant="outlined"
            required
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          />
          <br />
          <br />{" "}

      



          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={(e) => {
              if(ValidationService(1,name)&&ValidationService(0,email)&&college&&contact&&college&&branch){
                PostAction(email, name, contact, college, branch);
              }
            }}
          >
           Pre- Register
          </Button>
        </form>
      )}

      <br />
      <br />
    </>
  );
};
export default Form;