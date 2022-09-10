import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0db2b2",
      light: "#8ad6d6",
    },
    secondary: {
      main: "#9c81e8",
    },
    background: {
      default: "#f2f6f6",
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
          marginTop: 0,
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
