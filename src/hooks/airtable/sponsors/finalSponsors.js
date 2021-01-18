import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/appTpeQ5wAiKaISuG/Table%201?maxRecords=300&view=Grid%20view`;

const useTeams = () => {
  const [repos, setRepos] = useState([]);
  const token = "keyULJyQPltPgbpaW";

  const getTeam = async () => {
    let res = await Axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: AIRTABLE_URI
    });

    let { data } = res;
    console.log(data);

    let P = Promise.all(
      data.records.map(async (el) => {
        let d = {
          name: el.fields.Name,
          designation: el.fields.Status,
          image: el.fields.Attachments[0].url,
          email: el.fields.Email,
          description: el.fields.Description
        };

        return d;
      })
    );

    let temp_repo = await P;
    console.log(temp_repo);
    setRepos(temp_repo);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return repos;
};

export { useTeams };
