import React from "react";

import { IconButton } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

function getButtons(status, startTimer, pauseTimer, resetTimer) {
  switch (status) {
    case "Playing":
      return (
        <IconButton
          // class={classes.iconButton}
          aria-label="pause"
          onClick={pauseTimer}
        >
          <PauseIcon style={{ fontSize: 32 }} />
        </IconButton>
      );
    case "Paused":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            //   class={classes.iconButton}
            aria-label="play"
            onClick={startTimer}
          >
            <PlayArrowIcon style={{ fontSize: 32 }} />
          </IconButton>

          <div style={{ minWidth: "10px" }} />

          <IconButton
            //   class={classes.iconButton}
            aria-label="reset"
            onClick={resetTimer}
          >
            <ReplayIcon style={{ fontSize: 32 }} />
          </IconButton>
        </div>
      );
    // case "Not started"
    default:
      return (
        <IconButton
          // class={classes.iconButton}
          aria-label="play"
          onClick={startTimer}
        >
          <PlayArrowIcon style={{ fontSize: 32 }} />
        </IconButton>
      );
  }
}

function ControlButons(props) {
  const timerState = props.status;
  const startTimer = props.startTimer;
  const pauseTimer = props.pauseTimer;
  const resetTimer = props.resetTimer;

  return getButtons(timerState, startTimer, pauseTimer, resetTimer);
}

export default ControlButons;
