import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { FilterProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
