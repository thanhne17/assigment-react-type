import instance from "./instance";
import {routeType} from "../type/route"

export const getAllRoute = async () => {
    const url = "/data/";
    return instance.get(url)
}

export const getOneRoute =async (id:number) => {
    const url = "/data/"+id;
    return instance.get(url)
}

export const addRoute =async (params:routeType) => {
    const url = "/data";
    return instance.post(url, params)
}

export const deleteRoute =async (id: number) => {
    const url = "/data/"+id;
    return instance.delete(url) 
}

export const updateRoute =async (id:number, params: routeType) => {
    const url = "/data/"+id;
    return instance.put(url, params)
}