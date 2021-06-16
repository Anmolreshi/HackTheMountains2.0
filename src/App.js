import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import FAQ from "./components/FAQ"
import PreLoader from "./components/preLoader";
import  Judges from './components/Judges'
import Tracks from "./components/Tracks";
import Team from "./components/Team";
import Prizes from "./components/Prizes"
import History from "./components/History/index";
import SponsorRequest from "./components/SponsorRequest"
import PreviousSponsors from "./components/Sponsors/PreviousSponsors";
import AboutUs from "./components/About"
import Status from "./components/Status"
import Ribbon from "./components/ribbon"
import Volunteer from "./components/Contribute/VolunteerRegistration"
import Mentor from "./components/Contribute/MentorRegistration";
import Speaker from "./components/Contribute/SpeakerRegistration"
// import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule"
import Registration from "./components/Registration"
// import Workshops from "./components/Workshops/homepage";
import Contact from "./components/ContactUs"
import WorkshopRoute from "./components/Workshops/page";
// import TeamRoute from "./components/Team/components/cards";
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
              {/* <Ribbon/> */}
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/season2"
        exact={true}
        children={
          <>
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
              {/* <Ribbon/> */}
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/season2/prizes"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Prizes/>
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/season2/workshops"
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
        path="/season2/schedule"
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
              {/* <Ribbon/> */}
              <Footer />
            </Box>
          </>
        }
      />  
      <Route
        path="/volunteer/register"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Volunteer/>
              <Footer />
            </Box>
          </>
        }
      />
        <Route
        path="/HackAmbassadors/register/:id"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Volunteer/>
              <Footer />
            </Box>
          </>
        }
      />
       <Route
        path="/mentors/register"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Mentor/>
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/speakers/register"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Speaker/>
              <Footer />
            </Box>
          </>
        }
      />
       <Route
        path="/sponsors/register"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <SponsorRequest/>
              <Footer />
            </Box>
          </>
        }
      />
      <Route
        path="/status"
        exact={true}
        children={
          <>
           
            <Navbar />
            <Box>
              <Status/>
              <Footer />
            </Box>
          </>
        }
      />
    </Switch>
  );
}
