import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#60b051",
      main: "#000000",
    },
    secondary: {
      main: "#aadaa0",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

export default theme;
