import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import GetAppIcon from "@material-ui/icons/GetApp";
import DasboardCard from "../dashboardCard";
import PieChart from "../pieChart";
import BarChart from "../barChart";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "94%",
    height: 150,
  },
  cardHeading: {
    color: "#969696",
    fontSize: 15,
  },
  cardCount: {
    color: "#6c757d",
    marginTop: 10,
    marginBottom: 10,
  },
  textSuccess: {
    color: "#0acf97!important",
  },
  iconSuccess: {
    color: "#0acf97!important",
    fontSize: 25,
  },
  textDanger: {
    color: "#fa5c7c!important",
  },
  iconDanger: {
    color: "#fa5c7c!important",
    fontSize: 25,
  },
}));

const SuperAdminDashboard = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container justify="center">
        <Grid item container sm={3}>
          <DasboardCard status={true} title={"Customers"} />
        </Grid>
        <Grid item sm={3}>
          <DasboardCard status={false} title={"Organizations"} />
        </Grid>
        <Grid item sm={3}>
          <DasboardCard status={true} title={"Entities"} />
        </Grid>
        <Grid item sm={3}>
          <DasboardCard status={true} title={"Users"} />
        </Grid>
      </Grid>
      <Grid item container style={{ marginTop: 30 }}>
        <Grid sm={6}>
          <PieChart />
        </Grid>
        <Grid sm={6} style={{ width: "95%" }}>
          <Grid item container style={{ background: "#fff", padding: 10 }}>
            <BarChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SuperAdminDashboard;
