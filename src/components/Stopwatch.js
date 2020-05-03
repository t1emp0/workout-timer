import "../App.css";
import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";

import ControlButons from "./ControlButtons";

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

function getTimerState(timerOn, timerTime) {
  //  DIFFERENT STATES:
  if (timerOn) {
    return "Playing";
  }
  if (!timerOn && timerTime === 0) {
    return "Not Started";
  }
  if (!timerOn && timerTime > 0) {
    return "Paused";
  }
}

function getButtons(timerOn, timerTime, controlFunctions) {
  const status = getTimerState(timerOn, timerTime);
  return <ControlButons status={status} controlFunctions={controlFunctions} />;
}

function Stopwatch(props) {
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

  const handleUpdateSignal = () => {
    pauseTimer();
    resetTimer();
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
    <div className="Stopwatch" style={{ paddingTop: "30px" }}>
      {timerTime === 0 && (
        <div>
          <h3>Ready to begin workout. Press start!</h3>
        </div>
      )}
      {!timerFinished && (
        <div>
          <div>Current exercise:</div>
          <Typography
            variant="h2"
            style={{
              paddingBottom: "30px",
              margin: "0",
            }}
          >
            {currentExercise.name}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              style={{ position: "absolute", margin: 0 }}
            >
              {timeFormatter(exerciseLeft * 1000)}
            </Typography>
            <div style={{ position: "absolute" }}>
              <CircularProgress
                variant="static"
                value={
                  100 -
                  parseInt(exerciseMilis / (currentExercise.duration * 10))
                }
                size={200}
                thickness={5}
              />
            </div>
            <CircularProgress
              variant="static"
              // Could make this value update with seconds. Better?
              // TODO: Check which way users like best.
              value={parseInt(timerTime / props.workout.duration / 10)}
              size={250}
              thickness={2}
            />
          </div>

          <div style={{ paddingTop: "30px" }}>
            {getButtons(timerOn, timerTime, [
              startTimer,
              pauseTimer,
              resetTimer,
            ])}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{ justifyContent: "center" }}
            >
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
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
