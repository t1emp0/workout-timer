import "./App.css";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FormHandler from "./components/FormHandler";
import Stopwatch from "./components/StopwatchLogic";
import HelpAndInfo from "./components/HelpAndInfo";
import PopUp from "./components/Popup";
import Settings from "./components/Settings";
import notifyChange from "./components/ChangeNotifier";
import EndScreen from "./components/EndScreen";

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
    paddingBottom: 20,
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
  let [appState, setAppState] = useState("Home");

  let [settingsEnabled, setSettingsEnabled] = useState(false);
  let [volumeEnabled, setVolumeEnabled] = useState(true);
  let [volume, setVolume] = useState(1);
  let [flashEnabled, setFlashEnabled] = useState(false);

  const fullNotifyUpdated = () => {
    const targetDiv = document.querySelector("#App");
    notifyChange(volume, volumeEnabled, flashEnabled, targetDiv);
  };
  
  const togglePopUp = () => {
    setSettingsEnabled(!settingsEnabled);
  };
  
  const titleClick = () => {
    setWorkout({ exercises: [] });
    setAppState("Home");
  };

  return (
    <div id="App" className={classes.app}>
      <div className={classes.content}>
        {settingsEnabled && (
          <PopUp
            toggle={togglePopUp}
            inside={
              <Settings
                funcs={[
                  volumeEnabled, setVolumeEnabled,
                  volume, setVolume,
                  flashEnabled, setFlashEnabled,
                ]}
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
          setWorkout={setWorkout}
          timerStarted={appState === "Timing"}
          openSettings={togglePopUp}
          setAppState={setAppState}
        />

        {appState === "Home" && <HelpAndInfo />}

        {appState === "Timing" && (
          <Stopwatch
            workout={workout}
            notifyChange={fullNotifyUpdated}
            setAppState={setAppState}
          />
        )}

        {appState === "Finished" && (
          <EndScreen
            resetTimer={() => {
              setWorkout(workout);
              setAppState("Timing");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
