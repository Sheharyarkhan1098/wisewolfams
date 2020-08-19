import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../../src/components/common/pageTitle";
import { getOrganizations, create, deleteData } from "../../../http/httpCalls";
import { clientAdmin, manager } from "../../../http/apis";
import EntityTable from "../../../src/components/viewEntity/entityTable";



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

const ViewEntity = () => {
  const classes = useStyles();
  const isUser = Cookie.get("token");
  const router = useRouter();
  const { viewEntity } = router.query;
  const userType = Cookie.get("userType");
  let getOrgIdApi = null;
  let getOrgdataApi = null;
  const [delEntityApi, setDelEntityApi] = useState();
  const [organizations, setOrganizations] = useState();
 

  useEffect(() => {
    if (!isUser) router.push("/auth");
    if(userType === "Client Admin"){
      getOrgIdApi = clientAdmin.getOrgId;
      getOrgdataApi = clientAdmin.getOrgById;
      const delEntity = clientAdmin.deleteEntity;
      setDelEntityApi(delEntity)
   }
   if(userType === "Manager"){
      getOrgIdApi = manager.getOrgId;
      getOrgdataApi = manager.getOrgById;
      const delEntity = manager.deleteEntity;
      setDelEntityApi(delEntity)
   }
    getOrganizations(getOrgIdApi)
      .then((res) => {
        create(getOrgdataApi, `{"orgid" : "${res.data}"}`)
        .then((res) => {
        setOrganizations(res.data[0].data);})
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [isUser]);

  const handleDelete = (id) => {
    const orignalUsers = organizations;
    const updatedOrgs = organizations.filter(u => u.RFID !== id);
    setOrganizations(updatedOrgs);
    deleteData(delEntityApi, `{ "rfid" : "${id}" }`)
    .then(res => res)
    .catch(err => {console.log(err); setOrganizations(orignalUsers)})
  }

  

  if (!isUser) return null;
  //console.log("data:", organizations);
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={`List of ${viewEntity}`} />
        <Grid container justify="center" className={classes.content}>
          {organizations ? (
            <EntityTable data={organizations.filter(d => d.entity_type === viewEntity)} handleDelete={handleDelete} />
          ) : (
            "Loading....."
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ViewEntity;
