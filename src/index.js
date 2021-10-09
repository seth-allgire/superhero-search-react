import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HeroProvider } from "./shared/HeroContext";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#217fbe",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#f3ece8",
      // will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: "#f7db51",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#144e75",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    // contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HeroProvider>
      <App />
    </HeroProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
