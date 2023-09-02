import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./future/store/store";

export const index = ()=>(
    <Provider store={store}>
      <App />
    </Provider>
);
