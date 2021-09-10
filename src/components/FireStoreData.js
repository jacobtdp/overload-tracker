import React from "react";
import { useGetData } from "../hooks/useGetData";
import Update from "./Update";
import Delete from "./Delete";

const FireStoreData = () => {
  const [documents] = useGetData();

  let chest      = [];
  let back       = [];
  let shoulders  = [];
  let core       = [];
  let legs       = [];
  let functional = [];
  let targets = [chest, back, shoulders, core, legs, functional];
  for(let i = 0; i < documents.length; i++){
    if(documents[i].value.Target == 'Chest'){ chest.push(documents[i]); }
    if(documents[i].value.Target == 'Back'){ back.push(documents[i]); }
    if(documents[i].value.Target == 'Shoulders'){ shoulders.push(documents[i]); }
    if(documents[i].value.Target == 'Core'){ core.push(documents[i]); }
    if(documents[i].value.Target == 'Legs'){ legs.push(documents[i]); }
    if(documents[i].value.Target == 'Functional'){ functional.push(documents[i]); }
  }
  console.log(targets);


  function displayExercise(documents){
    return  <div key={documents.id}>
              <div>
                {console.log(documents.value.Type)}
                {documents.value.Type} {documents.id}: {documents.value.Sets} x {documents.value.Reps} @ 145
              </div>
              <Delete doc={documents.id} />
              {/* <Update doc={documents.id} /> */}
            </div>
  }

  return (
    <div className='exercises'>
      <span>Values</span>

      <hr/>
      <h3>Chest</h3>
      {chest.map((documents) => (
        displayExercise(documents)
      ))}
      <hr/>
      <h3>Back</h3>
      {back.map((documents) => (
        displayExercise(documents)
      ))}
      <hr/>
      <h3>Shoulders</h3>
      {shoulders.map((documents) => (
        displayExercise(documents)
      ))}
      <hr/>
      <h3>Core</h3>
      {core.map((documents) => (
        displayExercise(documents)
      ))}
      <hr/>
      <h3>Legs</h3>
      {legs.map((documents) => (
        displayExercise(documents)
      ))}
      <hr/>
      <h3>Functional</h3>
      {functional.map((documents) => (
        displayExercise(documents)
      ))}

    </div>
  );
};

export default FireStoreData;
