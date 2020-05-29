import React, { useState, useCallback } from "react";
import { TextField, Button, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import inputToExerciseDict from "./InputParser";

import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    width: "80%",
    maxWidth: 505,
  },
  workoutInput: {
    width: "100%",
  },
  buttonsRow: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  submitButton: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "rgba(46,151,255,0.75)",
  },
  settingsButton: {
    marginLeft: "auto",
  },
  settingsIcon: {
    fontSize: 32,
  },
  submitText: {
    color: "#000000",
  },
}));

function FormHandler(props) {
  const classes = useStyles();

  let [textBox, setTextBox] = useState(
    // '5" Squats + 3x(5" Plank)'
    '15" Squats + \n2x(15"Plank + 15"Burpees) + \n15" Lunges'
  );
  let [showEditing, setShowEditing] = useState(true);

  const handleSubmit = useCallback(
    // TODO: Add warning if workout already started.
    (event) => {
      let exerciceDict = inputToExerciseDict(textBox);
      props.setWorkout(exerciceDict);
      toggleShowEditing();

      event.preventDefault();
    },
    [textBox, props, setShowEditing]
  );

  const toggleShowEditing = () => {
    setShowEditing(!showEditing);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        {showEditing && (
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
        )}

        <div className={classes.buttonsRow}>
          {showEditing ? (
            <Button
              className={classes.submitButton}
              type="submit"
              value="Submit"
            >
              <Typography className={classes.submitText}>SUBMIT</Typography>
            </Button>
          ) : (
            <Button
              className={classes.submitButton}
              onClick={() => toggleShowEditing()}
            >
              <Typography className={classes.submitText}>
                Edit workout
              </Typography>
            </Button>
          )}
          <IconButton
            onClick={props.openSettings}
            className={classes.settingsButton}
          >
            <SettingsIcon className={classes.settingsIcon} />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default FormHandler;
