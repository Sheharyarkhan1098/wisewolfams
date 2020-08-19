import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./paymentTable/tableHeader";
import TableBodyContent from "./paymentTable/tableBody";

const OrganizationTable = ({ data }) => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent data={data} />
    </Grid>
  );
};

export default OrganizationTable;
