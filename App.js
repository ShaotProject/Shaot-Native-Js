import React from "react";
import { Provider } from "react-redux";
import { store } from "./future/store/store";
import { Start } from "./screens/Start";

export default function App() {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
}
