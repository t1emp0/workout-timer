import React from "react";
import { IconButton } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

function getButtons(status, startTimer, pauseTimer, resetTimer) {
  switch (status) {
    case "Playing":
      return (
        <IconButton aria-label="pause" onClick={pauseTimer}>
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
          <IconButton aria-label="play" onClick={startTimer}>
            <PlayArrowIcon style={{ fontSize: 32 }} />
          </IconButton>

          <div style={{ minWidth: "10px" }} />

          <IconButton aria-label="reset" onClick={resetTimer}>
            <ReplayIcon style={{ fontSize: 32 }} />
          </IconButton>
        </div>
      );
    // case "Not started"
    default:
      return (
        <IconButton aria-label="play" onClick={startTimer}>
          <PlayArrowIcon style={{ fontSize: 32 }} />
        </IconButton>
      );
  }
}

function ControlButons(props) {
  const timerState = props.status;
  const startTimer = props.controlFunctions[0];
  const pauseTimer = props.controlFunctions[1];
  const resetTimer = props.controlFunctions[2];

  return getButtons(timerState, startTimer, pauseTimer, resetTimer);
}

export default ControlButons;
