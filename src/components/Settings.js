import React, { useState } from "react";
import { Grid, Typography, Switch, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "250px",
    paddingTop: "15px",
  },
  grid: {
    spacing: 2,
    alignItems: "center",
    justify: "center",
    paddingBottom: "20px",
  },
}));

function Settings(props) {
  const classes = useStyles();

  let [volumeActive, setVolumeActive, volume, setVolume] = props.funcs;
  let previousVolume = useState(parseInt(volume * 100))[0];

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify={"center"} className={classes.grid}>
        <Grid item>
          <Typography variant="h3">Volume</Typography>
        </Grid>
        <Grid item>
          <span>
            <Switch
              checked={volumeActive}
              onChange={(event) => {
                setVolumeActive(event.target.checked);
              }}
              color="secondary"
            />
          </span>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.grid}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            disabled={!volumeActive}
            defaultValue={previousVolume}
            volume={volume}
            onChange={(event, newVolume) => {
              setVolume(newVolume * 0.01);
            }}
            color="secondary"
            aria-labelledby="volume-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
