const axios = require("axios");
export const APIURL = "https://dashboard.notifica.re/api/v2";

export const loadForm = (type) =>
  axios({
    method: "get",
    url: `${APIURL}/forms/` + type
  });


export const submitForm = (type, data) =>
  axios({
    method: "post",
    url: `${APIURL}/forms/` + type,
    data,
    headers: { "Content-Type": "application/json" }
  });
