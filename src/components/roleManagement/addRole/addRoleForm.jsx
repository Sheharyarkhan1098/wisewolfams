import React, { useState } from "react";
import { makeStyles, TextField, Grid } from "@material-ui/core";
import { useFormik } from "formik";
import { validateRole } from "../../../../utils/validationSchemas";
import { create } from "../../../../http/httpCalls";
import { superAdmin } from "../../../../http/apis";
import AddButton from "../../common/addButton";

const useStyles = makeStyles((theme) => ({
  mainBox: {
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
}));

const AddRoleForm = ({ handleResponse }) => {
  const classes = useStyles();
  const createRoleApi = superAdmin.createRole;
  const [loading, setLoading] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: { roleCode: "", userType: "" },
    onSubmit: (values) => {
      setLoading(!loading);
      create(createRoleApi, values)
        .then((res) => {
          resetForm();
          setLoading(!loading);
          handleResponse({ res: true, error: false });
        })
        .catch((err) => console.log("errors: ", err));
    },
    validationSchema: validateRole,
  });
  return (
    <>
      <Grid container item sm={6}>
        <TextField
          className={classes.TextField}
          id="outlined-basic"
          label="Role Code"
          variant="outlined"
          type="text"
          name="roleCode"
          value={values.roleCode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.roleCode && touched.roleCode ? true : false}
          helperText={
            errors.roleCode && touched.roleCode ? errors.roleCode : ""
          }
        />
      </Grid>
      <Grid container item sm={6} justify="flex-end">
        <TextField
          className={classes.TextField}
          id="outlined-basic"
          label="Role Title"
          variant="outlined"
          type="text"
          name="userType"
          value={values.userType}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.userType && touched.userType ? true : false}
          helperText={
            errors.userType && touched.userType ? errors.userType : ""
          }
        />
      </Grid>
      <AddButton handleSubmit={handleSubmit} loading={loading} />
    </>
  );
};

export default AddRoleForm;
