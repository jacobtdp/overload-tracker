import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBkceEOTgwjKPIAictqylExmd65r4Uzt5U",
  authDomain: "overload-app-sept21.firebaseapp.com",
  projectId: "overload-app-sept21",
  storageBucket: "overload-app-sept21.appspot.com",
  messagingSenderId: "1040923502729",
  appId: "1:1040923502729:web:3b5b73f686532bd274fe58",
  measurementId: "G-95056YF3C6"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
