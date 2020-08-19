import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Grid } from "@material-ui/core";
import TableRowContent from "./tableRowContent";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
}));

const TableBodyContent = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      <TableRowContent
        data={{
          date: "01-06-2020",
          status: "Present",
          timeIn: "09:30 am",
          timeOut: "05:30 pm",
        }}
      />
      <TableRowContent
        data={{
          date: "02-06-2020",
          status: "Present",
          timeIn: "08:30 am",
          timeOut: "05:30 pm",
        }}
      />
      <TableRowContent
        data={{
          date: "03-06-2020",
          status: "Absent",
          timeIn: "09:30 am",
          timeOut: "04:30 pm",
        }}
      />
      <TableRowContent
        data={{
          date: "04-06-2020",
          status: "Present",
          timeIn: "09:30 am",
          timeOut: "05:30 pm",
        }}
      />
      <TableRowContent
        data={{
          date: "05-06-2020",
          status: "Leave",
          timeIn: "09:30 am",
          timeOut: "05:30 pm",
        }}
      />
    </Grid>
  );
};

export default TableBodyContent;
