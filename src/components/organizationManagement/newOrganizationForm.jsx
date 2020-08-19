import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Grid, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { createOrganization, getUsers } from "../../../http/httpCalls";
import { superAdmin } from "../../../http/apis";
import EntityField from "./entityField";
import { validateOrganization } from "../../../utils/validationSchemas";
import AddButton from "../common/addButton";

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
}));

const NewOrganizationForm = ({ handleResponse }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [entities, setEntities] = useState({ data: null });
  const [entityValue, setEntityValue] = useState({ entity1: "" });
  const [users, setUsers] = useState([]);
  const createOrgApi = superAdmin.createOrganization;
  const getUserApi = superAdmin.getUser;
  // console.log(users);
  if (!users.length)
    getUsers(getUserApi).then((res) => {
      setUsers(res.data);
    });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: { name: "", clientAdminId: "" },
    onSubmit: (values) => {
      setLoading(true);
      console.log(entityValue);
      createOrganization(createOrgApi, {
        name: values.name,
        clientAdminId: values.clientAdminId,
        entities: Object.values(entityValue),
      })
        .then((res) => {
          setLoading(false);
          setEntityValue({ entity1: "" });
          setEntities({ data: null });
          resetForm();
          handleResponse({ res: true, error: false });
        })
        .catch((err) => {
          setLoading(false);
          handleResponse({ res: true, error: true });
        });
    },
    validationSchema: validateOrganization,
  });

  const handleAddMore = () => {
    let _entities = entities.data ? entities.data : [];
    _entities.push({ name: `entity${_entities.length + 2}`, value: "" });
    setEntities({ data: _entities });
  };

  const handleEntityChange = (value, name) => {
    let _entityValue = entityValue;
    _entityValue[name] = value;
    setEntityValue(_entityValue);
  };

  return (
    <>
      <Grid item container>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Name"
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
            select
            id="outlined-basic"
            label="Client Name"
            name="clientAdminId"
            value={values.clientAdminId}
            variant="outlined"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.cliendId && touched.clientAdminId ? true : false}
            helperText={
              errors.clientAdminId && touched.clientAdminId
                ? errors.clientAdminId
                : null
            }
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            {users.length ? (
              users.filter(u => u.userType === "Client Admin").map((user) => (
                <MenuItem value={user._id} key={user._id}>
                  {user.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem key={0} value={""}>
                Loading...
              </MenuItem>
            )}
          </TextField>
        </Grid>
      </Grid>
      <Grid item container className={classes.m20}>
        <Grid item container sm={6}>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Entity Name"
            name="entity1"
            variant="outlined"
            type="text"
            onChange={(e) => handleEntityChange(e.target.value, e.target.name)}
          />
        </Grid>
        {entities.data &&
          entities.data.map((entity, index) => (
            <EntityField
              key={index}
              entity={entity}
              index={index}
              handleChange={handleEntityChange}
              entityValue={entityValue}
            />
          ))}
      </Grid>
      <Grid item container className={classes.m20} justify="flex-end">
        <Button variant="outlined" color="primary" onClick={handleAddMore}>
          + Add More Entity
        </Button>
      </Grid>
      <AddButton handleSubmit={handleSubmit} loading={loading} />
    </>
  );
};

export default NewOrganizationForm;
