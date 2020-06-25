import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    // backgroundColor: "darkGrey",
  },
  helpAndInfo: {
    display: "inline-block",
    alignItems: "center",
    width: "80%",
    maxWidth: 505,
  },
  panelDetails: {
    paddingTop: 0,
    textAlign: "left",
  },
  panelDiv: {
    width: "100%",
  },
  text: {
    marginTop: "0",
    marginBottom: "0",
  },
  instructionList: {
    paddingLeft: "10px",
    margin: 0,
  },
  workoutsList: {
    paddingLeft: 0,
    margin: 0,
    listStyle: "none",
  },
  sampleButtonContainer: {
    marginTop: "5px",
    textAlign: "center",
  },
  sampleButton: {
    backgroundColor: "rgba(150,203,255,1)",
  },
  listItem: {
    marginTop: "5px",
    textAlign: "justify",
  },
  aboutDiv: {
    textAlign: "justify",
  },
}));

const sampleWorkouts = [
  {
    title: "Default",
    workout: '15" Squats + \n2x(15" Plank + 15" Burpees) + \n15" Lunges',
  },
  {
    title: "5 minute plank",
    workout:
      '1\' High plank + 30" Elbow plank + \n30" Rise one foot + 30" Rise other foot + \
      \n30" Side plank + 30" Other side + \n30" High plank + 1\' Elbow plank',
  },
];

function HelpAndInfo(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.helpAndInfo}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Sample workouts</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.panelDetails}>
            <div className={classes.panelDiv}>
              <p className={classes.text}>
                You can try the following workouts:
              </p>
              <ul className={classes.workoutsList}>
                {sampleWorkouts.map((sample) => (
                  <li className={classes.sampleButtonContainer}>
                    <Button
                      className={classes.sampleButton}
                      onClick={() => props.setTextBox(sample.workout)}
                    >
                      {sample.title}
                    </Button>
                  </li>
                ))}
              </ul>
              <p style={{ marginBottom: 0 }}>
                Feel free to write whatever you want! <br />
                You have the instructions below.
              </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">How to write a workout</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.panelDetails}>
            <div className={classes.panelDiv}>
              <p className={classes.text}>Follow these instructions:</p>
              <ul className={classes.instructionList}>
                <li className={classes.listItem}>
                  You must write exercises or exercise blocks separated by{" "}
                  <b>,</b> or <b>+</b>.
                </li>
                <li className={classes.listItem}>
                  <u>Exercises:</u> <br />
                  First write the duration by expressing minutes <b>'</b> and
                  seconds <b>"</b>, and then the exercise name.
                </li>
                <li className={classes.listItem}>
                  <u>Exercise blocks:</u> <br />
                  First write the number of repetitions followed by the
                  multiplication symbol <b>x</b> or <b>*</b> and then the block
                  between parentheses: <b>( )</b> or <b>[ ]</b> or{" "}
                  <b>{"{ }"}</b>. <br />
                </li>
              </ul>
              <p style={{ marginBottom: 0 }}>You may write nested blocks.</p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">About the app</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.panelDetails}>
            <div className={classes.panelDiv}>
              <div className={classes.aboutDiv}>
                <p style={{ marginTop: 0 }}>
                  This app is supposed to help you with your workouts. If you
                  enter the workout in the format explained above, it will tell
                  you which exercise you're at and much time is left. <br />
                  <br />
                  If you're unsure how to do it, try the example above! <br />
                  <br />
                  App created with &#60;3 by{" "}
                  <a href="https://github.com/t1emp0" target="_blank">
                    t1emp0
                  </a>
                  .
                </p>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

export default HelpAndInfo;
