import instance from "./instance";
import {routeType} from "../type/route"
import axios from "axios";

export const getAllRoute = async () => {
    const url = "http://localhost:3005/api/course";
    return axios.get(url)
}

export const getOneRoute = async (id:number) => {
    const url = "http://localhost:3005/api/course/"+id;
    return axios.get(url)
}

export const addRoute =async (params:routeType) => {
    const url = "/data";
    return instance.post(url, params)
}

export const deleteRoute =async (id: number) => {
    const url = "http://localhost:3005/api/"+id;
    return axios.delete(url) 
}

export const updateRoute =async (id:number, params: routeType) => {
    const url = "http://localhost:3005/api/course/"+id;
    return axios.put(url, params)
}