import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    // padding: 0,
  },
  controlIcon: {
    fontSize: 32,
  },
  distributingDiv: {
    display: "flex",
    justifyContent: "center",
  },
  buttonsSeparationDiv: {
    minWidth: "30px",
  },
}));

function getButtons(classes, status, startTimer, pauseTimer, resetTimer) {
  switch (status) {
    case "Playing":
      return (
        <IconButton
          className={classes.iconButton}
          aria-label="pause"
          onClick={pauseTimer}
        >
          <PauseIcon className={classes.controlIcon} />
        </IconButton>
      );
    case "Paused":
      return (
        <div className={classes.distributingDiv}>
          <IconButton
            className={classes.iconButton}
            aria-label="play"
            onClick={startTimer}
          >
            <PlayArrowIcon className={classes.controlIcon} />
          </IconButton>

          <div className={classes.buttonsSeparationDiv} />

          <IconButton
            className={classes.iconButton}
            aria-label="reset"
            onClick={resetTimer}
          >
            <ReplayIcon className={classes.controlIcon} />
          </IconButton>
        </div>
      );
    // case "Not started"
    default:
      return (
        <IconButton
          className={classes.iconButton}
          aria-label="play"
          onClick={startTimer}
        >
          <PlayArrowIcon className={classes.controlIcon} />
        </IconButton>
      );
  }
}

function ControlButons(props) {
  const timerState = props.timerState;
  const startTimer = props.startTimer;
  const pauseTimer = props.pauseTimer;
  const resetTimer = props.resetTimer;

  const classes = useStyles();

  return getButtons(classes, timerState, startTimer, pauseTimer, resetTimer);
}

export default ControlButons;
