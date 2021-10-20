import { createTheme } from "@mui/material";
import { getCssVar } from "./getCssVar";

const theme = createTheme({
  palette: {
    common: {
      white: getCssVar("--yy-white-color"),
    },
    error: {
      main: getCssVar("--yy-error-color"),
    },
    background: {
      default: getCssVar("--yy-default-background"),
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: 40,
          marginLeft: 0,
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
