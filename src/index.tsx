import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { initializeApp } from "firebase/app";

import store from "state/store";
import App from "./App";
import "styles/themes/theme.scss";
import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
