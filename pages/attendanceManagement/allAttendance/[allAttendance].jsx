import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../../src/components/common/pageTitle";
import AttandanceTable from "../../../src/components/attendanceList/attandanceTable";
import SearchAttendance from "../../../src/components/attendanceList/searchBar.jsx/searchAttendance";
import { clientAdmin, manager } from '../../../http/apis';
import { get } from '../../../http/httpCalls';
import moment from 'moment';


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
}));

const AllAttendance = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const entity = router.query.allAttendance;
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchContact, setSearchContact] = useState("");
  const [dateQuery, setDateQuery] = useState("");
  const [month, setMonth] = useState("");
  const [monthText, setMonthText] = useState("");
  const userType = cookie.get('userType');
  let getAtendanceApi = clientAdmin.getAttendanceByClient;
  if( userType === 'Manager'){
    getAtendanceApi = manager.getAttendanceByManager;
  }

  
  

  useEffect(() => {
    if (!isUser) router.push("/auth");
    get(getAtendanceApi)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    }) 
  }, [isUser]);

  const handleChange = e => {
    e.preventDefault();
    if(e.target.name === "searchQuery")
    setSearchQuery(e.target.value);
    else setSearchContact(e.target.value);
  }

  const handleChangeDate = (month) => e => {
    e.preventDefault();
    if(e.target.value === ""){
      setDateQuery("");
    }
    else setDateQuery(`${month}/${e.target.value}/2020`);
  }

  const handleMonthChange = (month) => {
    setMonth(month);
    if(month === "01"){
      setMonthText("January");
    }else if(month === "02"){
      setMonthText("February");
    }else if(month === "03"){
      setMonthText("March");
    }else if(month === "04"){
      setMonthText("April");
    }else if(month === "05"){
      setMonthText("May");
    }else if(month === "06"){
      setMonthText("June");
    }else if(month === "07"){
      setMonthText("July");
    }else if(month === "08"){
      setMonthText("August");
    }else if(month === "09"){
      setMonthText("September");
    }else if(month === "10"){
      setMonthText("October");
    }else if(month === "11"){
      setMonthText("November");
    }else if(month === "12"){
      setMonthText("December");
    }else setMonthText("");
    console.log(month,monthText);
  };


  if (!isUser) return null;
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Attendance List"} />
        <Grid container className={classes.content}>
          <SearchAttendance searchQuery={searchQuery} searchContact={searchContact} handleChange={handleChange} handleChangeDate={handleChangeDate} handleMonthChange={handleMonthChange} month={month}/>
          {data && (
          <AttandanceTable data={data.filter(d => d.entity_type === entity && 
            (monthText !== "" ? moment(d.createdAt).format("MMMM") === monthText : d.name === d.name) &&
            ((searchQuery !== "" ? d.name === searchQuery : d.name === d.name) && 
            (searchContact !== "" ? d.contact === searchContact : d.contact === d.contact)) && 
            (dateQuery !== "" ? moment(d.createdAt).format("L") === dateQuery : moment(d.createdAt).format("L") === moment(d.createdAt).format("L")))} entityType={entity}/>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AllAttendance;
