import "./index.css";
import "typeface-roboto";
import * as serviceWorker from "./serviceWorker";
import { App } from "components/app";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept("components/app", () => {
    const NextApp = require("components/app").default; // eslint-disable-line global-require
    ReactDOM.render(<NextApp />, rootElement);
  });
}

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
