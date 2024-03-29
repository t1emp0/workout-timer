import React, { useState, useCallback } from "react";
import { TextField, Button, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import inputToExerciseDict, { possibleErrors } from "./InputParser";

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
  submitText: {
    color: "#000000",
  },
  cancelButton: {
    alignSelf: "center",
    backgroundColor: "rgba(150,203,255,1)",
    marginLeft: 12,
  },
  cancelText: {
    color: "#000000",
    fontSize: 12,
  },
  settingsButton: {
    marginLeft: "auto",
  },
  settingsIcon: {
    fontSize: 32,
  },
}));

function FormHandler(props) {
  const classes = useStyles();

  const [textBox, setTextBox] = [props.textBox, props.setTextBox];

  let [showEditing, setShowEditing] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");
  const defaultErrorMessage = "Wrong format.";

  const handleSubmit = useCallback(
    (event) => {
      let exerciceDict = "";
      let currentErrorMessage = "";

      try {
        exerciceDict = inputToExerciseDict(textBox);
      } catch (e) {
        console.log(e);
        if (possibleErrors.includes(e.message)) {
          currentErrorMessage = e.message;
        }
        if (currentErrorMessage === "") {
          currentErrorMessage = defaultErrorMessage;
        }
        setErrorMessage(
          currentErrorMessage + " Please, check the input and try again."
        );
      }

      if (exerciceDict !== "") {
        setErrorMessage("");
        setErrorMessage("");
        props.setWorkout(exerciceDict);
        toggleShowEditing();
        props.setAppState("Timing");
      }

      event.preventDefault();
    },
    [textBox, props, setShowEditing, errorMessage]
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
            spellCheck="false"
            value={textBox}
            onChange={(e) => {
              setTextBox(e.target.value);
            }}
            error={errorMessage !== ""}
            helperText={errorMessage}
          />
        )}

        <div className={classes.buttonsRow}>
          {showEditing && props.timerStarted && (
            <Button
              className={classes.cancelButton}
              onClick={() => toggleShowEditing()}
            >
              <Typography className={classes.cancelText}>Cancel</Typography>
            </Button>
          )}

          {showEditing && (
            <Button
              className={classes.submitButton}
              type="submit"
              value="Submit"
            >
              <Typography className={classes.submitText}>SUBMIT</Typography>
            </Button>
          )}

          {!showEditing && (
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
