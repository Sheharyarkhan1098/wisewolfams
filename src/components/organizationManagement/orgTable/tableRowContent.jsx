import React, { useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Container, Grid } from "@material-ui/core";
import Link from "../../../Link";

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
}));

const TableRowContent = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item sm={4}>
        <Link
          href="/userManagement/[user]"
          as={`/userManagement/${data.id}`}
          underline="none"
        >
          <Typography variant="body2" className={classes.username}>
            {data.orgName}
          </Typography>
        </Link>
      </Grid>
      <Grid item sm={4}>
        <Typography variant="body2">{data.clientName}</Typography>
      </Grid>
      {/* <Grid item sm={3}>
        <Typography variant="body2">{data.email}</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body2">{data.roleTitle}</Typography>
      </Grid> */}
      {/* <Grid item sm={1}>
        <Typography variant="body2">{data.status}</Typography>
      </Grid> */}
      <Grid container item sm={4} spacing={1} justify="center">
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
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableRowContent;
