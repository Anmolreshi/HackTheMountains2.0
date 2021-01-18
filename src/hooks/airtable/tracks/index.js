import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/apptxgvw2RUCfDwxx/Table%201?maxRecords=10&view=Grid%20view`;

const useTracks = () => {
  const [repos, setRepos] = useState([]);
  const token = "keyULJyQPltPgbpaW";

  const getTracks = async () => {
    let res = await Axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: AIRTABLE_URI
    });

    let { data } = res;
    console.log(typeof data);

    let P = Promise.all(
      data.records.map(async (el) => {
        let d = {
          name: el.fields.Track,
          description: el.fields.Description
        };

        return d;
      })
    );

    let temp_repo = await P;

    setRepos(temp_repo);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return repos;
};

export { useTracks };
