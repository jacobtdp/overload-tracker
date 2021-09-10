import React from "react";
import firebase from "firebase";

const Add = () => {
  const [name, setValue] = React.useState("");
  const [target, setTarget] = React.useState("");
  const [type, setType] = React.useState("");
  const [sets, setSets] = React.useState("");
  const [reps, setReps] = React.useState("");
  const db = firebase.firestore();

  const getValue = (event) => {
    setValue(event.target.value);
  };
  const getTarget = (event) => {
    setTarget(event.target.value);
  };
  const getType = (event) => {
    setType(event.target.value);
  };
  const getSets = (event) => {
    setSets(event.target.value);
  };
  const getReps = (event) => {
    setReps(event.target.value);
  };
  
  const addValue = () => {
    if(type == 'Traditional'){
      console.log('traditional detected!');
    }

    db.collection("values")
      .doc(name)
      .set({
        Exercise: name,
        Target: target,
        Type: type,
        Sets: sets,
        Reps: reps
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  function renderSetsReps(){
    if(type == 'Traditional'){
      return <div>
          <input onBlur={getSets} type='number' placeholder="# Sets" />
          <input onBlur={getReps} type='number' placeholder="# Reps" />
        </div>
    }
  }

  const valueStyle = {
    width: "full",
    textAlign: "center",
    fontSize: "16px",
  };

  return (
    <div style={valueStyle}>
      <input onBlur={getValue} type='text' placeholder="Exercise..." required />

      <select onBlur={getTarget}>
        <option value="">Select Target Muscle</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Core">Core</option>
        <option value="Legs">Legs</option>
        <option value="Functional">Functional</option>
      </select>

      <select onInput={getType}>
        <option value="Select Set Type">Select Set Type</option>
        <option value="Traditional">Traditional</option>
        <option value="3/7">3/7</option>
        <option value="Rest/Pause">Rest Pause</option>
        <option value="Drop">Drop Set</option>
      </select>

      {renderSetsReps()}

      <button type='button' onClick={addValue}>
        Add
      </button>
    </div>
  );
};

export default Add;