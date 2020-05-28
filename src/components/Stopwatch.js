import "../App.css";
import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";

import ControlButons from "./ControlButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    // backgroundColor: "grey",
  },
  currentExerciseLabel: {
    margin: 0,
    // textAlign: "left",
  },
  currentExerciseText: {
    paddingBottom: "1vh",
    margin: 0,
  },
  excerciseProgress: {
    color: "#2e97ff",
  },
  totalProgress: { color: "#000080" },
  buttonRow: {
    marginTop: "1vh",
  },
  extraInfo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1vh",
  },
  snackbar: {
    display: "flex",
    position: "absolute",
    bottom: 70,
  },
}));

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

function getTimerState(timerOn, timerTime, timerFinished) {
  //  DIFFERENT TIMER STATES:
  if (timerOn) {
    return "Playing";
  }
  if (timerFinished) {
    return "Finished";
  }
  if (!timerOn && timerTime === 0) {
    return "Not Started";
  }
  if (!timerOn && timerTime > 0) {
    return "Paused";
  }
}

function getButtons(timerOn, timerTime, timerFinished, controlFunctions) {
  const status = getTimerState(timerOn, timerTime, timerFinished);
  return <ControlButons status={status} controlFunctions={controlFunctions} />;
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

function Stopwatch(props) {
  const classes = useStyles();

  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);
  const [currentExercise, setCurrentExercise] = useState("");

  let [events, setEvents] = useState([]);
  const [lastStart, setLastStart] = useState(0);
  const [timer, setTimer] = useState("");

  const startTimer = () => {
    setTimerOn(true);
    setTimerFinished(false);
    setTimerTime(timerTime);
    let startTime = Date.now() - timerTime;

    setTimer(
      setInterval(() => {
        setTimerTime(Date.now() - startTime);
      }, 10)
    );
  };

  const pauseTimer = () => {
    setTimerOn(false);
    clearInterval(timer);
  };

  const resetTimer = () => {
    setTimerTime(0);
    setTimerFinished(false);

    startEvents();
  };

  const startEvents = () => {
    let localEvents = [...props.workout.exercises];

    if (localEvents.length > 0) {
      setCurrentExercise(localEvents.shift());
    }
    setEvents(localEvents);
    setLastStart(0);
  };

  const workoutFinished = () => {
    setTimerFinished(true);
    pauseTimer();
  };

  const getNextExercise = () => {
    let localEvents = [...events];
    let nextExercise = localEvents.shift();
    props.notifyChange();
    setEvents(localEvents);
    return nextExercise;
  };

  const changeExercise = (totalSeconds) => {
    if (events.length === 0) {
      workoutFinished();
    } else {
      setLastStart(totalSeconds);
      setCurrentExercise(getNextExercise());
    }
  };

  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleUpdateSignal = () => {
    pauseTimer();
    resetTimer();
    // setOpen(true);
  };

  useEffect(() => {
    handleUpdateSignal();
  }, [props.workout]);

  let totalSeconds = Math.floor(timerTime / 1000);
  let exerciseMilis = timerTime - lastStart * 1000;
  let exerciseSeconds = Math.floor(exerciseMilis / 1000);
  let exerciseLeft = currentExercise.duration - exerciseSeconds;

  if (timerOn && exerciseSeconds >= currentExercise.duration) {
    changeExercise(totalSeconds);
  }

  return (
    <div className={classes.root}>
      {/* <div>
        {timerTime === 0 && (
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            className={classes.snackbar}
          >
            <Alert onClose={handleClose} severity="success">
              Ready to begin. Press start!
            </Alert>
          </Snackbar>
        )}
      </div> */}
      {!timerFinished && (
        <div>
          <div>
            <p className={classes.currentExerciseLabel}>Current exercise: </p>
            <Typography variant="h1" className={classes.currentExerciseText}>
              {currentExercise.name}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              style={{ fontWeight: "regular", position: "absolute", margin: 0 }}
            >
              {timeFormatter(exerciseLeft * 1000)}
            </Typography>
            <div style={{ position: "absolute" }}>
              <CircularProgress
                className={classes.excerciseProgress}
                variant="static"
                value={
                  100 -
                  parseInt(exerciseMilis / (currentExercise.duration * 10))
                }
                size={240}
                thickness={6}
              />
            </div>
            <CircularProgress
              className={classes.totalProgress}
              variant="static"
              size={280}
              thickness={1}
              // Could make this value update with seconds. Better?
              // TODO: Check which way users like best.
              value={parseInt(timerTime / props.workout.duration / 10)}
            />
          </div>

          <div className={classes.buttonRow}>
            {getButtons(timerOn, timerTime, timerFinished, [
              startTimer,
              pauseTimer,
              resetTimer,
            ])}
          </div>

          <div className={classes.extraInfo}>
            <div style={{ justifyContent: "center" }}>
              Time elapsed:
              <h4 style={{ margin: 0, fontSize: "20px" }}>
                {timeFormatter(timerTime)}
              </h4>
            </div>

            <div style={{ minWidth: "40px" }} />

            <div style={{ justifyContent: "center" }}>
              Exercises left:
              <h4 style={{ margin: 0, fontSize: "20px" }}>
                {events.length + 1}/{props.workout.exercises.length}
              </h4>
            </div>
          </div>
        </div>
      )}

      {timerFinished && timerTime !== 0 && (
        <div>
          <h3>Workout done! Congratulations!</h3>
          <div className={classes.buttonRow}>
            {getButtons(timerOn, timerTime, timerFinished, [
              startTimer,
              pauseTimer,
              resetTimer,
            ])}
          </div>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
