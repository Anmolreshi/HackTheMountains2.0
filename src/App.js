import React from "react";

import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import PreLoader from "./components/preLoader";
import Tracks from "./components/Tracks";
import "./styles.css";
import { Box } from "@material-ui/core";

export default function App() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Box>
        <Header />
        <Tracks />
      </Box>
    </>
  );
}
