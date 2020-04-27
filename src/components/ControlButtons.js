import React, { Component } from "react";

import { IconButton } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

class ControlButons extends Component {
  getButtons(status, classes) {
    switch (status) {
      case "Playing":
        return (
          <IconButton
            // class={classes.iconButton}
            aria-label="play"
            onClick={this.props.pauseTimer}
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
              onClick={this.props.startTimer}
            >
              <PlayArrowIcon style={{ fontSize: 32 }} />
            </IconButton>

            <div style={{ minWidth: "10px" }} />

            <IconButton
              //   class={classes.iconButton}
              aria-label="play"
              onClick={this.props.resetTimer}
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
            onClick={this.props.startTimer}
          >
            <PlayArrowIcon style={{ fontSize: 32 }} />
          </IconButton>
        );
    }
  }

  render() {
    return this.getButtons(this.props.status);
  }
}

export default ControlButons;
