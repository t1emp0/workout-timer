import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import inputToExerciceArray from "./InputParser";
import { TextField } from "@material-ui/core";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",
      textInput: "",
      exercicesUpdated: false,
      exercices: [],
      showEditing: true,
    };

    this.state.textBox = '5" squats, 2x (2x(5"plank, 5"burpees)), 5" flex';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editExercices = this.editExercices.bind(this);
    this.setExercicesUpdated = this.setExercicesUpdated.bind(this);
  }

  setExercicesUpdated = (state) => {
    this.setState({ exercicesUpdated: state });
  };

  editExercices = () => {
    this.setState({ showEditing: true});
  }
  
  handleChange = (event) => {
    this.setState({ textBox: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      textInput: this.state.textBox,
      exercices: inputToExerciceArray(this.state.textBox),
      exercicesUpdated: true,
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
                name="exercices"
                multiline
                value={this.state.textBox}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        )}

        {!this.state.showEditing && (
          <button onClick={this.editExercices}>
            Edit exercices
          </button>
        )}

        {this.state.exercices.length > 0 && (
          <div>
            <Stopwatch
              events={this.state.exercices}
              exercicesUpdated={this.state.exercicesUpdated}
              setExercicesUpdated={this.setExercicesUpdated}
              notifyChange={this.props.notifyChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FormHandler;
