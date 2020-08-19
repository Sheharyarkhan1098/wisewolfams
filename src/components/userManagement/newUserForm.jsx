import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Grid, MenuItem, CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import cookie from "js-cookie";
import { createNewUser, getRoles } from "../../../http/httpCalls";
import { superAdmin, clientAdmin } from "../../../http/apis";
import { validateNewUser } from "../../../utils/validationSchemas";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    marginTop: 100,
    paddingLeft: 260,
    fontWeight: 700,
  },
  content: {
    background: "#fff",
    borderRadius: 6,
    padding: 30,
  },
  TextField: {
    width: "95%",
  },
  btn: {
    marginTop: 20,
    fontSize: 16.29,
    color: "#fff",
  },
  m20: {
    marginTop: 20,
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

const NewUserForm = ({ handleResponse }) => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const userType = cookie.get("userType");
  const [loading, setLoading] = useState(false);
  const getRolesApi = superAdmin.getRoles;
  const [roles, setRoles] = useState();
  let createUserApi = null;
  if( userType === "Super Admin"){
    createUserApi = superAdmin.createUser;
  }else {
    createUserApi = clientAdmin.createUser;
  }

  useEffect(() => {
    if (!isUser) router.push("/auth");
    getRoles(getRolesApi)
      .then((res) => {
        setRoles(res.data);
      })
      .catch((err) => console.log(err));
  }, [isUser]);

  console.log(roles);
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { name: "", phone: "", email: "", userType: "" },
    onSubmit: (values) => {
      setLoading(true);
      createNewUser(createUserApi, values)
        .then((res) => {
          setLoading(false);
          handleResponse({ res: true, error: false }, res.data.SavedUser);
        })
        .catch((err) => {
          setLoading(false);
          handleResponse({ res: true, error: true });
        });
    },
    validationSchema: validateNewUser,
  });
  console.log(values);
  return (
    <>
      <Grid item container>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Full Name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name ? true : false}
            helperText={errors.name && touched.name ? errors.name : null}
          />
        </Grid>
        <Grid item container sm={6} justify="flex-end">
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Mobile Number"
            name="phone"
            variant="outlined"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone && touched.phone ? true : false}
            helperText={errors.phone && touched.phone ? errors.phone : null}
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.m20}>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? true : false}
            helperText={errors.email && touched.email ? errors.email : null}
          />
        </Grid>
        <Grid item container sm={6} justify="flex-end">
          <TextField
            className={classes.TextField}
            select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            variant="outlined"
            label="Role"
            name="userType"
            value={values.userType}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userType && touched.userType ? true : false}
            helperText={
              errors.userType && touched.userType ? errors.userType : null
            }
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {userType === "Client Admin" && (
            roles ? (
              roles.map((d) => (
                <MenuItem key={d._id} value={d.userType}>{d.userType}</MenuItem>
              ))
            ) :
            <MenuItem>loading...</MenuItem>
            )}
            {userType === "Super Admin" && (
            <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
            )}
            {userType === "Super Admin" && (
            <MenuItem value={"Client Admin"}>Clinet Admin</MenuItem>
            )}
             {userType === "Manager" && (
            <MenuItem value={"Manager"}>Manager</MenuItem>
             )}
          </TextField>
        </Grid>
      </Grid>
      <Grid item container>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.btn}
            disabled={loading}
          >
            Add
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </Grid>
    </>
  );
};

export default NewUserForm;
