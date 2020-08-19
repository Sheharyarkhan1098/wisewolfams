import React from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#000",
  },
  title: {
    fontWeight: 800,
    color: "#fff",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();

  const handleLogout = () => {
    cookie.set("token", "");
    cookie.set("userType", "");
    window.location = "/auth";
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container>
            <Grid item container sm={8}>
              {/* <img
                src="/images/logos/logo1.png"
                alt="the wise wolf"
                heigh="20px"
                width="50px"
              /> */}
              <Typography variant="h5" className={classes.title}>
                The Wise Wolf Security
              </Typography>
            </Grid>
            <Grid item container sm={4} justify="flex-end">
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
