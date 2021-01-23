import { useState, useEffect } from "react";
import Axios from "axios";

const useOpcodes = () => {
  const [repos, setRepos] = useState([]);
  const Opcodes = `https://sudan-s-tech.github.io/HTM_Team_Data/opcodes/opcode.json`;

  const getOpcode = async () => {
    let res = await Axios({
      method: "get",
      url: Opcodes
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
