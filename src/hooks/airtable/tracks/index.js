import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/${process.env.REACT_APP_TRACK_BASE}/Table%201?maxRecords=20&view=Grid%20view`;

const useTracks = () => {
  const [repos, setRepos] = useState([]);
  const token = process.env.REACT_APP_AIRTABLE_API_KEY;

  const getTracks = async () => {
    let res = await Axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: AIRTABLE_URI
    });

    let { data } = res;
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
