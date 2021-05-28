import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/${process.env.REACT_APP_PARTNERS_KEY}/bronze?maxRecords=300&view=Grid%20view`;

const useBPs = () => {
  const [repos, setRepos] = useState([]);
  const token = process.env.REACT_APP_AIRTABLE_API_KEY;

  const getBPs = async () => {
    let res = await Axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: AIRTABLE_URI
    });

    let { data } = res;
    

    let P = Promise.all(
      data.records.map(async (el) => {
        let d = {
          name: el.fields.Name,
          link: el.fields.link,
          image: el.fields.logo[0].url
        };

        return d;
      })
    );
    let temp_repo = await P;
    setRepos(temp_repo);
  };

  useEffect(() => {
    getBPs();
  }, []);

  return repos;
};

export { useBPs };
