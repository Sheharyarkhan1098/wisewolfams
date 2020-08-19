import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Grid, MenuItem, CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import cookie from "js-cookie";
import { create } from "../../../http/httpCalls";
import { clientAdmin, manager } from "../../../http/apis";
import { validateNewEntity } from "../../../utils/validationSchemas";

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

const NewEntityForm = ({ handleResponse, entityType }) => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const userType = cookie.get("userType");
  const [loading, setLoading] = useState(false);
  let addOrgData = clientAdmin.addOrgData;
  if(userType === "Manager"){
    addOrgData = manager.addOrgData;
  }


  useEffect(() => {
    if (!isUser) router.push("/auth");
    
  }, [isUser]);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { name: "", father_name: "", contact: "", address: "", entity_type: "", identity_no: "", RFID: "" },
    onSubmit: (values) => {;
     // console.log(values)
      setLoading(true);
      create(addOrgData, values)
        .then((res) => {
          setLoading(false);
          handleResponse({ res: true, error: false });
        })
        .catch((err) => {
          setLoading(false);
          handleResponse({ res: true, error: true });
        });
    },
    validationSchema: validateNewEntity,
  });

  return (
    <>
      <Grid item container>
        <Grid item container sm={6}  className={classes.m20}>
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
        <Grid item container sm={6} className={classes.m20}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Father's Name"
            name="father_name"
            variant="outlined"
            value={values.father_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.father_name && touched.father_name ? true : false}
            helperText={errors.father_name && touched.father_name ? errors.father_name : null}
          />
        </Grid>
        </Grid>
        <Grid item container>
        <Grid item container sm={6} className={classes.m20}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Mobile Number"
            name="contact"
            variant="outlined"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contact && touched.contact ? true : false}
            helperText={errors.contact && touched.contact ? errors.contact : null}
          />
        </Grid>
        <Grid item container sm={6}  className={classes.m20}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Address"
            name="address"
            variant="outlined"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.address && touched.address ? true : false}
            helperText={errors.address && touched.address ? errors.address : null}
          />
        </Grid>
        </Grid>
        <Grid item container className={classes.m20}>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            select
            id="outlined-basic"
            label="Entity Type"
            name="entity_type"
            variant="outlined"
            value={values.entity_type}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.entity_type && touched.entity_type ? true : false}
            helperText={
              errors.entity_type && touched.entity_type ? errors.entity_type : null
            }
          >
          <MenuItem value={entityType} selected>{entityType}</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid item container className={classes.m20}>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="CNIC / Passport"
            name="identity_no"
            variant="outlined"
            value={values.identity_no}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.identity_no && touched.identity_no ? true : false}
            helperText={errors.identity_no && touched.identity_no ? errors.identity_no : null}
          />
        </Grid>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="RFID"
            name="RFID"
            variant="outlined"
            value={values.RFID}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.RFID && touched.RFID ? true : false}
            helperText={errors.RFID && touched.RFID ? errors.RFID : null}
          />
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
      </Grid>
    </>
  );
};

export default NewEntityForm;
