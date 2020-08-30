import React, { useState, useEffect } from "react";

import ControlButons from "./ControlButtons";
import StopwatchUI from "./StopwatchUI";

function getTimerState(timerOn, timerTime) {
  //  DIFFERENT TIMER STATES:
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

function Stopwatch(props) {
  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [currentExercise, setCurrentExercise] = useState("");

  const [localWorkout, setLocalWorkout] = useState({ duration: 1, length: 0 });

  let [events, setEvents] = useState([]);
  const [lastStart, setLastStart] = useState(0);
  const [timer, setTimer] = useState("");

  const startTimer = () => {
    setTimerOn(true);
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
    startEvents();
  };

  const startEvents = () => {
    let localEvents = [...props.workout.exercises];
    setLocalWorkout({
      duration: props.workout.duration,
      length: props.workout.exercises.length,
    });

    if (localEvents.length > 0) {
      setCurrentExercise(localEvents.shift());
    }
    setEvents(localEvents);
    setLastStart(0);
  };

  const workoutFinished = () => {
    props.notifyChange();
    pauseTimer();
    props.setAppState("Finished");
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

  if (timerOn && exerciseSeconds >= currentExercise.duration) {
    changeExercise(totalSeconds);
  }

  const skipExercise = () => {
    const newDuration =
      localWorkout.duration - (currentExercise.duration - exerciseSeconds);
    setLocalWorkout({
      duration: newDuration,
      length: props.workout.exercises.length,
    });
    changeExercise(totalSeconds);
  };

  return (
    <StopwatchUI
      timerTime={timerTime}
      currentExercise={currentExercise}
      lastStart={lastStart}
      workoutDuration={localWorkout.duration}
      exercisesLeft={` ${events.length + 1} / ${localWorkout.length}`}
      skipExercise = {skipExercise}
      skipEnabled = {props.skipEnabled}
      controlButtons={
        <ControlButons
          timerState={getTimerState(timerOn, timerTime)}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />
      }
    />
  );
}

export default Stopwatch;
