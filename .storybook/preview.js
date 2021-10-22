import { addDecorator } from "@storybook/react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "../src/view/UI/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "#eee",
      },
      {
        name: "white",
        value: "#fff",
      },
      {
        name: "black",
        value: "#000",
      },
    ],
  },
};

addDecorator((story) => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </StyledEngineProvider>
));
