const apiEndPoint = "https://amsbackend-api.herokuapp.com/";

const superAdminEndPoint = `${apiEndPoint}superadmin/`;

export const signIn = `${apiEndPoint}signin`

export const superAdmin = {
  signup: `${superAdminEndPoint}signup`,
  signIn: `${superAdminEndPoint}signin`,
  createUser: `${superAdminEndPoint}createuser`,
  createRole: `${superAdminEndPoint}addrole`,
  assignRole: `${superAdminEndPoint}assignroles`,
  getRoles: `${superAdminEndPoint}getrole`,
  getUser: `${superAdminEndPoint}getusers`,
  deleteUser: `${superAdminEndPoint}deleteuser`,
  assignPermissions: `${superAdminEndPoint}permissions`,
  editPermissions: `${superAdminEndPoint}editpermissions`,
  createOrganization: `${superAdminEndPoint}addorg`,
  getOrganizations: `${superAdminEndPoint}getorgs`,
};
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjJkNWYwZDU0Y2YxNjQzZWNjMWE3YWMiLCJlbWFpbCI6InNhcmFAZ21haWwuY29tIiwibmFtZSI6InNhcmEiLCJwaG9uZSI6IjAzMzY2NTY2NTYiLCJ1c2VyVHlwZSI6IkNsaWVudCBBZG1pbiIsImlhdCI6MTU5NjgwOTA3NywiZXhwIjoxNjI4MzQ1MDc3fQ.twvJxK-2z8mRfZCVSwvuYfrJLdRDrQBLyjWflajTzyI
const clientAdminEndPoint = `${apiEndPoint}clientAdmin/`;
export const clientAdmin = {
  signIn: `${clientAdminEndPoint}signin`,
  createUser: `${clientAdminEndPoint}createuser`,
  addOrgData: `${clientAdminEndPoint}addorgdata`,
  getUserAttendance: `${clientAdminEndPoint}getuserattend`,
  getManagers: `${clientAdminEndPoint}getmanagers`,
  deletemanager: `${clientAdminEndPoint}deletemanager`,
  getOrgId: `${clientAdminEndPoint}getorgid`,
  getOrgById: `${clientAdminEndPoint}getorgdatabyorgid`,
  getAttendanceByClient: `${clientAdminEndPoint}getattendbyclient`,
  getAttendanceByEntity: `${clientAdminEndPoint}getattendbyentity`,
  deleteEntity: `${clientAdminEndPoint}deletedata`,
};

const managerEndPoint = `${apiEndPoint}manager/`;

export const manager = {
  signIn: `${managerEndPoint}signin`,
  addOrgData: `${managerEndPoint}addorgdata`,
  getOrgData: `${managerEndPoint}getorgdata`,
  getUserAttendance: `${managerEndPoint}getuserattend`,
  getOrgId: `${managerEndPoint}getorgid`,
  getOrgById: `${managerEndPoint}getorgdatabyorgid`,
  getAttendanceByManager: `${managerEndPoint}getattendbymanager`,
  getAttendanceByEntity: `${managerEndPoint}getattendbyentity`,
  deleteEntity: `${managerEndPoint}deletedata`,
};

export const attendance = {
  mark: `${apiEndPoint}attendance/mark`,
};

export const payment = {
  add: `${apiEndPoint}payment/add`,
  getUserInfo: `${apiEndPoint}payment/getuserinfo`,
  edit: `${apiEndPoint}payment/edit`,
  getOrgPaymentClientAdmin: `${apiEndPoint}payment/getorgpaymentclientadmin`,
};
