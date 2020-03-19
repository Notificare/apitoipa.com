const axios = require("axios");
export const APIURL = "https://push.notifica.re";

export const createEmailContact = data =>
    axios({
        method: "post",
        url: `${APIURL}/email/subscribe`,
        data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + Buffer.from(`b3076f1c7ebd24ff283888ffe317e72a92a8e85516bed29f4f8d3e6eb8a65f83:cb3e338f219b251afeb10e80588a9095247e7b008cdd765e8dcdd17de4aabc9a`, 'utf8').toString('base64')
        }
    });

export const fetchDemoDetails = data =>
  axios({
    method: "get",
    url: data
  });
