import * as Yup from "yup";

export const validateRole = Yup.object().shape({
  roleCode: Yup.string().min(2).required("Role Code is required"),
  userType: Yup.string().min(3).required("Role Name is required"),
});

export const validateAuth = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    // )
    .required("Password is required"),
});

export const validateNewUser = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name should have minimum 4 character")
    .required("Name is required"),
  phone: Yup.string()
    .min(10, "Name should have minimum 10 character")
    .required("Phone is required"),
  email: Yup.string().email().required("email is required"),
  userType: Yup.string().required("Role is required"),
});

export const validateOrganization = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name should have minimum 4 character")
    .required("Name is required"),
  clientAdminId: Yup.string().required("Client Name is required"),
});

export const validatePayment = Yup.object().shape({
  identity_no: Yup.string()
    .required("Identity No. is required"),
  amount: Yup.string().required("Amount is required"),
  status: Yup.string().required("status is required"),
  paymentType: Yup.string().required("Payment Type is required"),
});

export const validateNewEntity = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name should have minimum 4 character")
    .required("Name is required"),
  father_name: Yup.string()
  .min(4, "Name should have minimum 4 character")
  .required("Name is required"),
  contact: Yup.string()
    .min(10, "Name should have minimum 10 character")
    .required("Phone is required"),
  address: Yup.string()
  .min(4, "Name should have minimum 5 character")
  .required("Name is required"),
  identity_no: Yup.string()
  .required("Name is required"),
  RFID: Yup.string()
  .required("Name is required"),
  entity_type: Yup.string().required("Entity Type is required"),
});
