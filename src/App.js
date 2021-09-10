import React from "react";
import Add from "./components/Add";
import FireStoreData from "./components/FireStoreData";
import SignUp from './components/SignUp';

function App() {
  const appStyles = {
    maxWidth: "1000px",
    margin: "8rem auto 8rem auto",
    width: "full",
    textAlign: "center",
  };

  const titleStyles = {
    display: "block",
  };

  return (
    <div style={appStyles}>
      <div stlye={titleStyles}>
        <span>Basic FireStore App</span>
      </div>
      <Add />
      <FireStoreData />
      <SignUp />
    </div>
  );
}

export default App;
