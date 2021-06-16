import { useState, useEffect } from "react";
import Axios from "axios";

const useJudges = () => {
  const [repos, setRepos] = useState([]);
  const Team_GitHub = `https://sudan-s-tech.github.io/HTM_Team_Data/judges/cleandata.json`;

  const getJudge = async () => {
    let res = await Axios({
      method: "get",
      url: Team_GitHub
    });

    let { data } = res;


    setRepos(data.team_data);
  };
  useEffect(() => {
    getJudge();
  }, []);
  return repos;
};
export { useJudges };
