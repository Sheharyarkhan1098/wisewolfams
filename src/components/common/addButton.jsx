import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Grid, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: 20,
    fontSize: 16.29,
    color: "#fff",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const AddButton = ({ handleSubmit, loading }) => {
  const classes = useStyles();

  return (
    <Grid item container>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={classes.btn}
          disabled={loading}
        >
          Add
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </Grid>
  );
};

export default AddButton;
