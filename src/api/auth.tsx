import axios from "axios";
import { user } from "../type/user";
import instance from "./instance";

export const signup = (user: user) => {
    const url = "http://localhost:3005/api/signup";
    return axios.post(url, user)
}

export const signin = (data: user) => {
    const url = "http://localhost:3005/api/signin";
    return axios.post(url, data)
}