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

  render() {
    const { timerTime } = this.state;
    let deciseconds = ("0" + (Math.floor(timerTime / 100) % 10)).slice(-1);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    let totalSeconds = Math.floor(timerTime / 1000);
    let exerciceDeciseconds = Math.floor(timerTime / 100) - this.lastStart * 10;
    let exerciceSeconds = totalSeconds - this.lastStart;
    let exerciceProgress = 0;

    if (this.state.timerOn === true) {
      if (exerciceSeconds >= this.currentExercice.duration) {
        if (this.events.length === 0) {
          this.stopTimer();
        } else {
          this.lastStart = totalSeconds;
          this.currentExercice = this.changeExercice();

          console.log("Exercice changed to: ", this.currentExercice.exercice);
          console.log(
            "STARTS: ",
            this.currentExercice.duration,
            this.lastStart
          );
        }
      }

      exerciceProgress =
        exerciceDeciseconds / (this.currentExercice.duration * 10);
    }

    return (
      <div className="Stopwatch">
        <div>Current exercice:</div>
        <div>{this.currentExercice.exercice}</div>
        <div>{exerciceProgress}</div>

        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds}, {deciseconds}
        </div>

        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
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
