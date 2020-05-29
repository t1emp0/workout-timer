import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = (theme) => ({
  modal: {
    zIndex: "1",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal_content: {
    display: "inline",
    backgroundColor: theme.palette.background.default,
    opacity: "1",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    padding: 20,
    paddingTop:10,
    paddingBottom:30,
    maxWidth: "80%",
  },
  close: {
    textAlign: "right",
  },
  inside: {
  },
});

class PopUp extends Component {
  handleClose = () => {
    this.props.toggle();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.modal}>
        <div className={classes.modal_content}>
          <div className={classes.close} onClick={this.handleClose}>
            <IconButton>
              <CloseIcon style={{ fontSize: 24 }} />
            </IconButton>
          </div>
          <div className={classes.inside}>{this.props.inside}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(PopUp);
