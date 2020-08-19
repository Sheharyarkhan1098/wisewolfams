import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Grid } from "@material-ui/core";
import Cookie from 'js-cookie';
import TableRowContent from "./tableRowContent";

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
}));

const TableBodyContent = ({data: content, isTodayAttendance}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  const data = content;
  

 
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      {data.length === 0 && (<Grid item align="center" sm={12}>No Record Found</Grid>)}
      {data && (
        data.map((item) => (
          
          (item.status === "Entered") && (isTodayAttendance ? moment(item.createdAt).format("L") === moment().format("L") : true) && (
       <TableRowContent
          key={item._id}
        data={{
          date: moment(item.createdAt).format("L"),
          username: item.name,
          class: item.contact,
          status: item.status,
          timeIn: item.status === "Entered" ? moment(item.createdAt).format("LT") : null,
          timeOut: data.map((item2) => (moment(item2.createdAt).format("L") === moment(item.createdAt).format("L") && item2.name === item.name && item2.status === "Exit" ? moment(item2.createdAt).format("LT") : null ))
        }}
      />)))
      )}
    </Grid>
  );
};

export default TableBodyContent;
