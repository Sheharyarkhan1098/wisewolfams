import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import cookie from "js-cookie";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { Grid, Card, CardContent, CircularProgress } from "@material-ui/core";
import { signIn } from "../../../http/apis";
import { auth } from "../../../http/httpCalls";
import { validateAuth } from "../../../utils/validationSchemas";

const useStyle = makeStyles((theme) => ({
  card: {
    width: 650,
    position: "absolute",
    top: "30%",
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
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Login = ({ handleForm }) => {
  const authApi = signIn;
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      setLoading(!loading);
      auth(authApi, {
        email: values.email,
        password: values.password,
      })
        .then((res) => {
          cookie.set("token", res.data.token, { expires: 30 });
          cookie.set("userType", res.data.userType, { expires: 30 });
          console.log(res);
          setLoading(false);
          window.location = "/";
        })
        .catch((err) => {
          setLoading(false);
        });
    },
    validationSchema: validateAuth,
  });

  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardContent style={{ padding: 0 }}>
          <Grid container>
            <Grid item container sm={7} className={classes.form}>
              <Grid item container>
                <Typography variant="h5">Log In</Typography>
              </Grid>
              <Grid item container className={classes.m40}>
                <TextField
                  className={classes.textField}
                  name="email"
                  label="Email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? true : false}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </Grid>
              <Grid item container className={classes.m25}>
                <TextField
                  className={classes.textField}
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  error={errors.password && touched.password ? true : false}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </Grid>
              <Grid item container className={classes.m20}>
                <Grid item container sm={6}>
                  <div className={classes.wrapper}>
                    <Button
                      variant="contained"
                      className={classes.btn}
                      color="primary"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      Log In
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </Grid>
                {/* <Grid
                  item
                  container
                  sm={6}
                  alignItems="center"
                  justify="flex-end"
                >
                  <Typography
                    variant="body2"
                    className={classes.linkText}
                    onClick={() => handleForm("register")}
                  >
                    Create an account
                  </Typography>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid
              item
              container
              sm={5}
              justify="center"
              alignItems="center"
              // style={{ background: "#60b051" }}
              style={{ background: "#000000" }}
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

export default Login;
