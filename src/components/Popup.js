import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
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
    paddingTop: 10,
    paddingBottom: 30,
    maxWidth: "80%",
    borderRadius: "8px",
  },
  close: {
    textAlign: "right",
  },
  inside: {},
}));

function PopUp(props) {
  const classes = useStyles();
  const node = useRef();

  const handleClose = () => {
    props.toggle();
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      console.log("click  inside");
      return;
    }
    // outside click
    handleClose();
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className={classes.modal}>
      <div className={classes.modal_content} ref={node}>
        <div className={classes.close}>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ fontSize: 24 }} />
          </IconButton>
        </div>
        <div className={classes.inside}>{props.inside}</div>
      </div>
    </div>
  );
}

export default PopUp;
