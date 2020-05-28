import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "typeface-montserrat";
import "typeface-inter";

const lightTheme = createMuiTheme({
  typography: {
    fontFamily: '"Inter", "Montserrat", sans-serif',
    fontSize: 12,

    h1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 40,
    },
    h2: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 30,
    },
    h3: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 18,
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 14,
    },
  },

  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#727171",
    },
    accent: {
      main: "#80d6d1",
    },
    background: {
      main: "#f8f3f0",
      default: "#f8f3f0",
    },
    w: {
      main: "#ff5656",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
