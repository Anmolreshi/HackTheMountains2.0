import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import theme from "./theme";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <ScrollToTop />
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  rootElement
);
