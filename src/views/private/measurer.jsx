import MeasurerDetails from '../../components/MeasurerDetails';
import { makeStyles } from '@material-ui/core/styles';

import { Dialog, AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#3f9948',
    position: 'fixed',
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
      <Dialog
        fullScreen
        open={true}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
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
