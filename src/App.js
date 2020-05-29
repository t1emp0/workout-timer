import "./App.css";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FormHandler from "./components/FormHandler";
import Stopwatch from "./components/Stopwatch";
import HelpAndInfo from "./components/HelpAndInfo";
import PopUp from "./components/Popup";
import Settings from "./components/Settings";
import notifyChange from "./components/ChangeNotifier";

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  content: {
    minWidth: 280,
    minHeight: 600,
    margin: "auto",
  },
  title: {
    paddingTop: "4vh",
    paddingBottom: 10,
    userSelect: "none",
  },
}));

function App() {
  let classes = useStyles();

  let [workout, setWorkout] = useState({ exercises: [] });

  let [settingsEnabled, setSettingsEnabled] = useState(false);
  let [volumeEnabled, setVolumeActive] = useState(true);
  let [volume, setVolume] = useState(1);

  const fullNotifyUpdated = () => {
    notifyChange(volume, volumeEnabled);
  };

  const togglePopUp = () => {
    setSettingsEnabled(!settingsEnabled);
  };

  const titleClick = () => {
    //TODO: Add alert
    setWorkout({ exercises: [] });
  };

  return (
    <div className={classes.app}>
      <div className={classes.content}>
        {settingsEnabled && (
          <PopUp
            toggle={togglePopUp}
            inside={
              <Settings
                funcs={[volumeEnabled, setVolumeActive, volume, setVolume]}
              />
            }
          />
        )}

        <div onClick={titleClick}>
          <Typography variant="h2" className={classes.title}>
            WORKOUT TIMER
          </Typography>
        </div>

        <FormHandler
          workout={workout}
          setWorkout={setWorkout}
          openSettings={togglePopUp}
        />

        {workout.exercises.length === 0 && <HelpAndInfo />}

        {workout.exercises.length > 0 && (
          <Stopwatch workout={workout} notifyChange={fullNotifyUpdated} />
        )}
      </div>
    </div>
  );
}

export default App;
