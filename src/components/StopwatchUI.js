import React from "react";
import { Typography, CircularProgress, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkipNextIcon from "@material-ui/icons/SkipNext";

/**
 * Formats the given time to a string (HH :) MM : SS
 * @param {number} timeMilis Time to be formatted in milliseconds
 */
function timeFormatter(timeMilis) {
  //let deciseconds = ("0" + (Math.floor(timeMilis / 100) % 10)).slice(-1);
  let seconds = ("0" + (Math.floor(timeMilis / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timeMilis / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timeMilis / 3600000)).slice(-2);

  let output = "";
  if (hours === "00") {
    output = minutes + " : " + seconds;
  } else {
    output = hours + " : " + minutes + " : " + seconds;
  }
  return output;
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3vh",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  currentExerciseLabel: {
    margin: 0,
    textAlign: "left",
  },
  currentExerciseText: {
    paddingBottom: "1vh",
    margin: 0,
  },
  exerciseTimeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  exerciseTimeText: {
    fontWeight: "regular",
    position: "absolute",
    margin: 0,
  },
  exerciseProgress: {
    position: "absolute",
  },
  skipExercise: {
    position: "absolute",
    alignSelf: "end",
    right: 0,
  },
  controlButtons: {
    marginTop: "2vh",
  },
  extraInfoContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2vh",
  },
  extraInfoText: {
    margin: 0,
    fontSize: "20px",
  },
  extraInfoSeparation: {
    minWidth: "40px",
  },
}));


function StopwatchUI(props) {
  const classes = useStyles();

  let timerTime = props.timerTime;
  let currentExercise = props.currentExercise;
  let lastStart = props.lastStart;

  let exerciseMilis = timerTime - lastStart * 1000;
  let exerciseSeconds = Math.floor(exerciseMilis / 1000);
  let exerciseLeft = currentExercise.duration - exerciseSeconds;

  let exerciseProgress =
    100 - parseInt(exerciseMilis / (currentExercise.duration * 10));
  let totalProgress = parseInt(timerTime / props.workoutDuration / 10);

  return (
    <div className={classes.root}>
      <div>
        <div>
          <p className={classes.currentExerciseLabel}>Current exercise: </p>
          <Typography variant="h1" className={classes.currentExerciseText}>
            {currentExercise.name}
          </Typography>
        </div>

        <div className={classes.exerciseTimeContainer}>
          <Typography variant="h1" className={classes.exerciseTimeText}>
            {timeFormatter(exerciseLeft * 1000)}
          </Typography>
          
          <CircularProgress
            className={classes.exerciseProgress}
            variant="static"
            value={exerciseProgress}
            size={"36vh"}
            thickness={6}
          />

          <CircularProgress
            className={classes.totalProgress}
            variant="static"
            color="secondary"
            size={"42vh"}
            thickness={1}
            value={totalProgress}
          />

          {props.skipEnabled && (
            <IconButton
              className={classes.skipExercise}
              aria-label="skip"
              onClick={() => props.skipExercise()}
            >
              <SkipNextIcon />
            </IconButton>
          )}
        </div>

        <div className={classes.controlButtons}>{props.controlButtons}</div>

        <div className={classes.extraInfoContainer}>
          <div>
            Time elapsed:
            <h4 className={classes.extraInfoText}>
              {timeFormatter(timerTime)}
            </h4>
          </div>

          <div className={classes.extraInfoSeparation} />

          <div>
            Exercises left:
            <h4 className={classes.extraInfoText}>{props.exercisesLeft}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopwatchUI;
