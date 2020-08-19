import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 30,
  },
  title: {
    marginTop: 30,
    fontWeight: 700,
    marginBottom: 30,
  },
}));

const PageTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
