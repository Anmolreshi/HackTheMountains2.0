import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/appKuw9dstOl3ZOvr/table1?maxRecords=300&view=Grid%20view`;

const usePrevSponsors = () => {
  const [repos, setRepos] = useState([]);
  const token = "keyULJyQPltPgbpaW";

  const getSponsors = async () => {
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
          name: el.fields.Sponsor,
          link: el.fields.link,
          image: el.fields.logo[0].url
        };

        return d;
      })
    );

    let temp_repo = await P;
    console.log(temp_repo);
    setRepos(temp_repo);
  };

  useEffect(() => {
    getSponsors();
  }, []);

  return repos;
};

export { usePrevSponsors };
