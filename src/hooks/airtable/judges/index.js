import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/${process.env.REACT_APP_JUDGES_KEY}/Table%201?maxRecords=100&view=Grid%20view`;

const useJudges = () => {
  const [repos, setRepos] = useState([]);
  const token = process.env.REACT_APP_AIRTABLE_API_KEY;

  const getJudges = async () => {
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
          name: el.fields.name,
          designation: el.fields.designation,
          image:el.fields.image[0].url,
          externalLink:el.fields.link
        };

        return d;
      })
    );

    let temp_repo = await P;

    setRepos(temp_repo);
  };

  useEffect(() => {
    getJudges();
  }, []);

  return repos;
};

export { useJudges };
