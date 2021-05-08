import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./components/App";

import { Colors } from "./styles/colors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "sans-serif";
    margin: 0
  };
  a {
    color: ${Colors.purple};
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
