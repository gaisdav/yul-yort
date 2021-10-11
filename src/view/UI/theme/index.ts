import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#e0e0e0",
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
