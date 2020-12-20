import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Segoe UI", "Raleway"].join(","),
    h1: {
      fontSize: "58px",
      fontFamily: "Segoe UI"
    },
    subtitle1: {
      fontSize: "22px",
      fontFamily: "Segoe UI",
      fontWeight: 4
    }
  }
});

export default theme;
