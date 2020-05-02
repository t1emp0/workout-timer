import React, { useState, useCallback } from "react";

import Stopwatch from "./Stopwatch";
import inputToExerciseDict from "./InputParser";
import { TextField } from "@material-ui/core";


function FormHandler(props) {
  let [textBox, setTextBox] = useState('15" Squats + 2x(15"Plank + 15"Burpees) + 15" Flex');
  let [workoutUpdated, setWorkoutUpdated] = useState(false);
  let [showEditing, setShowEditing] = useState(true);
  let [workout, setWorkout] = useState({ exercises: [] });

  /*
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",
      textInput: "",
      workoutUpdated: false,
      workout: {exercises:  []},
      showEditing: true,
    };

    this.state.textBox = '15" Squats + 2x(15"Plank + 15"Burpees) + 15" Flex';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditWorkout = this.handleEditWorkout.bind(this);
    this.setWorkoutUpdated = this.setWorkoutUpdated.bind(this);
  }*/

  const handleEditWorkout = () => {
    setShowEditing(true);
  };

  const handleSubmit = useCallback(
    (event) => {
      setWorkout(inputToExerciseDict(textBox));
      setWorkoutUpdated(true);
      setShowEditing(false);

      event.preventDefault();
    },
    [textBox, setWorkout, setWorkoutUpdated, setShowEditing]
  );

  return (
    <div>
      {showEditing && (
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              style={{
                width: "80%",
              }}
              type="text"
              name="exercises"
              multiline
              value={textBox}
              onChange={ (e) => {
                setTextBox(e.target.value)
              }}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      )}

      {!showEditing && (
        <button onClick={handleEditWorkout}>Edit exercises</button>
      )}

      {workout.exercises.length > 0 && (
        <div>
          <Stopwatch
            workout={workout}
            workoutUpdated={workoutUpdated}
            setWorkoutUpdated={setWorkoutUpdated}
            notifyChange={props.notifyChange}
          />
        </div>
      )}
    </div>
  );
}

export default FormHandler;
