import axios from "axios"

export const getOneUser =async (id:String) => {
    const url = `http://localhost:3005/api/user/${id}`
    return axios.get(url)
}