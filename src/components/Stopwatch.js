import React, { Component } from "react";
//import "../App.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.startEvents();
  }

  state = {
    timerOn: false,
    timerTime: 0,
    timerStart: 0,
    currentExercice: "",
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
    this.i = 0;
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
    this.startEvents();
  };

  startEvents() {
    // Initialize the loop:
    this.events = [...this.props.events];
    console.log("Events:");
    console.log(this.events);
    console.log(this.events.length);

    // Assign the first two exercices after checking they exist
    this.currentExercice = this.events.shift() || this.events.length > 0;

    this.lastStart = 0;
  }

  changeExercice() {
    var nextExercice = this.events.shift();
    console.log(nextExercice);
    return nextExercice;
  }

  /**
   * Formats the given time to a string (HH) : MM : SS
   * @param {Time to be formatted in milliseconds} timeMilis 
   */
  timeFormatter(timeMilis) {
    //let deciseconds = ("0" + (Math.floor(timeMilis / 100) % 10)).slice(-1);
    let seconds = ("0" + (Math.floor(timeMilis / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timeMilis / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timeMilis / 3600000)).slice(-2);

    let output = "";
    if (hours !== "00") {
      output = hours + " : " + minutes + " : " + seconds;
    } else {
      output = minutes + " : " + seconds;
    }
    return output;
  }

  render() {
    const { timerTime } = this.state;

    let totalSeconds = Math.floor(timerTime / 1000);
    let exerciceMilis = timerTime - this.lastStart * 1000;

    let exerciceSeconds = Math.floor(exerciceMilis / 1000);
    let exerciceLeft = this.currentExercice.duration - exerciceSeconds;
    let exerciceProgress = 0;

    if (this.state.timerOn === true) {
      if (exerciceSeconds >= this.currentExercice.duration) {
        if (this.events.length === 0) {
          this.stopTimer();
        } else {
          this.lastStart = totalSeconds;
          this.currentExercice = this.changeExercice();

          console.log("Exercice changed to: ", this.currentExercice.exercice);
        }
      }

      exerciceProgress = exerciceMilis / (this.currentExercice.duration * 1000);
    }

    return (
      <div className="Stopwatch">
        <div>Current exercice:</div>
        <h2 style={{ margin: 0, paddingBottom: "30px" }}>
          {this.currentExercice.exercice}
        </h2>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h4 style={{ margin: 0 }}>Exercice progress: </h4>
          &nbsp;
          {(exerciceProgress * 100).toFixed(0)} %
        </div>

        <div style={{ justifyContent: "center", display: "flex" }}>
          <h4 style={{ margin: 0 }}>Exercice time: </h4>
          &nbsp;&nbsp;
          {this.timeFormatter(exerciceLeft * 1000)}
        </div>
        <div
          className="Stopwatch-display"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <h4 style={{ margin: 0 }}>Total time: </h4>
          &nbsp;&nbsp;
          {this.timeFormatter(timerTime)}
        </div>

        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Pause</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
