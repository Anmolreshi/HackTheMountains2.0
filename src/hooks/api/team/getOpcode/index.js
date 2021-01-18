import { useState, useEffect } from "react";
import Axios from "axios";

const useOpcodes = () => {
  const [repos, setRepos] = useState([]);
  const GitHub = `https://sudan-s-tech.github.io/HTM_Team_Data/team/cleandata.json`;

  const getOpcode = async () => {
    let res = await Axios({
      method: "get",
      url: GitHub
    });

    let { data } = res;
    console.log(data);

    setRepos(data.op_code);
  };
  useEffect(() => {
    getOpcode();
  }, []);
  return repos;
};
export { useOpcodes };
