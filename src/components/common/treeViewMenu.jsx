import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { getOrganizations, create } from "../../../http/httpCalls";
import { clientAdmin, manager } from "../../../http/apis";
import Cookie from "js-cookie";
import Link from "../../Link";
//for styled TreeItem
import PropTypes from "prop-types";
import PeopleIcon from "@material-ui/icons/People";
import MailIcon from "@material-ui/icons/Mail";
import BusinessIcon from "@material-ui/icons/Business";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AddBoxIcon from "@material-ui/icons/AddBox";
import TableChartIcon from "@material-ui/icons/TableChart";
import PanToolIcon from "@material-ui/icons/PanTool";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import TodayIcon from "@material-ui/icons/Today";
import CalenderTodayIcon from "@material-ui/icons/CalendarToday";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
// import jwt from "jsonwebtoken";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,0.8)",
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
    color: "rgba(255,255,255,0.8)",
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    height: "100%",
    color: "rgba(255,255,255,0.5)",
    backgroundColor: "rgba(0,0,0,0)",
  },
  arrow: {
    color: "rgba(255,255,255,0.5)",
  },
});

export default function TreeViewMenu() {
  const classes = useStyles();
  const userType = Cookie.get("userType");
  let getOrgIdApi = null;
  let getOrgdataApi = null;
  const [organizations, setOrganizations] = useState();

  if (userType !== "Super Admin") {
    useEffect(() => {
      if (userType === "Client Admin") {
        getOrgIdApi = clientAdmin.getOrgId;
        getOrgdataApi = clientAdmin.getOrgById;
      }
      if (userType === "Manager") {
        getOrgIdApi = manager.getOrgId;
        getOrgdataApi = manager.getOrgById;
      }
      getOrganizations(getOrgIdApi)
        .then((res) => {
          create(getOrgdataApi, `{"orgid" : "${res.data}"}`)
            .then((res) => {
              setOrganizations(res.data);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }, [true]);
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon className={classes.arrow} />}
      defaultExpandIcon={<ChevronRightIcon className={classes.arrow} />}
      multiSelect
    >
      <Link href="/" underline="none">
        <StyledTreeItem
          nodeId="0"
          labelText="Dashboard"
          labelIcon={AssessmentIcon}
        />
      </Link>
      {/* <TreeItem nodeId="1" label="Role & Permission"> */}
      {/* <Link href="/assignControlToRoles" underline="none">
          <TreeItem nodeId="101" label="Assign User Control" />
        </Link> */}
      <StyledTreeItem
        nodeId="1"
        labelText="Roles Management"
        labelIcon={AccessibilityIcon}
      >
        {userType === "Super Admin" && (
          <Link href="/roleManagement/add" underline="none">
            <StyledTreeItem
              nodeId="101"
              labelText="Add Role"
              labelIcon={AddBoxIcon}
            />
          </Link>
        )}
        <Link href="/roleManagement/view" underline="none">
          <StyledTreeItem
            nodeId="102"
            labelText="View Role"
            labelIcon={TableChartIcon}
          />
        </Link>
      </StyledTreeItem>
      {userType === "Super Admin" && (
        <StyledTreeItem
          nodeId="2"
          labelText="Organization Management"
          labelIcon={BusinessIcon}
        >
          <Link href="/organizationManagement/add" underline="none">
            <StyledTreeItem
              nodeId="201"
              labelText="Add Organization"
              labelIcon={AddBoxIcon}
            />
          </Link>
          <Link href="/organizationManagement/view" underline="none">
            <StyledTreeItem
              nodeId="202"
              labelText="View Organizations"
              labelIcon={TableChartIcon}
            />
          </Link>
        </StyledTreeItem>
      )}
      {userType === "Super Admin" && (
        <StyledTreeItem
          nodeId="3"
          labelText="User Management"
          labelIcon={PeopleIcon}
        >
          <Link href="/userManagement/addUser" underline="none">
            <StyledTreeItem
              nodeId="301"
              labelText="Add User"
              labelIcon={AddBoxIcon}
            />
          </Link>
          <Link href="/userManagement/viewUser" underline="none">
            <StyledTreeItem
              nodeId="302"
              labelText="View Users"
              labelIcon={TableChartIcon}
            />
          </Link>
        </StyledTreeItem>
      )}
      {userType !== "Super Admin" && (
        <StyledTreeItem
          nodeId="6"
          labelText="Finance Management"
          labelIcon={MonetizationOnIcon}
        >
          <Link href="/financeManagement/add" underline="none">
            <StyledTreeItem
              nodeId="601"
              labelText="Add Pament"
              labelIcon={AddBoxIcon}
            />
          </Link>
          <Link href="/financeManagement/view" underline="none">
            <StyledTreeItem
              nodeId="602"
              labelText="View Payment"
              labelIcon={TableChartIcon}
            />
          </Link>
        </StyledTreeItem>
      )}
      {(userType === "Client Admin" || userType === "Manager") &&
        organizations &&
        organizations[0].entities.map((entity, i) => (
          <StyledTreeItem
            key={i}
            nodeId={`${i}1`}
            labelText={`${entity} Managment`}
            labelIcon={SentimentSatisfiedAltIcon}
          >
            <Link
              href="/entity/add/[addEntity]"
              as={`/entity/add/${entity}`}
              underline="none"
            >
              <StyledTreeItem
                nodeId={`${i}11`}
                labelText={`Add ${entity}`}
                labelIcon={AddBoxIcon}
              />
            </Link>
            <Link
              href="/entity/view/[viewEntity]"
              as={`/entity/view/${entity}`}
              underline="none"
            >
              <StyledTreeItem
                nodeId={`${i}12`}
                labelText={`View ${entity}`}
                labelIcon={TableChartIcon}
              />
            </Link>
          </StyledTreeItem>
        ))}

      {(userType === "Client Admin" || userType === "Manager") &&
        organizations && (
          <StyledTreeItem
            nodeId="4"
            labelText="Attendance Management"
            labelIcon={PanToolIcon}
          >
            {organizations &&
              organizations[0].entities.map((entity, i) => (
                <StyledTreeItem
                  key={i}
                  nodeId={`${i}0`}
                  labelText={`${entity}`}
                  labelIcon={SentimentSatisfiedAltIcon}
                >
                  <Link
                    href="/attendanceManagement/todayAttendance/[todayAttendance]"
                    as={`/attendanceManagement/todayAttendance/${entity}`}
                    underline="none"
                  >
                    <StyledTreeItem
                      nodeId={`${i}01`}
                      labelText="Today's Attendance"
                      labelIcon={TodayIcon}
                    />
                  </Link>
                  <Link
                    href="/attendanceManagement/thisMonthAttendance/[thisMonthAttendance]"
                    as={`/attendanceManagement/thisMonthAttendance/${entity}`}
                    underline="none"
                  >
                    <StyledTreeItem
                      nodeId={`${i}02`}
                      labelText="This Month's Attendance"
                      labelIcon={CalenderTodayIcon}
                    />
                  </Link>
                  <Link
                    href="/attendanceManagement/allAttendance/[allAttendance]"
                    as={`/attendanceManagement/allAttendance/${entity}`}
                    underline="none"
                  >
                    <StyledTreeItem
                      nodeId={`${i}03`}
                      labelText="View All Attendance"
                      labelIcon={CalenderTodayIcon}
                    />
                  </Link>
                </StyledTreeItem>
              ))}
          </StyledTreeItem>
        )}
      {/* <Link href="/attendanceManagement/todayAttendance" underline="none">
          <TreeItem nodeId="401" label="Today's Attendance" />
        </Link>
        <Link href="/attendanceManagement/thisMonthAttendance" underline="none">
          <TreeItem nodeId="402" label="This Month's Attendance" />
        </Link>
        <Link href="/attendanceManagement/allAttendance" underline="none">
          <TreeItem nodeId="403" label="View All Attendance" />
        </Link> */}
    </TreeView>
  );
}
