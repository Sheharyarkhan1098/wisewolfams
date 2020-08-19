import React, { useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Container, Grid } from "@material-ui/core";
import { attendance} from "../../../http/apis.js"
import { create } from "../../../http/httpCalls.js"
import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15px",
  },
  username: {
    color: "#1875d2",
    fontWeight: "bold",
    "&:hover": {
      color: "#1b4a79",
    },
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
  btnDelete: {
    background: "#d92232",
  },
  btn: {
    color: "#fff",
  },
  btnEdit: {
    background: "#1875d2",
  },
  btnMark: {
    background: "#11970d",
  },
}));

const TableRowContent = ({ data, handleDelete }) => {
  const classes = useStyles();
  const markAttendanceApi = attendance.mark;

  const handleMark = (RFID) => {
    //console.log("RFID",RFID),
    create(markAttendanceApi, { "RFID": RFID})
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

 
  return (
    <Grid container className={classes.root}>
      <Grid item sm={2}>
        <Link
          href="/userManagement/[user]"
          as={`/userManagement/${data.id}`}
          underline="none"
        >
          <Typography variant="body2" className={classes.username}>
            {data.username}
          </Typography>
        </Link>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body2">{data.mobile}</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body2">{data.address}</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body2">{data.identity_no}</Typography>
      </Grid>
      <Grid container item sm={4} spacing={1} justify="center">
      <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.btn} ${classes.btnMark}`}
            startIcon=""
            onClick={() => handleMark(data.RFID)}
          >
            Mark
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.btn} ${classes.btnEdit}`}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.btn} ${classes.btnDelete}`}
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(data.RFID)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableRowContent;
