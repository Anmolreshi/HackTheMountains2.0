import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import FAQ from "./components/FAQ"
import PreLoader from "./components/preLoader";
import  Judges from './components/Judges'
import Tracks from "./components/Tracks";
import Team from "./components/Team";
import History from "./components/History";
import PreviousSponsors from "./components/Sponsors/PreviousSponsors";
import AboutUs from "./components/About"
// import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule"
import Registration from "./components/Registration"
import Workshops from "./components/Workshops/homepage";
import Contact from "./components/ContactUs"
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
              <AboutUs/>
              <Tracks />
              <History />
              <PreviousSponsors />
              <Judges/>
            
              {/* <Workshops /> */}
              <Team />
         
              <Contact/>
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
            <Navbar />
            <Box>
              <WorkshopRoute />
            </Box>
          </>
        }
      />
      <Route
        path="/schedule"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Schedule/>
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/register"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Registration/>
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/faq"
        exact={true}
        children={
          <>
            <Navbar />
            <Box>
              <FAQ/>
              <Footer />
            </Box>
          </>
        }
      />  
    </Switch>
  );
}
