import React, { useState, useEffect, useContext, useRef } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import MeasurerDetails from "../../components/MeasurerDetails";
import {
  Dialog,
  AppBar,
  Typography,
  Slide,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

export const Measurer = () => {
  return (
    <div>
      {" "}
      <Dialog fullScreen open={true} onClose={""}>
        <AppBar>
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
