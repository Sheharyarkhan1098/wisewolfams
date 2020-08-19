import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextField: {
    width: "95%",
  },
  mb20: {
    marginBottom: 20,
  },
}));

const EntityField = ({
  entity,
  index,
  handleChange: handleAllValuesChange,
  entityValue,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState(entityValue);
  const [value, setValue] = useState("");

  let gridEven = index % 2 === 0 ? false : true;
  let entity_value =
    entityValue[`${entity.name}`] !== undefined
      ? entityValue[`${entity.name}`]
      : " ";
  console.log("Entity Name: ", entity_value);

  const handleChange = (e) => {
    setValue(e.target.value);
    handleAllValuesChange(e.target.value, e.target.name);
  };
  return (
    <Grid
      item
      container
      sm={6}
      className={classes.mb20}
      justify={gridEven ? "flex-start" : "flex-end"}
    >
      <TextField
        className={classes.TextField}
        id="outlined-basic"
        label="Entity Name"
        name={entity.name}
        variant="outlined"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default EntityField;
