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
      main: "#217fbe",
      contrastText: "#f3ece8",
    },
    secondary: {
      main: "#f7db51",
      contrastText: "#144e75",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {},
    },
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
