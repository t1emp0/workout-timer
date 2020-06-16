import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ReplayIcon from "@material-ui/icons/Replay";


const useStyles = makeStyles((theme) => ({
  iconButton: {
    // padding: 0,
  },
  controlIcon: {
    fontSize: 32,
  },
  distributingDiv: {
    display: "flex",
    justifyContent: "center",
  },
  buttonsSeparationDiv: {
    minWidth: "30px",
  },
}));


function EndScreen(props) {

  const classes = useStyles();

  return (
    <div>
      <h3>Workout done! Congratulations!</h3>

      <IconButton
            className={classes.iconButton}
            aria-label="reset"
            onClick={props.resetTimer}
          >
            <ReplayIcon className={classes.controlIcon} />
          </IconButton>



    </div>
  );
}


export default EndScreen;
