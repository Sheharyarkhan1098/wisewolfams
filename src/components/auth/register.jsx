import React from "react";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { Grid, Card, CardContent } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    width: 650,
    transform: "translateY(25%)",
  },
  form: {
    padding: 30,
  },
  textField: {
    width: 330,
  },
  m20: {
    marginTop: 20,
  },
  m25: {
    marginTop: 20,
  },
  m40: {
    marginTop: 40,
  },
  btn: {
    color: "#fff",
    fontSize: 16.29,
  },
  linkText: {
    color: "#60b051",
    cursor: "pointer",
    "&:hover": {
      color: "#20c997",
    },
  },
  compnay: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 30,
  },
}));

const Register = ({ handleForm }) => {
  const classes = useStyle();
  return (
    <Grid
      container
      justify="center"
      //   alignItems="center
    >
      <Card className={classes.card}>
        <CardContent style={{ padding: 0 }}>
          <Grid container>
            <Grid item container sm={7} className={classes.form}>
              <Grid item container>
                <Typography variant="h5">Create New Account</Typography>
              </Grid>
              <Grid item container className={classes.m40}>
                <TextField
                  className={classes.textField}
                  label="Name"
                  type="text"
                />
              </Grid>
              <Grid item container className={classes.m25}>
                <TextField
                  className={classes.textField}
                  label="Phone"
                  type="text"
                />
              </Grid>
              <Grid item container className={classes.m25}>
                <TextField
                  className={classes.textField}
                  label="Email"
                  type="text"
                />
              </Grid>
              <Grid item container className={classes.m25}>
                <TextField
                  className={classes.textField}
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item container className={classes.m20}>
                <Grid item container sm={6}>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    color="primary"
                  >
                    Register
                  </Button>
                </Grid>
                <Grid
                  item
                  container
                  sm={6}
                  alignItems="center"
                  justify="flex-end"
                >
                  <Typography
                    variant="body2"
                    className={classes.linkText}
                    onClick={() => handleForm("login")}
                  >
                    I have an account
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sm={5}
              justify="center"
              alignItems="center"
              style={{ background: "#60b051" }}
            >
              <Typography variant="h5" className={classes.compnay}>
                The Wise Wolf
                <br />
                ---- Security ----
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Register;
