import React, { useState } from "react";
import { makeStyles, Typography, Chip } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15px",
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
  present: {
    background: "#60b051",
    color: "#fff",
  },
  absent: {
    background: "#d92232",
    color: "#fff",
  },
  leaves: {
    background: "#f39c12",
    color: "#fff",
  },
}));

const TableRowContent = ({ data }) => {
  const classes = useStyles();
  data.status === "Entered" ? data.status = "Present" : data.status ;
  const badge =
    data.status === "Present"
      ? classes.present
      : data.status === "Absent"
      ? classes.absent
      : classes.leaves;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item sm={2}>
        <Typography variant="body2">{data.date}</Typography>
      </Grid>
      <Grid item sm={3} container>
        <Typography variant="body2">{data.username}</Typography>
      </Grid>
      <Grid item sm={2} container>
        <Typography variant="body2">{data.class}</Typography>
      </Grid>
      <Grid item sm={1} container justify="center">
        <Chip label={data.status} className={badge} />
      </Grid>
      <Grid item sm={2} container justify="center">
        <Typography variant="body2">{data.timeIn}</Typography>
      </Grid>
      <Grid item sm={2} container justify="center">
        <Typography variant="body2">{data.timeOut}</Typography>
      </Grid>
    </Grid>
  );
};

export default TableRowContent;
