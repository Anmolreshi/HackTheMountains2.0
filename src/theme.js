import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Segoe UI", "Raleway", "Montserrat"].join(","),
    h1: {
      fontSize: "58px",
      fontFamily: "Raleway"
    },
    h3: {
      fontFamily: "Raleway"
    },
    h4: {
      fontFamily: "Raleway"
    },
    h6: {
      fontFamily: "Raleway"
    },
    h5: {
      fontFamily: "Raleway",
      fontWeight: 500
    },
    subtitle1: {
      fontSize: "22px",
      fontFamily: "Raleway",
      fontWeight: 4
    },
    subtitle2: {
      fontSize: "16px",
      fontFamily: "Raleway",
      fontWeight: 4
    }
  }
});

export default theme;
