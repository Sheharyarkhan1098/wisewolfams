import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  roleNameBox: {
    background: "#aadaa0",
    borderRadius: 6,
    height: 50,
    paddingLeft: 10,
    width: 300,
  },
  roleNameText: {
    fontSize: 16.29,
  },
  btn: {
    fontSize: 16.29,
    color: "#fff",
  },
}));

const RoleTitle = ({data, handleSubmit}) => {
  const classes = useStyles();

  return (
    <Grid item container>
      <Grid item container sm={6} spacing={3} alignItems="center">
        <Grid item>
          <Typography variant="h6" color="primary">
            Role Name
          </Typography>
        </Grid>
        <Grid item className={classes.roleNameBox}>
          <Grid item container alignItems="center" style={{ height: "100%" }}>
            <Typography className={classes.roleNameText} variant="body2">
              {data}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container sm={6} justify="flex-end">
        <Button onClick={handleSubmit} className={classes.btn} variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoleTitle;
