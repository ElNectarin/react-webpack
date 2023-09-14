import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Redux/Store/Store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
