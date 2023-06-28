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

const useStyle = makeStyles((theme) => ({
  colorAppbar: {
    backgroundColor: "#47A23F",
  },
}));

export const Measurer = () => {
  const classes = useStyle();
  return (
    <div>
      {" "}
      <Dialog fullScreen open={true} onClose={""}>
        <AppBar sx={{ color: "#47A23F" }}>
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
