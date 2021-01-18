import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import PreLoader from "./components/preLoader";
import Tracks from "./components/Tracks";
import Team from "./components/Team";
import History from "./components/History";
import PreviousSponsors from "./components/Sponsors/PreviousSponsors";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer";
import Workshops from "./components/Workshops/homepage";
import WorkshopRoute from "./components/Workshops/page";
import TeamRoute from "./components/Team/components/teampage";
import "./styles.css";
import { Box } from "@material-ui/core";

export default function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        children={
          <>
            <PreLoader />
            <Navbar />
            <Box>
              <Header />
              <Tracks />
              <History />
              <Sponsors />
              <PreviousSponsors />
              {/* <Workshops /> */}
              <Team />
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/workshops"
        exact={true}
        children={
          <>
            <PreLoader />
            <Navbar />
            <Box>
              <WorkshopRoute />
            </Box>
          </>
        }
      />
      <Route
        path="/team"
        exact={true}
        children={
          <>
            <PreLoader />
            <Navbar />
            <Box>
              <TeamRoute />
            </Box>
          </>
        }
      />
    </Switch>
  );
}
