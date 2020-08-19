import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./tableHeader";
import TableBodyContent from "./tableBodyContent";

const UsersTable = ({ data, handleDelete }) => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent data={data} handleDelete={handleDelete} />
    </Grid>
  );
};

export default UsersTable;
