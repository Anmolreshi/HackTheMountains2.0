import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  rootElement
);
