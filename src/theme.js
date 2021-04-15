import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Segoe UI", "Raleway", "Montserrat"].join(","),
    h1: {
      fontSize: "58px",
      fontFamily: "Montserrat"
    },
    h3: {
      fontFamily: "Montserrat"
    },
    h4: {
      fontFamily: "Montserrat"
    },
    h6: {
      fontFamily: "Montserrat"
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 500
    },
    subtitle1: {
      fontSize: "22px",
      fontFamily: "Montserrat",
      fontWeight: 4
    },
    subtitle2: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      fontWeight: 4
    }
  }
});

export default theme;
