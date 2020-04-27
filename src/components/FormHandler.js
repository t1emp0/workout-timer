import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import inputToExerciseDict from "./InputParser";
import { TextField } from "@material-ui/core";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",
      textInput: "",
      workoutUpdated: false,
      workout: {exercises:  []},
      showEditing: true,
    };

    this.state.textBox = '5" squats + 2x [2x(5"plank + 5"burpees)] + 5" flex';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditWorkout = this.handleEditWorkout.bind(this);
    this.setWorkoutUpdated = this.setWorkoutUpdated.bind(this);
  }

  setWorkoutUpdated = (state) => {
    this.setState({ workoutUpdated: state });
  };

  handleEditWorkout = () => {
    this.setState({ showEditing: true});
  }
  
  handleChange = (event) => {
    this.setState({ textBox: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      textInput: this.state.textBox,
      workout: inputToExerciseDict(this.state.textBox),
      workoutUpdated: true,
      showEditing: false,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {this.state.showEditing && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                style={{
                  width: "80%",
                }}
                type="text"
                name="exercises"
                multiline
                value={this.state.textBox}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        )}

        {!this.state.showEditing && (
          <button onClick={this.handleEditWorkout}>
            Edit exercises
          </button>
        )}

        {this.state.workout.exercises.length > 0 && (
          <div>
            <Stopwatch
              workout={this.state.workout}
              workoutUpdated={this.state.workoutUpdated}
              setWorkoutUpdated={this.setWorkoutUpdated}
              notifyChange={this.props.notifyChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FormHandler;
