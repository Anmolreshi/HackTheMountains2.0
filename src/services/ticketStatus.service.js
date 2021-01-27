import Axios from "axios";
const GetTicketStatus = async (role, ticket) => {
  let URI = ``;
  let id = ``;
  // query status
  if (role === 1) {
    id = `${process.env.REACT_APP_CONTACTUS_KEY}`;
    URI = `https://api.airtable.com/v0/${id}/query`;
    return await sendData(URI, ticket);
  }
  // volunteer status
  if (role === 2) {
    id = `${process.env.REACT_APP_VOLUNTEER_KEY}`;
    URI = `https://api.airtable.com/v0/${id}/volunteers`;
    return await sendData(URI, ticket);
  }
  // mentor status
  if (role === 3) {
    id = `${process.env.REACT_APP_MENTOR_KEY}`;
    URI = `https://api.airtable.com/v0/${id}/mentors`;
    return await sendData(URI, ticket);
  }
  // speaker status
  if (role === 4) {
    id = `${process.env.REACT_APP_SPEAKER_KEY}`;
    URI = `https://api.airtable.com/v0/${id}/speakers`;
    return await sendData(URI, ticket);
  }
  // sponsor status
  if (role === 5) {
    id = `${process.env.REACT_APP_SPONSOR_SUBMISSION_KEY}`;
    URI = `https://api.airtable.com/v0/${id}/requests`;
    return await sendData(URI, ticket);
  }
};

async function sendData(URI, ticketID) {
  try {
    let res = await Axios({
      method: "GET",
      url: `${URI}/${ticketID}`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    let { data } = res;
    if (data.fields.Status) {
      return data.fields.Status;
    }
  } catch (error) {
   
    if (error.response.data["error"] === "NOT_FOUND") return "Invalid Ticket";
    else if (error.response.data["error"].type === "MODEL_ID_NOT_FOUND")
      return "TicketID and Ticket Type doesn't match";
    else return "Something went really wrong. Contact Web Engineering Team";
  }
}

export { GetTicketStatus };
