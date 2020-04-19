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
    currentExercice: "",
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
    //console.log(this.props.exercicesUpdated);
    this.startEvents();
  };

  startEvents() {
    // Initialize the loop:
    this.events = [...this.props.events];
    //console.log("Events:", this.events);

    // Assign the first exercice after checking it exists
    this.currentExercice = this.events.shift() || this.events.length > 0;

    // this.state.timerTime = 0;
    this.setState({ timerTime: 0 });
    this.lastStart = 0;
  }

  changeExercice() {
    var nextExercice = this.events.shift();
    console.log(nextExercice);
    this.props.notifyChange();
    return nextExercice;
  }

  /**
   * Formats the given time to a string (HH :) MM : SS
   * @param {Time to be formatted in milliseconds} timeMilis
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
    this.props.setExercicesUpdated(false);
    this.stopTimer();
    this.resetTimer();
    console.log("Exercices updated");
  }

  render() {
    if (this.props.exercicesUpdated) {
      this.handleUpdateSignal();
    }

    const { timerTime } = this.state;

    let totalSeconds = Math.floor(timerTime / 1000);
    let exerciceMilis = timerTime - this.lastStart * 1000;

    let exerciceSeconds = Math.floor(exerciceMilis / 1000);
    let exerciceLeft = this.currentExercice.duration - exerciceSeconds;
    let exerciceProgress =
      exerciceMilis / (this.currentExercice.duration * 1000);

    if (this.state.timerOn === true) {
      if (exerciceSeconds >= this.currentExercice.duration) {
        if (this.events.length === 0) {
          this.setState({ timerFinished: true });
          this.stopTimer();
        } else {
          this.lastStart = totalSeconds;
          this.currentExercice = this.changeExercice();

          console.log("Exercice changed to:", this.currentExercice.exercice);
        }
      }
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
            <div>Exercices left: {this.events.length + 1}</div>

            <div>Current exercice:</div>
            <h2 style={{ margin: 0, paddingBottom: "30px" }}>
              {this.currentExercice.exercice}
            </h2>

            <div style={{ justifyContent: "center", display: "flex" }}>
              <h4 style={{ margin: 0 }}>Exercice progress: </h4>
              &nbsp;&nbsp;
              {(exerciceProgress * 100).toFixed(0)} %
            </div>

            <div style={{ justifyContent: "center", display: "flex" }}>
              <h4 style={{ margin: 0 }}>Exercice time: </h4>
              &nbsp;&nbsp;
              {this.timeFormatter(exerciceLeft * 1000)}
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
