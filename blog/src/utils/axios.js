import axios from "axios";

export const API = axios.create({
  baseURL: "https://oba-lol-obashu.vercel.app",
  headers: {
    "Authorization": localStorage.getItem("token") || ""
  },
});