import axios from "axios";

const instance = axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/https://thebetter.bsgroup.eu",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  },
});

export default instance;
