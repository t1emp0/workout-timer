import React, { Component } from "react";
//import "../App.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    console.log("Stopwatch constructor called");
  }

  state = {
    timerOn: false,
    timerTime: 0,
    timerStart: 0,
    currentExercise: "",
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
      timerFinished: false,
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
      timerFinished: false,
    });
    this.startEvents();
  };

  startEvents() {
    // Initialize the loop:
    this.events = [...this.props.workout.exercises];

    this.totalDuration = this.props.workout.duration;

    // Assign the first exercise after checking it exists
    this.currentExercise = this.events.shift() || this.events.length > 0;

    // this.state.timerTime = 0;
    this.setState({ timerTime: 0 });
    this.lastStart = 0;
  }

  workoutFinished() {
    this.setState({ timerFinished: true });
    this.stopTimer();
  }

  getNextExercise() {
    var nextExercise = this.events.shift();
    console.log(nextExercise);
    this.props.notifyChange();
    return nextExercise;
  }

  changeExercise(totalSeconds) {
    if (this.events.length === 0) {
      this.workoutFinished();
    } else {
      this.lastStart = totalSeconds;
      this.currentExercise = this.getNextExercise();

      console.log(
        `${("000" + totalSeconds).slice(-3)} Exercise changed to: ${
          this.currentExercise.name
        }`
      );
    }
  }

  /**
   * Formats the given time to a string (HH :) MM : SS
   * @param {number} timeMilis Time to be formatted in milliseconds
   */
  timeFormatter(timeMilis) {
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

  handleUpdateSignal() {
    // console.log("Update signal recieved");
    this.props.setWorkoutUpdated(false);
    this.stopTimer();
    this.resetTimer();
    console.log("Workout updated");
  }

  render() {
    if (this.props.workoutUpdated) {
      this.handleUpdateSignal();
    }

    const { timerTime } = this.state;

    let totalSeconds = Math.floor(timerTime / 1000);
    let exerciseMilis = timerTime - this.lastStart * 1000;

    let exerciseSeconds = Math.floor(exerciseMilis / 1000);
    let exerciseLeft = this.currentExercise.duration - exerciseSeconds;
    let exerciseProgress =
      exerciseMilis / (this.currentExercise.duration * 1000);

    if (
      this.state.timerOn &&
      exerciseSeconds >= this.currentExercise.duration
    ) {
      this.changeExercise(totalSeconds);
    }

    return (
      <div className="Stopwatch">
        {this.state.timerTime === 0 && (
          <div>
            <h3>Ready to begin workout. Press start!</h3>
          </div>
        )}

        {!this.state.timerFinished && (
          <div>
            <div>Exercises left: {this.events.length + 1}</div>

            <div>Current exersice:</div>
            <h2 style={{ margin: 0, paddingBottom: "30px" }}>
              {this.currentExercise.name}
            </h2>

            <div style={{ justifyContent: "center", display: "flex" }}>
              <h4 style={{ margin: 0 }}>Exercise progress: </h4>
              &nbsp;&nbsp;
              {(exerciseProgress * 100).toFixed(0)} %
            </div>

            <div style={{ justifyContent: "center", display: "flex" }}>
              <h4 style={{ margin: 0 }}>Exercise time: </h4>
              &nbsp;&nbsp;
              {this.timeFormatter(exerciseLeft * 1000)}
            </div>
          </div>
        )}

        {this.state.timerFinished && this.state.timerTime !== 0 && (
          <div>
            <h3>Workout done! Congratulations!</h3>
          </div>
        )}

        <div
          className="Stopwatch-display"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <h4 style={{ margin: 0 }}>Time elapsed: </h4>
          &nbsp;&nbsp;
          {this.timeFormatter(timerTime)}
        </div>
        
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h4 style={{ margin: 0 }}>Workout duration: </h4>
          &nbsp;&nbsp;
          {this.timeFormatter(this.totalDuration * 1000)}
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
