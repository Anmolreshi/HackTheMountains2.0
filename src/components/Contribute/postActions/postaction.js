import Axios from 'axios'
const PostAction = async (role, data) => {
  try {
    let URI = ``;
    let id = ``;
    // volunteer role
    if (role === 1) {
      id = `${process.env.REACT_APP_VOLUNTEER_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/volunteers`;
      
      const post_data = {
        "records": [
          {
            "fields": {
              "name": data.name,
              "email": data.email,
              "linkedin": data.linkedin,
              "college":data.college,
              "Status": "Your volunteer application is in queue."
            }
          }
        ]
      };
      return sendData(URI, post_data);
    }
    // mentor role
    if (role === 2) {
      id = `${process.env.REACT_APP_MENTOR_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/mentors`;
      const post_data = {
       "records": [
          {
            "fields": {
              "name": data.name,
              "email": data.email,
              "linkedin": data.linkedin,
              "github": data.github,
              "resume_link": data.resume,
              "Status": "Your mentor application is in queue."
            }
          }
        ]
      };
     return sendData(URI, post_data);
    }
  // speaker role
    if (role === 3) {
      id = `${process.env.REACT_APP_SPEAKER_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/speakers`;
      const post_data = {
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              mobile: data.mobile,
              linkedin: data.linkedin,
              topic: data.topic,
              Status: "Your speaker application is in queue.",
            },
          },
        ],
      };
      return sendData(URI, post_data);
    }
  } catch (error) {
    return "There is an error"
  }
};

async function sendData(URI, post_data) {
  console.log(post_data)
  let res = await Axios({
    method: "POST",
    url: URI,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: post_data,

  });
  let {data} =res;
  if(data.records[0].id)
    return "success"
  else 
    return "failure"
}

export {PostAction};
