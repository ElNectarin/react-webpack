import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Redux/Store/Store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Vizhener from "./Buttons/Vizhener/Vizhener";
import Buttons from "./Buttons/Buttons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Vizhener",
    element: <Vizhener />
  },
  {
    path: "/Buttons",
    element: <Buttons />
  }
]);


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
