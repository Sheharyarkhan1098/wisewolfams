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

const TableBodyContent = ({data}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      {data.map((d) => (
        <TableRowContent
          key={d.id}
          data={{
            id: d._id,
            roleCode: d.roleCode,
            roleTitle: d.userType,
            status: "Active",
          }}
        />
      ))}
    </Grid>
  );
};

export default TableBodyContent;
