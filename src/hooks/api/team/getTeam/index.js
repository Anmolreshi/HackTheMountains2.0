import { useState, useEffect } from "react";
import Axios from "axios";

const useTeams = () => {
  const [repos, setRepos] = useState([]);
  const Team_GitHub = `https://sudan-s-tech.github.io/HTM_Team_Data/team/cleandata.json`;

  const getTeam = async () => {
    let res = await Axios({
      method: "get",
      url: Team_GitHub
    });

    let { data } = res;


    setRepos(data.team_data);
  };
  useEffect(() => {
    getTeam();
  }, []);
  return repos;
};
export { useTeams };
