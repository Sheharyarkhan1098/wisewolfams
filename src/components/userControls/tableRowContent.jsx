import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
}));

const TableRowContent = ({ moduleName , moduleValues, handleChange }) => {
  const classes = useStyles();
  // const [tabVisibility, setTabVisibility] = useState(moduleValues.tab);
  // const [create, setCreate] = useState(moduleValues.create);
  // const [view, setView] = useState(true);
  // const [modify, setModify] = useState(true);
  // const [remove, setRemove] = useState(true);
  // const [active, setActive] = useState(true);
  // const [inactive, setInactive] = useState(true);
  // const [all, setAll] = useState(true);

  const  tab =  moduleValues.tab;
  const  create= moduleValues.create;
  const  view= moduleValues.view;
  const  modify= moduleValues.modify;
  const  remove= moduleValues.remove;
  const  active= moduleValues.active;
  const  inactive= moduleValues.inactive;
  const all = moduleValues.all;

  

  // const handleTabVisibility = (event) => {
  //   setTabVisibility(event.target.checked);
  // };
  // const handleCreate = (event) => {
  //   setCreate(event.target.checked);
  // };
  // const handleView = (event) => {
  //   setView(event.target.checked);
  // };
  // const handleModify = (event) => {
  //   setModify(event.target.checked);
  // };
  // const handleRemove = (event) => {
  //   setRemove(event.target.checked);
  // };
  // const handleActive = (event) => {
  //   setActive(event.target.checked);
  // };
  // const handleInactive = (event) => {
  //   setInactive(event.target.checked);
  // };
  // const handleAll = (event) => {
  //   setAll(event.target.checked);
  //   setInactive(event.target.checked);
  //   setActive(event.target.checked);
  //   setRemove(event.target.checked);
  //   setModify(event.target.checked);
  //   setView(event.target.checked);
  //   setCreate(event.target.checked);
  //   setTabVisibility(event.target.checked);
  // };

  return (
    <Grid container className={classes.root}>
      <Grid item sm={3}>
        <Typography variant="body2">{moduleName}</Typography>
      </Grid>
      <Grid item sm={2} container justify="center">
        <Checkbox name="tab" checked={tab} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="create" checked={create} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="view" checked={view} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="modify" checked={modify} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="remove" checked={remove} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="active" checked={active} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="inactive" checked={inactive} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
      <Grid item sm={1} container justify="center">
        <Checkbox name="all" checked={all} onChange={handleChange(moduleName)} color={"primary"} />
      </Grid>
    </Grid>
  );
};

export default TableRowContent;
