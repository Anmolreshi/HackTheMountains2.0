import { useState, useEffect } from "react";
import Axios from "axios";

const useFAQs = () => {
  const [repos, setRepos] = useState([]);
  const FAQ = `https://sudan-s-tech.github.io/HTM_Team_Data/faqs/cleandata.json`;

  const getFAQs = async () => {
    let res = await Axios({
      method: "get",
      url: FAQ
    });

    let { data } = res;
    

    setRepos(data.FAQ);
  };
  useEffect(() => {
    getFAQs();
  }, []);
  return repos;
};
export { useFAQs };
