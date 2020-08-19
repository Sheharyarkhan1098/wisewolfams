import axios from "axios";
import cookie from "js-cookie";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${cookie.get("token")}`,
};

export function auth(url, data) {
  return axios.post(url, data);
}

export function createNewUser(url, data) {
  return axios.post(url, data, { headers: headers });
}

export function getUsers(url) {
  return axios.get(url, { headers: headers });
}

export function get(url) {
  return axios.get(url, {headers: headers});
}

export function getRoles(url) {
  return axios.get(url, { headers: headers });
}

export function createOrganization(url, data) {
  return axios.post(url, data, { headers: headers });
}

export function getOrganizations(url) {
  return axios.get(url, { headers: headers });
}

export function create(url, data) {
  console.log(url, "URL", data, "data");
  return axios.post(url, data, { headers: headers });
}

export function deleteData(url, data) {
  return axios.post(url, data, { headers: headers });
}
