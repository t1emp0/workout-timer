import React, { useState, useCallback } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import inputToExerciseDict from "./InputParser";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "darkGrey",
  },
  workoutInput: {
    width: "80%",
    maxWidth: 500,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#2e97ff",
  },
  submitText: {
    color: "#000000",
  },
}));

function FormHandler(props) {
  const classes = useStyles();

  let [textBox, setTextBox] = useState(
    // '5" Squats + 15" Plank'
    '15" Squats + \n2x(15"Plank + 15"Burpees) + \n15" Flex'
  );
  let [showEditing, setShowEditing] = useState(true);

  const handleSubmit = useCallback(
    // TODO: Add warning if workout already started.
    (event) => {
      let exerciceDict = inputToExerciseDict(textBox);
      props.setWorkout(exerciceDict);
      setShowEditing(false);

      event.preventDefault();
    },
    [textBox, props, setShowEditing]
  );

  return (
    <div className={classes.root}>
      {showEditing && (
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              className={classes.workoutInput}
              type="text"
              name="exercises"
              id="inputExercises"
              multiline
              value={textBox}
              onChange={(e) => {
                setTextBox(e.target.value);
              }}
            />
          </div>
          <Button className={classes.submitButton} type="submit" value="Submit">
            <Typography className={classes.submitText}>SUBMIT</Typography>
          </Button>
        </form>
      )}

      {!showEditing && (
        <Button
          className={classes.submitButton}
          onClick={() => setShowEditing(true)}
        >
          Edit workout
        </Button>
      )}

    </div>
  );
}

export default FormHandler;
