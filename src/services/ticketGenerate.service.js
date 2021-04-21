import Axios from "axios";
const GenerateTicket = async (ticketType, data) => {
  try {
    let URI = ``;
    let id = ``;
    //query ticket
    if (ticketType === 0) {
      id = `${process.env.REACT_APP_CONTACTUS_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/query`;

      const post_data = {
        records: [
          {
            fields: {
              name: data.name,
              Status: "In Queue",
              email: data.email,
              message: data.query,
            },
          },
        ],
      };
      return sendData(URI, post_data);
    }

    // volunteer ticket
    if (ticketType === 1) {
      id = `${process.env.REACT_APP_VOLUNTEER_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/volunteers`;

      const post_data = {
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              linkedin: data.linkedin,
              college: data.college,
              Status: "Your volunteer application is in queue.",
              referral: data.referral,
            },
          },
        ],
      };

      const response = sendData(URI, post_data);
      
      if (response !== "failure" && data.referral.toUpperCase().includes("HTMHA")) {
        var Ddata = JSON.stringify({
          username: "abirHub",
          avatar_url: "https://avatars.githubusercontent.com/u/53480076?v=4",
          content: "Hack Ambassador Registered",
          embeds: [
            {
              title:  `${post_data.records[0].fields.name} registered using this referral`,
              type: "rich",
              description: `Referral Used: ${post_data.records[0].fields.referral}`,
            }
          ]
        });

        var Dconfig = {
          method: "post",
          url:`${process.env.REACT_APP_WEBHOOK_BOT}`,            
          headers: {
            "Content-Type": "application/json",
          },
          data: Ddata,
        };

        Axios(Dconfig)
          .then(function () {
            console.log("Hack Ambassador Registered");
          })
          .catch(function () {
            console.log("Internal Server Error");
          });

        return response;
      } else {
        return response;
      }
    }
    // mentor ticket
    if (ticketType === 2) {
      id = `${process.env.REACT_APP_MENTOR_KEY}`;
      URI = `https://api.airtable.com/v0/${id}/mentors`;
      const post_data = {
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              linkedin: data.linkedin,
              github: data.github,
              resume_link: data.resume,
              Status: "Your mentor application is in queue.",
            },
          },
        ],
      };
      return sendData(URI, post_data);
    }
    // speaker ticket
    if (ticketType === 3) {
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
    return "There is an error";
  }
};

async function sendData(URI, post_data) {
  let res = await Axios({
    method: "POST",
    url: URI,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: post_data,
  });
  let { data } = res;
  if (data.records[0].id) return data.records[0].id;
  else return "failure";
}

export { GenerateTicket };
