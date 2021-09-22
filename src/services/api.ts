import axios from "axios";
const md5 = require("md5");

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    ts: process.env.REACT_APP_TS,
    apikey: process.env.REACT_APP_PUBLIC_KEY,
    hash: md5(
      `${process.env.REACT_APP_TS}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
    ),
  },
});
