import axios from "axios"
import {user} from "../type/user"

export const getOneUser = (id:String) => {
    const url = `http://localhost:3005/api/user/${id}`
    return axios.get(url)
}

export const updateUser = (id: String, data:user) => {
    const url = "http://localhost:3005/api/user/"+id;
    return axios.put(url, data)
}