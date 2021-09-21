import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    ts: process.env.REACT_APP_TS,
    apikey: process.env.REACT_APP_PUBLIC_KEY,
    hash: process.env.REACT_APP_HASH,
  },
});
