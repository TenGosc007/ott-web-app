import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import store from "state/store";
import App from "./App";
import "styles/themes/theme.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDXMkQk-WtHG7zGwp6E47YGBcEZ8OH7hbY",
  authDomain: "ott-player-a0350.firebaseapp.com",
  projectId: "ott-player-a0350",
  storageBucket: "ott-player-a0350.appspot.com",
  messagingSenderId: "335218900895",
  appId: "1:335218900895:web:017738a8b1541460d387aa",
  measurementId: "G-HE9K1HT63C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

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
