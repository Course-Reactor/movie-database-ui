import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

const queryCache = new QueryCache();

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <App />
      </Router>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
