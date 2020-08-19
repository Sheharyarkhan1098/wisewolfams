import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import UsersTable from "../../src/components/viewUsers/usersTable";
import { getUsers, deleteData } from "../../http/httpCalls";
import { superAdmin, clientAdmin } from "../../http/apis";

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
    marginTop: 30,
    fontSize: 16.29,
    color: "#fff",
  },
}));

const ViewUsers = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const userType = cookie.get("userType");
  const router = useRouter();
  let getUserApi = superAdmin.getUser;
  let delUserApi = superAdmin.deleteUser;
  if (userType === "Client Admin"){
    getUserApi = clientAdmin.getManagers;
    delUserApi = clientAdmin.deletemanager;
  }
  const [users, setUsers] = useState();

  useEffect(() => {
    if (!isUser) router.push("/auth");
    getUsers(getUserApi).then((res) => {
      setUsers(res.data);
    });
  }, [isUser]);

  const handleDelete = (id) => {
    console.log("to be del", id)
    const orignalUsers = users;
    const updatedUsers = users.filter(u => u._id !== id);
    setUsers(updatedUsers);
    deleteData(delUserApi, {id})
    .then(res => res)
    .catch(err => {console.log(err); setUsers(orignalUsers)})
  }

  if (!isUser) return null;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"List of Users"} />
        <Grid container justify="center" className={classes.content}>
          {users ? <UsersTable data={users} handleDelete={handleDelete}/> : "Loading....."}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ViewUsers;
