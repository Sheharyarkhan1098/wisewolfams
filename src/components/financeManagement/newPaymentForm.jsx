import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Grid, MenuItem, CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import { create } from "../../../http/httpCalls";
import { payment } from "../../../http/apis";
import { validatePayment } from "../../../utils/validationSchemas";


const useStyles = makeStyles((theme) => ({
  TextField: {
    width: "95%",
  },
  m20: {
    marginTop: 20,
  },
  mb20: {
    marginBottom: 20,
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

const NewPaymentForm = ({ handleResponse, isEditRequest, data }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const addPaymentApi = payment.add;
  const editPaymentApi = payment.edit;
  let api = addPaymentApi;
  if(isEditRequest === true){
    api = editPaymentApi;
  }
  if(isEditRequest !== true || data === undefined){
    data = {
      identity_no: "",
      paymentType: "",
      status: "",
      amount: "",
    }
  }
  

  // console.log(users);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { identity_no: data.identity_no, paymentType: data.paymentType, status: data.status, amount: data.amount },
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
      create(api, values)
        .then((res) => {
          setLoading(false);
          handleResponse({ res: true, error: false });
        })
        .catch((err) => {
          setLoading(false);
          handleResponse({ res: true, error: true });
        });
    },
    validationSchema: validatePayment,
  });


  return (
    <>
      <Grid item container>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Identity No."
            name="identity_no"
            variant="outlined"
            value={values.identity_no}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.identity_no && touched.identity_no ? true : false}
            helperText={errors.identity_no && touched.identity_no ? errors.identity_no : null}
            disabled={isEditRequest}
          />
        </Grid>
        <Grid item container sm={6} justify="flex-end">
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Payment Type"
            name="paymentType"
            value={values.paymentType}
            variant="outlined"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.paymentType && touched.paymentType ? true : false}
            helperText={
              errors.paymentType && touched.paymentType
                ? errors.paymentType
                : null
            }
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.m20}>
        <Grid item container sm={6}>
        <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Payment Status"
            name="status"
            value={values.status}
            variant="outlined"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.status && touched.status ? true : false}
            helperText={
              errors.status && touched.status
                ? errors.status
                : null
            }
          />
        </Grid>
        <Grid item container sm={6} justify="flex-end">
        <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Amount"
            name="amount"
            value={values.amount}
            variant="outlined"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.amount && touched.amount ? true : false}
            helperText={
              errors.amount && touched.amount
                ? errors.amount
                : null
            }
          />
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
            {isEditRequest ? "Edit" : "Add"}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
        </Grid>
       </>
  );
};

export default NewPaymentForm;
