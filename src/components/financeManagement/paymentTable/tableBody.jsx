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

const TableBodyContent = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      {data.map((d) => (
        <TableRowContent
          key={d._id}
          data={{
            id: d._id,
            identity_no: d.identity_no,
            name: d.name,
            status: d.status,
            amount: d.amount,
            contact: d.contact,
            paymentType: d.paymentType
          }}
        />
      ))}
    </Grid>
  );
};

export default TableBodyContent;
