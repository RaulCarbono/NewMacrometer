import React, { useState, useEffect, useContext, useRef } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import MeasurerDetails from "../../components/MeasurerDetails";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  AppBar,
  Typography,
  Slide,
  IconButton,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#3f9948",
    position: "fixed",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export const Measurer = () => {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <Dialog fullScreen open={true} onClose={""}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={""}
              aria-label="close"
            >
              x
            </IconButton>
            <Typography variant="h6">Macromedidor con serial</Typography>
          </Toolbar>
        </AppBar>

        <MeasurerDetails />
      </Dialog>
    </div>
  );
};
