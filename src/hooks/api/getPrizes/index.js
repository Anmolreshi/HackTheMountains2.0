import { useState, useEffect } from "react";
import Axios from "axios";

const usePrize = () => {
  const [repos, setRepos] = useState([]);
  const Prizes = `https://sudan-s-tech.github.io/Prizes/htm2prizes.json`;

  const getPrizes = async () => {
    let res = await Axios({
      method: "get",
      url: Prizes
    });

    let { data } = res;


    setRepos(data);
  };
  useEffect(() => {
    getPrizes();
  }, []);
  return repos;
};

export { usePrize };

