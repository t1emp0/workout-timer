import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import textDealer from "./InputHandler";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",
      textInput: "",
      exercicesUpdated: false,
      exercices: [],
    };

    this.state.textBox = '5" squats, 5" plank, 5" flex';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setExercicesUpdated = (state) => {
    this.setState({ exercicesUpdated: state });
  };

  handleChange = (event) => {
    this.setState({ textBox: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      textInput: this.state.textBox,
      exercices: textDealer(this.state.textBox),
      exercicesUpdated: true,
    });
    console.log(this.state.exercices);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/*<textarea
          type="text"
          name="exercicesInput"
          value={this.state.textBox}
          onChange={this.handleChange}
        >
          {" "}
        </textarea> */}
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="exercices"
            value={this.state.textBox}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        {this.state.exercices.length > 0 && (
          <div>
            <p>Input exercices: {this.state.textInput}</p>

            <Stopwatch
              number={this.state.number}
              events={this.state.exercices}
              updated={this.state.exercicesUpdated}
              setExercicesUpdated={this.setExercicesUpdated}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FormHandler;
