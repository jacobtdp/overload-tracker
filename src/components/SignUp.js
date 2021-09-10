import React from "react";
import firebase from "firebase";

const SignUp = () => {
  const [userName, setValue] = React.useState("");
  const [password, setTarget] = React.useState("");
  const db = firebase.firestore();

  const getUserName = (event) => {
    setValue(event.target.value);
  };
  const getPassword = (event) => {
    setTarget(event.target.value);
  };

  
  const addValue = () => {
    db.collection("Users")
      .doc(userName)
      .set({
        UserName: userName,
        Password: password
      })
      .then(function () {
        console.log("Sign-Up successful!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  const valueStyle = {
    width: "full",
    textAlign: "center",
    fontSize: "16px",
  };

  return (
    <div style={valueStyle}>
      <input onBlur={getUserName} type='text' placeholder="User Name..." required />
      <input onBlur={getPassword} type='password' placeholder="Password..." required />
      <button type='button' onClick={addValue}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;