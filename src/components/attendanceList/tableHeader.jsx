import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fafafa",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
}));

const TableHeader = ({entityType}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item sm={2}>
        <Typography className={classes.content} variant="body1">
          Date
        </Typography>
      </Grid>
      <Grid item sm={3}>
        <Typography className={classes.content} variant="body1">
          {entityType} Name
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.content} variant="body1">
          Contact
        </Typography>
      </Grid>
      <Grid item sm={1}>
        <Typography className={classes.content} variant="body1" align="center">
          Status
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.content} variant="body1" align="center">
          Time In
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.content} variant="body1" align="center">
          Time Out
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TableHeader;
